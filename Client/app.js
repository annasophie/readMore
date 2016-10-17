angular.module('readmore', []).controller('ReadMoreCtrl', function($scope) {
    $scope.book = {
      title: "TITLE",
      subtitle: "SUBTITLE",
      author: "AUTHOR",
      description: "DESCRIPTION"
    }
})

.factory('Books', function($http){
  $http({
    method: 'GET',
  })
});
