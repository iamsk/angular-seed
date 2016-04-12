angular.module('app-length', []).filter('length', function () {
    return function (text) {
        return ('' + (text || '')).length;
    }
});
