const webpack = require('webpack');
const Ex = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const getHtmlConfig = function (name, title) {
    return {
        template: __dirname + '/src/view/' + name + '/index.html',
        filename: 'view/' + name + '.html',
        title: title,
        inject: true,
        hash: true,
        chunks: ['common', name]
    }
};

const resolve = function (url) {
    return __dirname + '/' + url;
};

const config = {
    entry: {
        'common': [__dirname + '/src/page/common/index.js', 'webpack-dev-server/client?http://localhost:8088/'],
        'index': [__dirname + '/src/page/index/index.js'],
        'login': [__dirname + '/src/page/login/index.js'],
        'product': [__dirname + '/src/page/product/index.js'],
        'detail': [__dirname + '/src/page/detail/index.js'],
        'carts': [__dirname + '/src/page/carts/index.js'],
        'register': [__dirname + '/src/page/register/index.js'],
        'new': [__dirname + '/src/page/new/index.js']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/dist',
        filename: 'js/[name].js'
    },
    resolve: {
        alias: {
            "node_modules": resolve('node_modules'),
            "page": resolve('src/page'),
            "util": resolve('src/util'),
            "@": resolve('src'),
            "stylus": resolve('src/stylus'),
            "image": resolve('src/image')
        }
    },
    externals: {
        'jquery': 'window.jQuery'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: Ex.extract('style-loader', 'css-loader')
            },
            {
                test: /\.styl$/,
                loader: Ex.extract('style-loader', 'css-loader!stylus-loader')
            },
            {
                test: /\.(png|jpg|gif|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=1024&name=images/[hash:8].[name].[ext]'
            },
            {
                test: /\.string$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        //通用模块 dist/js/base.js
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'js/base.js'
        }),
        // 单独加载css文件
        new Ex("css/[name].css"),
        // html打包到文件里
        new HtmlWebpackPlugin(getHtmlConfig('index', '某某医疗首页')),
        new HtmlWebpackPlugin(getHtmlConfig('login', '某某医疗登陆')),
        new HtmlWebpackPlugin(getHtmlConfig('product', '某某医疗产品')),
        new HtmlWebpackPlugin(getHtmlConfig('detail', '某某医疗详情')),
        new HtmlWebpackPlugin(getHtmlConfig('carts', '某某医疗购物车')),
        new HtmlWebpackPlugin(getHtmlConfig('register', '某某医疗注册')),
        new HtmlWebpackPlugin(getHtmlConfig('new', '某某医疗新闻'))
    ]
};

module.exports = config;