module.exports = function (config) {
    config.set({

        basePath: './',

        files: [
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-route/angular-route.js',
            'app/bower_components/angular-mocks/angular-mocks.js',

            'app/demo_smallest_test/src.js',
            'app/demo_smallest_test/jasmine_demo_spec.js',
            //'app/demo_*/*.js',
            //'app/demo_controller/*.js',
            //'app/demo_directives/*.js',
            //'app/demo_filters/*.js',

            //'app/components/**/*.js',
            //'app/view*/**/*.js',
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};
