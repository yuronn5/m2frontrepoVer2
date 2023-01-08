define(['uiComponent', 'ko', 'Macademy_InventoryFulfillment/js/model/sku', 'Macademy_InventoryFulfillment/js/model/box-configuration'], function (Component, ko, boxConfigurationsModel, skuModel) {
    'use strict';

    return Component.extend({
        defaults: {
            numberOfBoxes: 0,
            shipmentWeight: 0,
            billableWeight: 0,
            isTermsChecked: ko.observable(false)
        },

        initialize() {
            this._super();

            console.log("the reviewSubmit comp has been loaded")

            this.canSubmit = ko.computed(() => {
                return skuModel.isSuccess()
                    && boxConfigurationsModel.isSuccess()
                    && this.isTermsChecked();
            })
        },

        handleSubmit() {
            if(this.canSubmit()){
                console.log("the reviewSubmit form  has been submitted")

            } else {
                console.log("the reviewSubmit form  has an error")

            }
        }

    });
});


