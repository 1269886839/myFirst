webpackJsonp([2],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(127);


/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(128);
	__webpack_require__(130);
	__webpack_require__(133);

/***/ }),

/***/ 128:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(131);


/***/ }),

/***/ 131:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(134);

	const _mm = __webpack_require__(38);

	let mainCon = {
	    init: function () {
	        this.onLoad();
	    },
	    onLoad: function () {
	        let _this = this;
	        $(function () {
	            _this.bindEvent();
	        })
	    },
	    bindEvent: function () {
	        let _this = this;

	        // 绑定商品描述 商品评论 购买须知点的击切换

	        let $contentItem = $('.content>div');
	            $('.main-con').find('.menu').find('li').click(function () {
	                let index = $(this).index();
	                $(this).addClass('active').siblings('li').removeClass('active');
	                $contentItem.eq(index).addClass('active').siblings().removeClass('active');
	            });

	        // 评论这一块的点击切换

	        let $commentMenuItem = $('.main-con').find('.comment-menu').find('li').click(function () {
	            $(this).addClass('active').siblings('li').removeClass('active');
	            $(this).find('input[type=radio]').attr('checked', true)
	        });
	    },
	    methods: {

	    }
	};

	mainCon.init();

/***/ }),

/***/ 134:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })

});