sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'Riskmanagementsap.mitigation',
            componentId: 'mitigationList',
            entitySet: 'mitigation'
        },
        CustomPageDefinitions
    );
});