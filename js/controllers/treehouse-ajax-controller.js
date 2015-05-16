(function() {

	angular.module('CodingReportCard')
		.controller('TreehouseAjax', ['$scope', '$http', function($scope, $http) {
			var treehouse = this;

			$http.get('http://teamtreehouse.com/danielbotta.json', {cache: true})
				.success(function(data) {
					$scope.profileT = data;
				})

				.error(function(data, status) {
					$scope.messageT = "Failed to get profile information.";
					$scope.statusT = status;
				})

			$http.jsonp('https://www.codeschool.com/users/dsbotta.json?callback=JSON_CALLBACK', {cache: true})
				.success(function(data) {
					$scope.profileC = data;
					setTimeout(function() {
						$('.loader').fadeOut();
					}, 1000);
				})

				.error(function(data, status) {
					$scope.messageC = "Failed to get profile information.";
					$scope.statusC = status;
					setTimeout(function() {
						$('.loader').fadeOut();
					}, 1000);
				})		
		}]);

	angular.module('CodingReportCard')
		.controller('TreehouseBadgeAjax', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
			var treehouse = this;
			var badgeId = $routeParams.badgeId;
			var next = null;
			var prev = null;
			$scope.badge = null;
			$scope.nextBadge = null;
			$scope.prevBadge = null;

			function init() {
				for(var i in treehouse.profile.badges) {
					if(treehouse.profile.badges[i].id === parseInt(badgeId)) {
						$scope.badge = treehouse.profile.badges[i];
						if(parseInt(i) + 1 === treehouse.profile.badges.length) {
							next = 0;
						} else {
							next = parseInt(i) + 1;
						}
						if(parseInt(i) === 0) {
							prev = parseInt(treehouse.profile.badges.length) - 1;
						} else {
							prev = parseInt(i) + - 1;
						}
						$scope.prevBadge = treehouse.profile.badges[prev];
						$scope.nextBadge = treehouse.profile.badges[next];
						break 
					}
				}
			};

			$http.get('http://teamtreehouse.com/danielbotta.json', {cache: true})
				.success(function(data) {
					treehouse.profile = data;
					init();
			})

		}]);

})();