define([
    'uiComponent'
], function (
    Component
) {
    'use strict';

    return Component.extend({

        initialize() {
            this._super();

            console.log("the box config component loaded");
        }
    });
});


