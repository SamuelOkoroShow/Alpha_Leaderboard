/**
 * @author Sam Okoro (Vctry)
 */

var App = angular.module('vctryApp', ['ngRoute', 'ngAnimate']);


//this just grabs some placeholder data for the home controller
App.controller('homeCtrl', ['$scope', '$http',
function($scope, $http) {
	$http.get('https://dazzling-fire-2808.firebaseio.com/Alphas.json').success(function(data) {
		$scope.posts = data;

	});

}]);

App.controller('profileCtrl', ['$scope', '$http',

//this grabs discovery data from discover.json
function($scope, $http) {
	$http.get('data/profile.json').success(function(data) {
		$scope.profile = data;
	});

}]);

//This is the notifications controller
App.controller('notesCtrl', ['$scope', '$http',

//this grabs discovery data from discover.json
function($scope, $http) {
	$http.get('data/notes.json').success(function(data) {
		$scope.notes = data;
	});
	$http.get('data/users.json').success(function(data) {
		$scope.users = data;
	});

}]);

