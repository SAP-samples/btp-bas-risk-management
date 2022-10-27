sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'Riskmanagementsap/mitigation/test/integration/FirstJourney',
		'Riskmanagementsap/mitigation/test/integration/pages/mitigationList',
		'Riskmanagementsap/mitigation/test/integration/pages/mitigationObjectPage',
		'Riskmanagementsap/mitigation/test/integration/pages/risksObjectPage'
    ],
    function(JourneyRunner, opaJourney, mitigationList, mitigationObjectPage, risksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('Riskmanagementsap/mitigation') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThemitigationList: mitigationList,
					onThemitigationObjectPage: mitigationObjectPage,
					onTherisksObjectPage: risksObjectPage
                }
            },
            opaJourney.run
        );
    }
);