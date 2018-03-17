"use strict";

require('./index.styl');

const _mm = require('util/mm.js');


let alertBox = {
    init: function () {
        let _this = this;

        // 其实页面已经加载了的 想要保险一点
        $(function () {
            _this.bindEvent();
        })
    },
    onLoad: function () {
        // 这里主要对数据相关的

    },
    bindEvent: function () {
        // 这里主要是绑定事件
        let _this = this;

        $('.alert-box').find('.fa-close').click(function () {
            $(this).parent().fadeOut();
        });

        // 默认弹出框点击继续按钮
        $('#default-alert').find('.continue').click(function () {
            $('#default-alert').fadeOut();
            return false;
        });

        // 默认弹出框点击继续购买按钮
        $('#carts-alert').find('.go-buy').click(function () {
            $('#carts-alert').fadeOut();
            return false;
        })
    },
    methods: {
        // 一些复用的方法

    }
};

alertBox.init();