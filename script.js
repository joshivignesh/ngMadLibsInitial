// Code goes here
angular.module('myApp', [])
.controller('MainCtrl', ['$scope',function($scope) {
	
  $scope.messages = [
    {malename: 'Malename',
    dirtytask: 'dirtytask',
    obnoxiouscelebrity: 'Obnoxious celebrity',
    jobtitle: 'Jobtitle',
    celebrity : 'Celebrity',
    hugenumber : 'Hugenumber',
    tedioustask : 'Tedioustask',
    uselessskill : 'Uselessskill', 
    adjective : 'Adjective'

  }
  ];

}]);