define(['uiComponent', 'ko'], function (Component, ko) {
    'use strict';

    return Component.extend({
        defaults: {
            sku: ko.observable('abc1234')
        },

        initialize() {
            this._super();

            console.log("the skuLookup has been loaded")
        }
    });
});

