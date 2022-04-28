const cds = require('@sap/cds')

/**
 * Implementation for Risk Management service 
 */


module.exports = cds.service.impl(async function() {
      const bupa = await cds.connect.to('API_BUSINESS_PARTNER');

    this.on('READ', 'BusinessPartners', async req => {
        console.log(req.query);
        let res =  await bupa.tx(req).run(req.query);
        console.log(`retrieved ${res.length} records`);
        return res
    });
    this.after('READ', 'Risks', risksData => {
        const risks = Array.isArray(risksData) ? risksData : [risksData];
        risks.forEach(risk => {
            if (risk.impact >= 100000) {
                risk.criticality = 1;
            } else { 
                risk.criticality = 2;
            }
        });
    });   
    
});    
    


