// Create app
var myApp = angular.module('myApp', ['ui.router'])
// Configure app
myApp.config(function($stateProvider){
    $stateProvider
        .state('home', {
            url:'/',
            templateUrl: 'templates/home.html',
            controller: 'HomeController',
        }).state('content',{
            url:'/content',
            templateUrl:'templates/contact.html',
            controller: 'ContactController',
        }).state('about',{
            url:'/about',
            templateUrl:'templates/about.html',
            controller:'AboutController'
        })
})

// Landing page controller: define $scope.number as a number
.controller('HomeController',function($scope){
    $scope.number= 6;
})

// About page controller: define $scope.about as a string
.controller('AboutController', function($scope){
    $scope.about='Expression from Angular';
})


// Content controller: define $scope.url as an image
.controller('ContactController', function($scope){
    $scope.url = 'http://coolwildlife.com/wp-content/uploads/galleries/post-1593/Brown%20Bear%20Picture%20001.jpg'
})