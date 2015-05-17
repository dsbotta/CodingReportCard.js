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

		.directive('profileInfo', function() {
			return {
				restrict: 'E',
				templateUrl: 'routes/directives/profile-info.html',
				scope: {
					school: '@',
					image: '@',
					name: '@',
					num: '@',
					points: '@'
				}
			}
		})

		.directive('allBadges', function() {
			return {
				restrict: 'E',
				templateUrl: 'routes/directives/badges.html',
				scope: {
					link: '@',
					name: '@',
					icon: '@'
				}
			}
		})
	
}
)();