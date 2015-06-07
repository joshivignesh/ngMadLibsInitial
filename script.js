// Code goes here
angular.module('myApp', [])
.controller('MainCtrl', ['$scope',function($scope) {
  
    $scope.custom = true;
        $scope.toggleCustom = function() {
            $scope.custom = $scope.custom === false ? true: false;
        };

  $scope.messages = [
    {malename: '',
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

