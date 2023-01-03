define([
    'uiComponent',
    'ko'
], function (
    Component,
    ko
) {
    'use strict';

    return Component.extend({
        defaults: {
            boxConfigurations: ko.observableArray([{
                length: 10,
                width: 13,
                height: 14
            }, {
                length: 11,
                width: 14,
                height: 15
            }])
        },

        initialize() {
            this._super();

            console.log("the box config component loaded");
        }
    });
});


