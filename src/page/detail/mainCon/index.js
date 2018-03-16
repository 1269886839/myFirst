'use strict';

require('./index.styl');

const _mm = require('util/mm.js');

let mainCon = {
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

        // 绑定商品描述 商品评论 购买须知点的击切换

        let $contentItem = $('.content>div');
            $('.main-con').find('.menu').find('li').click(function () {
                let index = $(this).index();
                $(this).addClass('active').siblings('li').removeClass('active');
                $contentItem.eq(index).addClass('active').siblings().removeClass('active');
                return false;
            });

        // 评论这一块的点击切换

        let $commentMenuItem = $('.main-con').find('.comment-menu').find('li').click(function () {
            $(this).addClass('active').siblings('li').removeClass('active');
            $(this).find('input[type=radio]').attr('checked', true);
            return false;
        });
    },
    methods: {

    }
};

mainCon.init();