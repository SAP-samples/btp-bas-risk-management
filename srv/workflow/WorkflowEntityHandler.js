const xsenv = require('@sap/xsenv');
const xssec = require('@sap/xssec');
const axios = require("axios");

const DEFINITION_ID_ANNOTATION = '@workflow.start.definitionId';
const START_DATAOBJECT_ANNOTATION = '@workflow.start.dataObject';
const START_PROPERTY_ANNOTATION = '@workflow.start.property';
const TASK_UPDATE_OBJECT_ANNOTATION = '@workflow.task.update.dataObject';
const TART_PROPERTY_ANNOTATION = '@workflow.task.property';
const CAP_ENTITY_KEY_NAME = 'capEntityKeyObject';

class WorkflowEntityHandler {
  constructor(definition) {
    this.entityDefinition = definition || {};
    this.definitionId = _getAnnotatedValue(this.entityDefinition, DEFINITION_ID_ANNOTATION);
    this.keyPropertyNames = _getKeyPropertyNames(this.entityDefinition);
    this.startDataObjectName = _getAnnotatedValue(this.entityDefinition, START_DATAOBJECT_ANNOTATION);
    this.startPropertyNames = _getAnnotatedPropertyNames(this.entityDefinition, START_PROPERTY_ANNOTATION);
    this.taskDataObjectName = _getAnnotatedValue(this.entityDefinition, TASK_UPDATE_OBJECT_ANNOTATION);
    this.taskPropertyNames = _getAnnotatedPropertyNames(this.entityDefinition, TART_PROPERTY_ANNOTATION);

    this.OnAfterEntityCreate = this.OnAfterEntityCreate.bind(this);
    this.OnAfterEntityUpdate = this.OnAfterEntityUpdate.bind(this);
  }

  getStartContext(data) {
    const startContext = {};
    if (data && this.startDataObjectName) {
      const keyObject = {};
      this.keyPropertyNames.forEach(name => {
        if (data[name] !== undefined) {
          keyObject[name] = data[name];
        }
      });
      startContext[CAP_ENTITY_KEY_NAME] = keyObject;
      const startDataObject = {};
      this.startPropertyNames.forEach(name => {
        if (data[name] !== undefined) {
          startDataObject[name] = data[name];
        }
      });
      startContext[this.startDataObjectName] = startDataObject;
    }
    return startContext;
  }

  getTaskContext(data) {
    const taskContext = {};
    if (data && this.taskDataObjectName) {
      const taskDataObject = {};
      this.taskPropertyNames.forEach(name => {
        if (data[name] !== undefined) {
          taskDataObject[name] = data[name];
        }
      });
      taskContext[this.taskDataObjectName] = taskDataObject;
    }
    return taskContext;
  }

  async OnAfterEntityCreate(data, request) {
    try {
      if (request) {
        console.debug('[lcap] The create workflow entity after event handler is trigerred.');
        request.on('succeeded', async () => {
          console.debug('[lcap] The create workflow entity request succeeded event handler is trigerred.');
          const workflowService = _getWorkflowService();
          if (workflowService && this.definitionId) {
            const accessToken = await _getAccessToken(workflowService, request);
            if (accessToken) {
              console.info('[lcap] Starting workflow with definition ID "' + this.definitionId + '"...');
              const workflowResponse = await axios.request({
                url: workflowService.endpoints.workflow_rest_url + '/v1/workflow-instances',
                method: "post",
                data: {
                  "definitionId": this.definitionId,
                  "context": this.getStartContext(data)
                },
                headers: {
                  "Authorization": `Bearer ${accessToken}`,
                  'Content-Type': 'application/json'
                },
              });
              if (workflowResponse.status === 201) {
                console.info('[lcap] Workflow "' + workflowResponse.data.id + '" successfully started.');
              } else {
                console.debug(workflowResponse);
                console.error('[lcap] Workflow "' + workflowResponse.data.id + '" failed to started (' + workflowResponse.status + ').');
              }
            }
          }
        });
      }
    } catch (error) {
      _dumpCaughtError(error);
    }
  }

