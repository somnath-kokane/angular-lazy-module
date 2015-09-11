
angular
    .module('app', ['ui.router', 'oc.lazyLoad'])
    .config(['$ocLazyLoadProvider', '$stateProvider',
        function config($ocLazyLoadProvider, $stateProvider){
            var env = 'prod';

            $ocLazyLoadProvider.config({
                jsLoader: requirejs,
                debug: true
            });

            var app = require('app.require');

            initModule(app);

            function initModule(module){
                var states = module.states || [];
                states.forEach(function(state){
                    var name, defination, files;
                    name = state[0];
                    defination = state[1];
                    files = module.files || {};
                    files = files[env];
                    
                    if(files){
                        defination.resolve = angular.extend({}, defination.resolve, {
                            lazyLoad: ['$ocLazyLoad', 
                            function lazyLoad($ocLazyLoad){
                                return $ocLazyLoad.load({
                                    files: files
                                });
                            }]
                        })
                    }

                    $stateProvider.state(name, defination);
                });

                (module.modules || []).forEach(function(){
                    initModule.apply(null, arguments);
                });
            }
        }
    ])
    .run(['$location', '$window', '$timeout',
        function run($location, $window, $timeout){
            var hash = $window.location.hash.replace(/^#\//g, '');
            $location.path('');
            $timeout(function(){
                $location.path(hash);
            }, 10);
        }
    ])
    .controller('NavController', ['$scope', '$ocLazyLoad', '$location', '$state', 
        function NavController($scope, $ocLazyLoad, $location, $state){
            $scope.navList = [
                {title: 'Home', state: 'home'},
                {title: 'Hire', state: 'hire'},
                {title: 'Applicant', state: 'hire.applicant'},
                {title: 'Job', state: 'hire.job'}
            ];
        }
    ]);