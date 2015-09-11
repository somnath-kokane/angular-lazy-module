
requirejs.config({
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
});