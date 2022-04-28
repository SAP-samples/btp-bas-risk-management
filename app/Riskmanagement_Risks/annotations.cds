using RiskmanagementService as service from '../../srv/service';

annotate service.Risks with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'title',
            Value : title,
        },
        {
            $Type : 'UI.DataField',
            Label : 'prio',
            Value : prio,
             Criticality: criticality,
        },
        {
                $Type : 'UI.DataField',
                Label : 'description',
                Value : descr,
            },
        {
            $Type : 'UI.DataField',
            Label : 'Mitigation',
            Value : miti_ID,
        },
        {
            $Type : 'UI.DataField',
            Label : 'impact',
            Value : impact,
            Criticality: criticality,
        },
        {
            $Type : 'UI.DataField',
            Label : 'BusinessPartner',
            Value: bp_BusinessPartner
        },
          
         
    ]
);
annotate service.Risks with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'title',
                Value : title,
            },
            {
                $Type : 'UI.DataField',
                Label : 'prio',
                Value : prio,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Mitigation',
                Value : miti_ID,
            },
            {
                $Type : 'UI.DataField',
                Label : 'impact',
                Value : impact,
            },
            {
                $Type : 'UI.DataField',
                Label : 'criticality',
                Value : criticality,
            },
             {
                  $Type : 'UI.DataField',
                Label : 'bp_BusinessPartner',
                 Value: bp_BusinessPartner,
                 
            },
              {
                  $Type : 'UI.DataField',
                Label : 'BusinessPartnerIsBlocked',
                 Value: bp.BusinessPartnerIsBlocked,
                 
            }
            
        
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
// Annotations for value help

annotate RiskmanagementService.Risks with {
    	miti @(	
		Common: {
			//show text, not id for mitigation in the context of risks
			Text: miti.description  , TextArrangement: #TextOnly,
			ValueList: {
				Label: 'Mitigations',
				CollectionPath: 'Mitigations',
				Parameters: [
					{ $Type: 'Common.ValueListParameterInOut', 
						LocalDataProperty: miti_ID, 
						ValueListProperty: 'ID' 
					},
					{ $Type: 'Common.ValueListParameterDisplayOnly', 
						ValueListProperty: 'description' 
					}                                      
				]
			}
		},
		//UI.MultiLineText: IsActiveEntity
	);
bp @(	
		Common: {
			
			ValueList: {
				Label: 'Business Partners',
				CollectionPath: 'BusinessPartners',
				Parameters: [
					{ $Type: 'Common.ValueListParameterInOut', 
						LocalDataProperty: bp_BusinessPartner, 
						ValueListProperty: 'BusinessPartner' 
					},
                    { $Type: 'Common.ValueListParameterInOut', 
						LocalDataProperty: bp.BusinessPartnerFullName, 
						ValueListProperty: 'BusinessPartnerFullName' 
					},
                     { $Type: 'Common.ValueListParameterInOut', 
						LocalDataProperty: bp.BusinessPartnerIsBlocked, 
						ValueListProperty: 'BusinessPartnerIsBlocked' 
					}
					     					                                   
				]
			}
		}
	);
}

//   annotate RiskService.BusinessPartners with {
 
//     ID @title: 'Business Partner';
//     businessPartnerFullName    @title: 'Business Partner Name' @readonly;
//     businessPartnerIsBlocked   @title: 'Blocked Status' @readonly;
//     searchTerm1 @title: 'Search Term' @readonly;
// 	industry @title: 'Industry' @readonly;
//   }
  