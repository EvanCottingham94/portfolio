// Create app
var myApp = angular.module('myApp', ['ui.router', 'firebase'])
// Configure app
myApp.config(function($stateProvider){
    $stateProvider
        .state('home', {
            url:'/',
            templateUrl: 'templates/home.html',
            controller: 'HomeController',
        }).state('projects',{
            url:'/projects',
            templateUrl:'templates/projects.html',
            controller: 'ProjectsController',
        }).state('comments',{
            url:'/comments',
            templateUrl:'templates/comments.html',
            controller:'CommentsController'
        })
})

// Landing page controller: define $scope.number as a number
.controller('HomeController',function($scope, $firebaseArray){
	
	var ref = new Firebase('https://evancportfolio.firebaseio.com/');

	var projRef = ref.child('projects');
	
	$scope.projects = $firebaseArray(projRef);
})

// Content controller: define $scope.url as an image
.controller('ProjectsController', function($scope, $firebaseArray){
    var ref = new Firebase('https://evancportfolio.firebaseio.com/');

	var projRef = ref.child('projects');
	
	$scope.projects = $firebaseArray(projRef);
})

.controller('CommentsController', function($scope, $firebaseArray) {
	var ref = new Firebase('https://evancportfolio.firebaseio.com/');
	
	var commRef = ref.child('comments'); 
	
	$scope.comments = $firebaseArray(commRef);
	
	$scope.comment = function() {
		// Add a new object to the comments array using the firebaseArray .$add method. 		
		$scope.comments.$add({
			text:$scope.newComment,
			name:$scope.name,
			time:Firebase.ServerValue.TIMESTAMP
		})
		
		// Once the comment is saved, reset the value of $scope.newComment to empty string
		.then(function() {
			$scope.newComment = ''
		})
	}
})