(function() {

	angular.module('CodingReportCard')
		.directive('navButtons', function() {
			return {
				restrict: 'E',
				templateUrl: 'routes/directives/nav-buttons.html'
			}
		})

		.directive('searchBar', function() {
			return {
				restrict: 'E',
				templateUrl: 'routes/directives/search-bar.html'
			}
		})
	
}
)();