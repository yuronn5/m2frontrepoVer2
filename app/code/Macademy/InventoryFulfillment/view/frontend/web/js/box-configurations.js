define([
    'uiComponent',
    'ko',
    'Macademy_InventoryFulfillment/js/model/box-configuration',
    'Macademy_InventoryFulfillment/js/model/sku'
], function (
    Component,
    ko,
    boxConfigurationsModel,
    skuModel
) {
    'use strict';



    return Component.extend({
        defaults: {
            boxConfigurationsModel: boxConfigurationsModel
        },

        initialize() {
            this._super();

            console.log("the box config component loaded");

            skuModel.isSuccess.subscribe((value) => {
                console.log('sku is success new value', value)
            });

            skuModel.isSuccess.subscribe((value) => {
                console.log('sku is success old value', value)
            }, null, 'beforeChange');
        },

        handleAdd() {
            boxConfigurationsModel.add();
        },

        handleDelete(index) {
            console.log('deleted configuration', this, index);
            boxConfigurationsModel.delete(index)
        },

        handleSubmit() {
            console.log('submited form config')
        }
    });
});


