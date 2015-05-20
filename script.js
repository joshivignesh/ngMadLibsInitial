// Code goes here
angular.module('myApp', [])
.controller('MainCtrl', ['$scope',function($scope) {
	
  $scope.messages = [
    {malename: 'malename',
    dirtytask: 'Dirtytask',
    obnoxiouscelebrity: 'Obnoxious',
    jobtitle: 'Jobtitle',
    celebrity : 'Celebrity',
    hugenumber : 'Hugenumber',
    tedioustask : 'Tedioustask',
    uselessskill : 'Uselessskill', 
    adjective : 'Adjective'

  }
  ];

}]);