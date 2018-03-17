'use strict';

const LOGIN = require('./config.js').LOGIN;
const API = require('./config.js').API;
const SERVERHOST = require('./config.js').SERVERHOST;
const HTMLSPACE = require('./config.js').htmlSpace;
const _ = require('underscore');

const _mm = {
    request: function (param) {
        $.ajax({
            type        : param.method || 'get',
            url         : param.url || '',
            dataType    : param.type || 'json',
            data        : param.data || '',
            success: function (res) {
                if (res.code === API.ERR_OK) {
                    typeof param.success === 'function' && param.success(res.code, res.data, res.msg);
                } else {
                    typeof param.error === 'function' && param.error(res.code, null, res,msg);
                }
            },
            error: function (err) {
                typeof param.error === 'function' && param.error(err.statusText);
            }
        });
    },
    render: function (htmlTpl, data) {
        let compiled = _.template(htmlTpl);
        return compiled(data);
    },
    getElementTop: function (el) {
        if(!el) return;
        let top = el.offsetTop;
        let parent = el.offsetParent;
        while (parent != null) {
            top += parent.offsetTop;
            parent = parent.offsetParent;
        }
        return top;
    },
    getServerUrl: function(url){
        return SERVERHOST + url;
    },
    goHome: function () {
        window.location.href = "/index.html";
    },
    goLogin: function () {
        window.location.href = "/login.html";
    },
    getUrlParame: function (key) {
        console.log(key);
        console.log(window.location.search);
        let reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)');
        let result = window.location.search.substr(1).match(reg);
        return result ? decodeURIComponent(result[2]) : null;
    },
    defaultAlert: function (data) {
        let title = data.title || '错误标题';
        let des = data.des || HTMLSPACE;
        let $defaultAlert = $('#default-alert');
            $defaultAlert.find('h6').html(title);
            $defaultAlert.find('.test').html(des);
            $defaultAlert.fadeIn();
    },
    cartsAlert: function (data) {
        let title = data.title || '商品加入成功';
        let proTitle = data.proTitle || HTMLSPACE;
        let joinNum = data.joinNum || 0;
        let countPrice = data.countPrice || 0.00;
        let $cartsAlert = $('#carts-alert');
            $cartsAlert.find('h6').html(title);
            $cartsAlert.find('.title').html(proTitle);
            $cartsAlert.find('.join-num').html(joinNum);
            $cartsAlert.find('.count-price').html(countPrice);
            $cartsAlert.fadeIn();
    }
};

module.exports = _mm;