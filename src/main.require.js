
(function(config){

    if(typeof module !== "undefined" && 
        typeof exports !== "undefined" && 
        module.exports === exports){
        module.exports = config;
    } else {
        requirejs.config(config);
        require(['angular', 'uiRouter', 'ocLazyLoad'], function(){
            require(['app.require'], function(){
                angular.bootstrap(document, ['app']);
            });
        });
    }

}.call(this, function(){

    return {
        urlArgs: (new Date()).getTime(),
        paths: {
            angular:'vendor/angular',
            uiRouter: 'vendor/angular-ui-router',
            ocLazyLoad: 'vendor/ocLazyLoad.require',
        },
        shim: {
            angular: {
                exports: 'angular'
            },
            uiRouter: ['angular'],
            ocLazyLoad: ['angular']
        }
    };

}()));

/*requirejs.config({
    urlArgs: (new Date()).getTime(),
    paths: {
        angular:'vendor/angular',
        uiRouter: 'vendor/angular-ui-router',
        ocLazyLoad: 'vendor/ocLazyLoad.require',
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        uiRouter: ['angular'],
        ocLazyLoad: ['angular']
    }
});

require(['angular', 'uiRouter', 'ocLazyLoad'], function(angular){
    require(['app.require'], function(){
        angular.bootstrap(document, ['app']);
    });
});*/