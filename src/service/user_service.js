'use strict';

let _mm = require('util/mm.js');

let _user = {
    // 检查登陆状态
    checkLogin: function (resolve, reject) {
        _mm.request({
            url     : _mm.getServerUrl('/user/check_login.do'),
            method  : "POST",
            success : resolve,
            error   : reject
        });
    },
    // 用户登陆
    login: function (userInfo, resolve, reject) {
        _mm.request({
            url     : _mm.getServerUrl('/user/logo.do'),
            data    : userInfo,
            method  : "POST",
            success : resolve,
            error   : reject
        });
    }
    // 检查用户名
    checkUserName: function (username, resolve, reject) {
        _mm.request({
            url     : _mm.getServerUrl('/user/check_user.do'),
            data    : {
               username: username
            },
            method  : "POST",
            success : resolve,
            error   : reject
        });
    },
    checkCode: function (code, resolve, reject) {
        _mm.request({
           url      : _mm.getServerUrl('user/check_code.do'),
            data    : {
               code : code
            },
            method  : "POST",
            success : resolve,
            error   : reject
        });
    }
};

module.exports = _user;