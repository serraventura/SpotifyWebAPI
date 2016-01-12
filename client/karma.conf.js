var path = require('path');
var webpackConfig = require('./webpack.config');
var entry = path.resolve(webpackConfig.context, webpackConfig.entry);
var preprocessors = {};

//preprocessors['./node_modules/angular/angular.js'] = ['webpack'];
preprocessors[entry] = ['webpack'];
preprocessors['./node_modules/angular-mocks/angular-mocks.js'] = ['webpack'];
preprocessors['./tests/specs/**/*.js'] = ['webpack'];

preprocessors['**/*.html'] = ['ng-html2js'];

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'chai'],

        // list of files / patterns to load in the browser
        files: [
            //'./node_modules/angular/angular.js',
            entry,
            './node_modules/angular-mocks/angular-mocks.js',
            './tests/specs/**/*.js'
        ],
        webpack: webpackConfig,

        // list of files to exclude
        exclude: [],

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],

        preprocessors: preprocessors,

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        ngHtml2JsPreprocessor: {
            stripPrefix: 'client/src/',
            moduleName: 'Templates'
        },

        reporters: ['mocha'],

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        plugins: [
            require('karma-webpack'),
            'karma-chai',
            'karma-mocha',
            'karma-chrome-launcher',
            'karma-ng-html2js-preprocessor',
            'karma-mocha-reporter'
        ]
    });
}
