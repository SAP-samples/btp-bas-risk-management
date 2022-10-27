using { bupa } from './external/bupa.cds';

using { Riskmanagement_sap as my } from '../db/schema';

using Riskmanagement_sap from '../db/schema';

@path : 'service/Riskmanagement_sap'
service Riskmanagement_sapService
{
    @odata.draft.enabled
    entity risks as
        projection on my.Risks
        {
            *
        };

    annotate risks with @restrict :
    [
        { grant : [ 'READ' ], to : [ 'RiskViewer' ] },
        { grant : [ '*' ], to : [ 'RiskManager' ] }
    ];

    @odata.draft.enabled
    entity mitigation as
        projection on my.Mitigations
        {
            *
        };

    annotate mitigation with @restrict :
    [
        { grant : [ 'READ' ], to : [ 'RiskViewer' ] },
        { grant : [ '*' ], to : [ 'RiskManager' ] }
    ];

    entity A_Supplier as
        projection on bupa.A_BusinessPartner
        {
            BusinessPartner,
            BusinessPartnerFullName,
            BusinessPartnerIsBlocked
        };
}

annotate Riskmanagement_sapService with @requires :
[
    'authenticated-user',
    'RiskViewer',
    'RiskManager'
];
