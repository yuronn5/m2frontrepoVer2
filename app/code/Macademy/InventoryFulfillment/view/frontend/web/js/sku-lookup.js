define(['uiComponent', 'ko'], function (Component, ko) {
    'use strict';

    return Component.extend({
        defaults: {
            sku: ko.observable('abc1234'),
            placeholder: 'Example: 24t61'
        },

        initialize() {
            this._super();

            console.log("the skuLookup has been loaded")
        },

        handleSubmit() {
            console.log(this.sku() + ' Sku confirmed')
        }
    });
});

