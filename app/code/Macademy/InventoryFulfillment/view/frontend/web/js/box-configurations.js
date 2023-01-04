define([
    'uiComponent',
    'ko'
], function (
    Component,
    ko
) {
    'use strict';

    const boxConfiguration = () => {
        return {
            length: ko.observable(),
            width: ko.observable(),
            height: ko.observable(),
            weight: ko.observable(),
            unitsPerBox: ko.observable(),
            numberOfBoxes: ko.observable(),
        }
    }

    return Component.extend({
        defaults: {
            boxConfigurations: ko.observableArray([boxConfiguration()])
        },

        initialize() {
            this._super();

            console.log("the box config component loaded");
        },

        handleAdd() {
            this.boxConfigurations.push(boxConfiguration())
        },

        handleDelete(index) {
            console.log('deleted configuration', this, index);
            this.boxConfigurations.splice(index, 1);
        },

        handleSubmit() {
            console.log('submited form config')
        }
    });
});


