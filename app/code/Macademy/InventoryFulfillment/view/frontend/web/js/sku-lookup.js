define(['uiComponent', 'ko', 'mage/storage'], function (Component, ko, storage) {
    'use strict';

    return Component.extend({
        defaults: {
            sku: ko.observable('24-MB01'),
            placeholder: 'Example: 24t61',
            messageResponse: ko.observable('')
        },

        initialize() {
            this._super();

            console.log("the skuLookup has been loaded")
        },

        handleSubmit() {
            this.messageResponse('');

            console.log(this.sku() + ' Sku confirmed')

            storage.get(`rest/V1/products/${this.sku()}`)
                .done(response => {
                    this.messageResponse(`Product found <strong>${response.name}</strong>`);
                })
                .fail(() => {
                    this.messageResponse('Product not found!');
                })
        }
    });
});


