'use strict';

require('./index.styl');

const _mm = require('util/mm.js');

let moduleFour = {
    index: 0,
    init: function () {
        let _this = this;

        // 其实页面已经加载了的 想要保险一点
        $(function () {
            _this.methods.autoAlign();

            _this.onLoad();
            _this.bindEvent();
        });
    },
    onLoad: function () {
        // 这里主要对数据相关的

    },
    bindEvent: function () {
        // 这里主要是绑定事件

        // 新闻
        let _this = this;
        let $moduleFour = this.$moduleFour = $('.module-four');
        let $newItems = $moduleFour.find('.news-con-wrap');
            $moduleFour.find('.news-menu-item').on('mouseenter', function () {
                let index = $(this).index();
                $(this).addClass('active').siblings('.news-menu-item').removeClass('active');
                    $newItems.eq(index).addClass('active').siblings('.news-con-wrap').removeClass('active');
            });

        // slider
        let $picItems = this.$picItems = $moduleFour.find('.pic-item');
        let $dotItems = this.$dotItems = $moduleFour.find('.dot-item');
        let $desItems = this.$desItems = $moduleFour.find('.pic-des-item');

        $dotItems.on('mouseenter', function () {
            _this.methods.sliderChange.call(_this, $(this).index());
            _this.methods.clearTimer();
        });

        // 小点鼠标离开
        $dotItems.on('mouseenter', function () {
            _this.methods.clearTimer();
            _this.methods.autoAlign();
        });
        // 图片鼠标离开
        $picItems.on('mouseleave', function () {
            _this.methods.clearTimer();
            _this.methods.autoAlign();
        });
        // 描述鼠标离开
        $desItems.on('mouseleave', function () {
            _this.methods.clearTimer();
            _this.methods.autoAlign();
        });
    },
    methods: {
        // 一些复用的方法
        // slide图片改变封装
        sliderChange: function (index) {
            this.$dotItems.eq(index).addClass('active').siblings('.dot-item').removeClass('active');
            this.$picItems.eq(index).addClass('active').siblings('.pic-item').removeClass('active');
            this.$desItems.eq(index).addClass('active').siblings('.pic-des-item').removeClass('active');
        },
        // slide自动轮播封装
        autoAlign: function () {
            this.timer = setInterval(function () {
                console.log(1);
                moduleFour.index += 1;
                moduleFour.index %= moduleFour.$picItems.length;
                this.sliderChange.call(moduleFour, moduleFour.index * 1)
            }.bind(this), 4000);
        },
        // 清楚定时器
        clearTimer: function () {
            clearInterval(this.timer);
        }
    }
};

moduleFour.init();