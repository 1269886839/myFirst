webpackJsonp([3],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(141);


/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(142);
	__webpack_require__(145);
	__webpack_require__(148);
	__webpack_require__(151);
	__webpack_require__(154);
	__webpack_require__(158);
	__webpack_require__(163);

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(143);

	let _mm = __webpack_require__(38);

	let banner = {
	    init: function () {

	    },
	    onLoad: function () {

	    },
	    bindEvent: function () {
	        
	    },
	    methods: {

	    }
	};

	banner.init();



/***/ }),

/***/ 143:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(146);

	const _mm = __webpack_require__(38);

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

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(149);

	const _mm = __webpack_require__(38);

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

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(152);

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(155);

	const _mm = __webpack_require__(38);

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

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(159);

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })

});