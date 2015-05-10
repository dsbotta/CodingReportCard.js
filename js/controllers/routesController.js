(function() {

	angular.module('CodingReportCard')
		.config(['$routeProvider', function($routeProvider) {

			$routeProvider.when('/', {
				templateUrl: 'routes/treehouse/treehouse-profile/'
				// controller: 'TreehouseAjax',
				// controllerAs: 'myInfo'
			})

			.when ('/treehouse-badge/:badgeId', {
				templateUrl: 'routes/treehouse/treehouse-badge/',
				controller: 'TreehouseBadgeAjax',
				controllerAs: 'myInfo'
			})

		}]);

})();