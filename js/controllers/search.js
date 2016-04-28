'use strict';

// Handler to view Search Data
testApp.controller("SearchController", ['$scope' ,'RequestService', function ($scope ,RequestService ) {
	$scope.searchKeywords=null;
	$scope.searchbox = function (searchKeywords){
		$scope.searchData=[];	
		if(searchKeywords !=null){
			var cities 	= searchKeywords.split(',');

			// Using the forEach helper method to loop through the array
			angular.forEach(cities, function(city){

				RequestService.searchWeather(city)
				.then(function(response)
				{
					 $scope.searchData.push(response.data);
					 return true;
				})
				.catch(function(error)
				{
					alert('something is going wrong');
					return null;
				});

			});
			
		}
		
			
	};
	$scope.reset=function(){
		$scope.searchData=[];
		$scope.searchKeywords=null;	
	}

	
	
}]);