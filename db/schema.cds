namespace Riskmanagement;

using sap.workflow from './WorkflowObject';

using { managed } from '@sap/cds/common';


@assert.integrity: false
entity Risks : managed
{
    key ID : UUID
        @Core.Computed;
    title : String(100);
    prio : String(5);
    descr : String;
    impact : Integer;
    bp : Association to BusinessPartners ;
    criticality : Integer;
    miti : Association to one Mitigations;
    
}

entity Mitigations : managed
{
    key ID : UUID
        @Core.Computed;
    description : String;
    owner : String;
    timeline : String;
    risks : Association to many Risks on risks.miti = $self;
}
using { API_BUSINESS_PARTNER as bupa } from '../srv/external/API_BUSINESS_PARTNER';
entity BusinessPartners as projection on bupa.A_BusinessPartner {
     key BusinessPartner,
     BusinessPartnerFullName,
     BusinessPartnerIsBlocked
   }