  async OnAfterEntityUpdate(data, request) {
    try {
      if (request) {
        console.debug('[lcap] The update workflow entity after event handler is trigerred.');
        request.on('succeeded', async () => {
          console.debug('[lcap] The update workflow entity request succeeded event handler is trigerred.');
          const requestBody = request._.odataReq.getBody();
          if (requestBody) {
            const taskInstanceId = requestBody.taskInstanceId;
            const taskDecisionId = requestBody.taskDecisionId;
            const workflowService = _getWorkflowService();
            if (workflowService && taskInstanceId && taskDecisionId) {
              const accessToken = await _getAccessToken(workflowService, request);
              if (accessToken) {
                console.info('[lcap] Updating workflow task with instance ID "' + taskInstanceId + '"...');
                const workflowResponse = await axios.request({
                  url: workflowService.endpoints.workflow_rest_url + `/v1/task-instances/${taskInstanceId}`,
                  method: "patch",
                  data: {
                    "decision": taskDecisionId,
                    "context": this.getTaskContext(data),
                    "status": "COMPLETED"
                  },
                  headers: {
                    "Authorization": `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                  },
                });
                if (workflowResponse.status === 204) {
                  console.info('[lcap] Workflow task "' + taskInstanceId + '" successfully updated.');
                } else {
                  console.debug(workflowResponse);
                  console.error('[lcap] Workflow task "' + taskInstanceId + '" failed to updated (' + workflowResponse.status + ').');
                }
              }
            }
          }
        });
      }
    } catch (error) {
      _dumpCaughtError(error);
    }
  }

  static isWorkflowEntity(definition) {
    return definition && definition.kind === 'entity' && (
      _getAnnotatedValue(definition, DEFINITION_ID_ANNOTATION) ||
      _getAnnotatedValue(definition, TASK_UPDATE_OBJECT_ANNOTATION));
  }
}

function _getAnnotatedValue(definition, annotation) {
  const pathAnnotationValue = definition[annotation] && definition[annotation]['='];
  const textAnnotationValue = definition[annotation];
  return pathAnnotationValue || textAnnotationValue || '';
}

function _getAnnotatedPropertyNames(definition, annotation) {
  const propertyNames = [];
  Object.entries(definition.elements).forEach(([name, property]) => {
    if (property[annotation]) {
      propertyNames.push(name);
    }
  });
  return propertyNames;
}

function _getKeyPropertyNames(definition) {
  const keyPropertyNames = [];
  Object.entries(definition.elements).forEach(([name, property]) => {
    if (property.key && !property['@UI.Hidden']) {
      keyPropertyNames.push(name);
    }
  });
  return keyPropertyNames;
}

function _getWorkflowService() {
  try {
    return xsenv.getServices({ workflow: { label: 'workflow' } }).workflow;
  } catch (error) {
    console.error(error.message);
  }
}

function _getXSUAAService() {
  try {
    return xsenv.getServices({ xsuaa: { tag: 'xsuaa' } }).xsuaa;
  } catch (error) {
    console.error(error.message);
  }
}

async function _getAccessToken(service, request) {
  try {
    if (request && request.headers.authorization && request.headers.authorization.split(' ').length > 1) {
      const requestToken = request.headers.authorization.split(' ')[1];
      if (requestToken) {
        return new Promise((resolve, reject) => {
          const xsuaa = _getXSUAAService();
          if (xsuaa) {
            xssec.createSecurityContext(requestToken, xsuaa, (error, securityContext) => {
              if (error) {
                console.error('[lcap] Workflow createSecurityContext ERROR:');
                reject(error);
              } else {
                securityContext.requestToken(service.uaa, xssec.constants.TYPE_USER_TOKEN, null, async (error, accessToken) => {
                  if (error) {
                    console.error('[lcap] Workflow requestToken ERROR:');
                    reject(error);
                  } else {
                    resolve(accessToken);
                  }
                });
              }
            });
          }
        }).catch(error => {
          console.error(error.message);
        });
      }
    }
  } catch (error) {
    console.error(error.message);
  }
}

function _dumpCaughtError(error) {
  const responseError = error.response && error.response.data;
  if (responseError) {
    console.debug(responseError);
  }
  console.error(error.message);
}

module.exports = WorkflowEntityHandler;
