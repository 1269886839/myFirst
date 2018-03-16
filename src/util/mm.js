'use strict';

const LOGIN = require('./config.js').LOGIN;
const _ = require('underscore');

const _mm = {
    request: function (param) {
        $.ajax({
            type        : param.method || 'get',
            url         : param.url || '',
            dataType    : param.type || 'json',
            data        : param.data || '',
            success: function (res) {
                if (res.code === LOGIN.ERR_OK) {
                    typeof param.success === 'function' && param.success(res.code, res.data, res.msg);
                } else {
                    typeof param.error === 'function' && param.error(res.code, null, res,msg);
                }
            },
            error: function (err) {
                typeof param.error === 'function' && param.error(err.statusText, null);
            }
        })
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
    }
};

module.exports = _mm;