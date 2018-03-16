'use strict';

require('./index.styl');

const _mm = require('util/mm.js');

let moduleOne = {
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
        let _this = this;

        $('.module-one').find('.pro-list').find('.pro-item').hover(function () {
           $(this).find('.buy-click').addClass('animateud');
        }, function () {
            $(this).find('.buy-click').removeClass('animateud');
        });
    },
    methods: {
        // 一些复用的方法
        autoAlign: function () {
            let $lMenu = $('.module-one').find('.l-menu');
            let HEIGHT = $lMenu.find('li').height();
            $lMenu.find('a').each(function (index, item) {
                let itemHeight = $(item).height();
                if (HEIGHT - itemHeight >= 0) {
                    $(item).css({marginTop: ~~((HEIGHT - $(item).height()) / 2)});
                } else {
                    $(item).css({height: 89, overflow: 'hidden'})
                }

            });
        }
    }
};

moduleOne.init();