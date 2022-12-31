define(['uiComponent'], function (Component) {
    'use strict';

    return Component.extend({
        defaults: {
            sku: 'abc1234'
        },

        initialize() {
            this._super();

            console.log("the skuLookup has been loaded")
        }
    });
});

