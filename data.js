var data;
var myDat = angular.module('myDat', ['firebase']);

myDat.controller('datCtrl', function($scope, $firebaseArray){
	
	var ref = new Firebase('https://evancportfolio.firebaseio.com/');

	var projRef = ref.child('projects');
	
	$scope.projects = $firebaseArray(projRef);
}