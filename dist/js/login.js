webpackJsonp([4],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(156);


/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(157);
	__webpack_require__(159);


/***/ }),

/***/ 157:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(160);

	const _mm = __webpack_require__(38);

	let login = {
	    init: function () {
	        let _this = this;

	        // 其实页面已经加载了的 想要保险一点
	        $(function () {
	            _this.methods.heightAuto();

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


	    },
	    methods: {
	        // 一些复用的方法

	        heightAuto: function () {
	            let TOPHEIGHT = $('.top-nav').height();
	            let HEADERHEIGHT = $('.header').height();
	            let FOOTERHEIGHT = $('.footer').height();
	            let BODYHEIGHT = $(document).height();


	            $('.main').css({height: (BODYHEIGHT - (TOPHEIGHT + HEADERHEIGHT + FOOTERHEIGHT))});
	        }
	    }
	};

	login.init();

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })

});