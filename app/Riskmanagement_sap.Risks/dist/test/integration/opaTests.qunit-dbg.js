sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'Riskmanagementsap/Risks/test/integration/FirstJourney',
		'Riskmanagementsap/Risks/test/integration/pages/risksList',
		'Riskmanagementsap/Risks/test/integration/pages/risksObjectPage'
    ],
    function(JourneyRunner, opaJourney, risksList, risksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('Riskmanagementsap/Risks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTherisksList: risksList,
					onTherisksObjectPage: risksObjectPage
                }
            },
            opaJourney.run
        );
    }
);