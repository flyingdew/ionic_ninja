angular.module('starter.controllers', [])
.controller('AnimatedListCtrl', function($scope, $timeout) {
  var nextItem = 0;
  $scope.items = [];
  for (var i=0; i < 5; i++) {
    $scope.items.push('Item ' + (nextItem++));
  }

  $scope.addItem = function(atIndex) {
    $scope.items.splice(atIndex + 1, 0, 'Item ' + nextItem);
    nextItem++;
  };

  $scope.delete = function(index){
  	$scope.items.splice(index, 1)
  }
});



