define(['uiComponent', 'ko', 'mage/storage', 'jquery'], function (Component, ko, storage, $) {
    'use strict';

    return Component.extend({
        defaults: {
            sku: ko.observable('24-MB01'),
            placeholder: 'Example: 24t61',
            messageResponse: ko.observable(''),
            isSuccess: ko.observable(false)
        },

        initialize() {
            this._super();

            console.log("the skuLookup has been loaded")
        },

        handleSubmit() {
            $('body').trigger('processStart');
            this.messageResponse('');
            this.isSuccess(false); //reset value to default

            console.log(this.sku() + ' Sku confirmed')

            storage.get(`rest/V1/products/${this.sku()}`)
                .done(response => {
                    this.messageResponse(`Product found <strong>${response.name}</strong>`);
                    this.isSuccess(true); //if success we set true
                })
                .fail(() => {
                    this.messageResponse('Product not found!');
                    this.isSuccess(false);
                })
                .always(() => {
                    $('body').trigger('processStop');
                })
        }
    });
});


