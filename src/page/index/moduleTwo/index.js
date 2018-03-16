'use strict';

require('./index.styl');

const _mm = require('util/mm.js');

let moduleTwo = {
    init: function () {
        let _this = this;

        // 其实页面已经加载了的 想要保险一点
        $(function () {
            _this.methods.autoAlign();

            _this.onLoad();
            _this.bindEvent();
        })
    },
    onLoad: function () {
        // 这里主要对数据相关的

    },
    bindEvent: function () {
        // 这里主要是绑定事件

    },
    methods: {
        // 一些复用的方法
        autoAlign: function () {
           let $desWrap = $('.module-two').find('.des-wrap');
           let $content = $('.module-two').find('.content');

            $desWrap.css({marginTop: ~~(($content.height() - $desWrap.height()) / 2)})
        }
    }
};

moduleTwo.init();