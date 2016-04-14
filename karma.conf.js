module.exports = function (config) {
    config.set({

        basePath: './',

        files: [
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-route/angular-route.js',
            'app/bower_components/angular-mocks/angular-mocks.js',

            'unit-tests/demo_smallest_test/src.js',
            'unit-tests/demo_smallest_test/jasmine_demo_spec.js',
            'unit-tests/demo_*/*.js',
            //'unit-tests/demo_controller/*.js',
            //'unit-tests/demo_directives/*.js',
            //'unit-tests/demo_filters/*.js',

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
