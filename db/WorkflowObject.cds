namespace sap.workflow;

aspect TaskEnabled
{
    virtual taskInstanceId : String
        @UI.Hidden;
    virtual taskDecisionId : String
        @UI.Hidden;
}