var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],

        reporters: ['progress'],
        port: 9876,
        colors: false,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        autoWatchBatchDelay: 300,

        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'node_modules/angular-sanitize/angular-sanitize.js',
            'node_modules/lodash/index.js',
            'node_modules/moment/moment.js',
            'src/**/*.js',
            'tests/specs/**/*.js'
        ],

        preprocessors: {
            'src/**/*.js': ['webpack'],
            'tests/specs/**/*.js': ['webpack']
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            noInfo: true
        },

        plugins : [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-webpack',
            //'karma-babel-preprocessor'
        ]

    });
}
