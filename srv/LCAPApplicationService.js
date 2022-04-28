const cds = require('@sap/cds');
const WorkflowEntityHandler = require('./workflow/WorkflowEntityHandler');

class LCAPApplicationService extends cds.ApplicationService {
  /*
   * Overload init() to register own handlers to be invoked first in the respective phase
   * note: before and after handlers are invoked in parallel!
   */
  init() {
    Object.entries(this.model.definitions).forEach(([name, definition]) => {
        if (WorkflowEntityHandler.isWorkflowEntity(definition)) {
            const workflowEntityHandler = new WorkflowEntityHandler(definition);
            this.after('CREATE', name, workflowEntityHandler.OnAfterEntityCreate);
            this.after('UPDATE', name, workflowEntityHandler.OnAfterEntityUpdate);
        }
    });
    // Ensure to call the ApplicationService's init which registers the generic handlers
    super.init()
  }
}

module.exports = LCAPApplicationService;
