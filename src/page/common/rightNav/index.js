'use strict';

require('./index.styl');

const _mm = require('util/mm.js');


let header = {
    init: function () {
        let _this = this;

        // 其实页面已经加载了的 想要保险一点
        $(function () {
            _this.methods.autoAlign();
            _this.bindEvent();
        })
    },
    onLoad: function () {
        // 这里主要对数据相关的

    },
    bindEvent: function () {
        // 这里主要是绑定事件
        let _this = this;
        let MT = 150;

        // 绑定窗口大小的改变自动对齐
        $(window).on('resize', function () {
            _this.methods.autoAlign();
            return false;
        });
        // 页面滚动回顶部显示
        let $ToUp = $('.l-menu').find('.to-up');
        let isShow = false;
        $(window).on('scroll', function () {
            if ($(document).scrollTop() >= MT && !isShow) {
                $ToUp.addClass('active');
                isShow = !isShow;
            }

            if ($(document).scrollTop() < MT && isShow) {
                $ToUp.removeClass('active');
                isShow = !isShow;
            }

            return false;
        });
        // 滚动到顶部
        $ToUp.click(function () {
            $('body').animate({
                scrollTop: 0
            }, 600);
            return false;
        });
        // 点击显示内置购物车
        $('.right-cart').click(function () {
            _this.methods.slideShow();
            return false;
        });
        // 点击隐藏内置购物车
        $('.right-nav').find('.fa-close').click(function () {
            _this.methods.slideHide();
            return false;
        });
        // 点击显示我的信息
        $('.right-nav').find('.my-info').click(function () {
            $(this).find('.user-box').toggleClass('active');
            return false;
        });
    },
    methods: {
        // 一些复用的方法
        autoAlign: function () {
            let El = $('.right-nav').find('.right-nav-wrap').find('.l-menu');
            let H = window.innerHeight - _mm.getElementTop($('.right-nav').get(0));
            let ElH = El.height();


            El.css({top: ~~((H - ElH) / 2)})
        },
        slideShow: function () {
            $('.right-nav').animate({right: 0});
        },
        slideHide: function () {
            $('.right-nav').animate({right: -209});
        }
    }
};

header.init();