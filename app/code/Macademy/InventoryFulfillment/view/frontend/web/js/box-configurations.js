define([
    'uiComponent',
    'ko',
    'Macademy_InventoryFulfillment/js/model/box-configuration'
], function (
    Component,
    ko,
    boxConfigurationsModel
) {
    'use strict';



    return Component.extend({
        defaults: {
            boxConfigurationsModel: boxConfigurationsModel
        },

        initialize() {
            this._super();

            console.log("the box config component loaded");
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


