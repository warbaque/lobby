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

.controller( 'AppCtrl',['$scope', '$location','$timeout', 'config', function AppCtrl ( $scope, $location, $timeout, config ) {
        $scope.$on('$viewContentLoaded', function(){
          // if timer already exists, destroy it so that it resets when user navigates
          if($scope.timer){
            $timeout.cancel($scope.timer);
          }
          $scope.timer = $timeout(function(){
                $location.path("/");
            }, 5000);
        });
}]);