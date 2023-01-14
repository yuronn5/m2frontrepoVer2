define([
    "uiComponent"
], function (
    Component
) {
    'use strict';

    return Component.extend({
        defaults: {
            subtotal: ko.observable(30.00),
            template: 'Macademy_FreeShippingPromo/free-shipping-banner',
            tracks: {
                subtotal: true
            }
        },

        initialize: function () {
            this._super();

            console.log(this.message);
        },

        formatCurrency: function (value) {
            return '$' + value().toFixed(2);
        }
    });
});


//require('uiRegistry').get("free-shipping-banner")     Ui registry tutorial
// require('uiRegistry').get("free-shipping-banner").set('hello', 'world') - set new param hello and his value world
// require('uiRegistry').get("free-shipping-banner").set('welcome', {to: {my: 'world'}})  set the same but for object
// require('uiRegistry').get("free-shipping-banner").remove('welcome.to.my')  remove
