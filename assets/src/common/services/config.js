angular.module( 'services.config', ['lodash'])

.service('config',['lodash', function(lodash) {

	// private vars here if needed

	return {
		siteName: 'Electronic Receptionist',
		// no trailing slash!
		siteUrl: '/',
		apiUrl: '/api',
		currentUser: false,
    RESULTS_SHOW_THRESHOLD: 20
	};

}]);