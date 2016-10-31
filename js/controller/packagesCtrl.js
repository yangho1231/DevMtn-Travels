angular.module('devmtnTravel').controller('packagesCtrl', function($scope, mainSrv){
  $scope.repeat = mainSrv.travelInfo;
})
