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
	__webpack_require__(162);

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

/***/ 162:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })

});