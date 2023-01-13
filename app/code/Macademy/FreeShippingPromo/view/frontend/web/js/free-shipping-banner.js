define([
    "uiComponent"
], function (
    Component
) {
    'use strict';

    return Component.extend({
        defaults: {
            message: 'Free shipping message'
        },

        initialize: function () {
            this._super();

            console.log(this.message);
        }
    });
});
