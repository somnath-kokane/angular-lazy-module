
(function(config){

    this.process = this.process || {env: {APP_ENV: 'prod'}};
    var APP_ENV = this.process.env.APP_ENV;
    var devDeps = [], prodDeps = [], deps = [];
    
    if(typeof module !== "undefined" && 
        typeof exports !== "undefined" && 
        module.exports === exports){
        module.exports = config;
    } else {
        config.modules.forEach(function(item){
            prodDeps.push(item.name);
            (item.include).forEach(function(include){
                devDeps.push(include);
            });
        });

        if(APP_ENV === 'dev'){
            deps = deps.concat(devDeps);
        } else {
            deps = deps.concat(prodDeps);
        }
        angular.element(document).ready(function(){
            requirejs.config(config);
            requirejs(deps, function(){
                requirejs(['app.require'], function(){
                    angular.bootstrap(document, ['app']);
                });
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
            lodash: 'vendor/lodash',
            moment: 'vendor/moment',
            ngMaterial: 'vendor/angular-material',
            ngAnimate: 'vendor/angular-animate',
            ngAria: 'vendor/angular-aria'
        },
        shim: {
            angular: {
                exports: 'angular'
            },
            uiRouter: ['angular'],
            ocLazyLoad: ['angular'],
            ngAnimate: ['angular'],
            ngAria: ['angular'],
            ngMaterial: ['angular', 'ngAria','ngAnimate']
        },
        modules: [{
            name: 'lib.bundle',
            include: [
                'angular', 'uiRouter', 'ocLazyLoad',
                'ngMaterial', 'ngAria', 'ngAnimate'
            ]
        }, {
            name: 'plugin.bundle',
            include: ['lodash','moment']
        }]
    };

}()));
