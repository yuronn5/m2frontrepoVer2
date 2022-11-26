define(['ko', 'uiComponent'], function (ko, Component){
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Elogic_SimpleKoModule/timer',
            myFlag: true,
            productName: ko.observable(''),
            wrongOne: ko.observable('wrong')
        },

        initialize: function (config) {
            this._super();
            this.titleFromKo = ko.observable(config.titleMessage);
            this.productName = config.productNameFromPhtml;
        },

        getTitle: function () {
            return this.productName;
        },

        getFalseTitle: function () {
            return this.wrongOne;
        }
    })

})
