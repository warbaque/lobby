angular.module( 'lobby', [
	'ui.router',
	'ngSails',
	'angularMoment',
	'lodash',
	'angularMoment',
	'templates-app',
	'services',
	'models',
  'ngTable',
  'lobby.header',
	'lobby.home',
	'lobby.help',
  'lobby.employees',
  'lobby.delivery',
  'lobby.finish',
  'lobby.openspace'
])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider ) {

  $urlRouterProvider.when('', '/');
  $urlRouterProvider.otherwise(function ($injector, $location) {
    // pass through to let the web server handle this request
    window.location = $location.$$absUrl;
  });
}])

.run( function run () {
	moment.lang('en');
})

.controller( 'AppCtrl',['$scope', '$location', 'config', function AppCtrl ( $scope, $location, config ) {
		$scope.$on('$viewContentLoaded', function(){
   			setTimeout(function() {
          		$scope.$apply(function() {
            	//wrapped this within $apply
            	$location.path("/");
          		});
        	}, 5000);
  		});
}]);
