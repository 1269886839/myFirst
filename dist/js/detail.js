webpackJsonp([2],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(130);


/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(131);
	__webpack_require__(133);
	__webpack_require__(136);

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

	let mainTop = {
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

	        $('.input-box').find('.add').click(function () {
	            let val = ($(this).prev().val() * 1) + 1;
	            if (val > 99) val = 99;
	            $(this).prev().val(val);
	            return false;
	        });

	        $('.input-box').find('.reduce').click(function () {
	            let val = ($(this).next().val() * 1) - 1;
	            if (val < 1) val = 1;
	            $(this).next().val(val);
	            return false;
	        });
	    },
	    methods: {}
	};

	mainTop.init();

/***/ }),

/***/ 134:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(137);

	const _mm = __webpack_require__(38);

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

/***/ }),

/***/ 137:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })

});