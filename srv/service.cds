using { Riskmanagement as my } from '../db/schema';
@path : 'service/Riskmanagement'
@requires : 'RiskmanagementManager'
service RiskmanagementService
{
    @odata.draft.enabled
    entity Risks as
        projection on my.Risks;

    @odata.draft.enabled
    entity Mitigations as
        projection on my.Mitigations;

      entity BusinessPartners as projection on my.BusinessPartners; 

}
