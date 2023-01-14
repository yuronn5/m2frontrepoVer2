define([
    "uiComponent",
    'Magento_Customer/js/customer-data'
], function (
    Component,
    customerData
) {
    'use strict';

    return Component.extend({
        defaults: {
            subtotal: 0.00,
            template: 'Macademy_FreeShippingPromo/free-shipping-banner',
            tracks: {
                subtotal: true
            }
        },

        initialize: function () {
            this._super();

            var self = this;
            var cart = customerData.get('cart');

            customerData.getInitCustomerData().done(function() {
                self.subtotal = parseFloat(cart().subtotalAmount);
                console.log(cart());
            });

        },

        formatCurrency: function(value) {
            return '$' + value.toFixed(2);
        }
    });
});


//require('uiRegistry').get("free-shipping-banner")     Ui registry tutorial
// require('uiRegistry').get("free-shipping-banner").set('hello', 'world') - set new param hello and his value world
// require('uiRegistry').get("free-shipping-banner").set('welcome', {to: {my: 'world'}})  set the same but for object
// require('uiRegistry').get("free-shipping-banner").remove('welcome.to.my')  remove
