'use strict';

angular.module('movieManiaApplication')
  .controller('GithubissuesCtrl', ['$scope', '$http', function ($scope,$http) {

	//Get All the current Issues
	var url = 'https://api.github.com/repos/upuldi/AngularJS/issues';

	//Refactored the backend code into a function so it can be called
	function getDataFromBacked() {
		$http.get(url,{
			params : {}
		}).success(function(data) {
			$scope.issues = data;

		}).error(function(data,status,header,config) {

		});
	}

	//Get Issue Details and show it 
	getDataFromBacked();

	//issue instance binded to the scope
	$scope.issue = {};


	//Post a new issue to the backend API
	$scope.postNewIssue = function() {
		//Config
		$http.post(url,{
			title : $scope.issue.title,
			body : $scope.issue.description
		}, {
			//Headers
			headers : {
				Authorization : 'token 3f8a3f5b017d749803f2df3ac59fd7fab5dcd9ec'
			}
		}).success(function(data) {
			window.alert("Successfully added ");
			$scope.issue.title = "";
			$scope.issue.description = "";
			getDataFromBacked();

		}).error(function(data,status) {
			window.alert("ERROR " + status );
		});

	};



  }]);
