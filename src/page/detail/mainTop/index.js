'use strict';

require('./index.styl');

const _mm = require('util/mm.js');

let mainTop = {
    init: function () {
        this.onLoad();
    },
    onLoad: function () {
        let _this = this;
        $(function () {
            _this.bindEvent();
        });
    },
    bindEvent: function () {
        let _this = this;

        $('.input-box').find('.add').click(function () {
            let val = ($(this).prev().val() * 1) + 1;
            if (val > 99) val = 99;
            $(this).prev().val(val);
            return false;
        });

        $('.input-box').find('.reduce').click(function () {
            let val = ($(this).next().val() * 1) - 1;
            if (val < 1) val = 1;
            $(this).next().val(val);
            return false;
        });
    },
    methods: {}
};

mainTop.init();