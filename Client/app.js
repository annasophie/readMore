angular.module('readmore', []).controller('ReadMoreCtrl', function($scope) {
    $scope.book = {
      title: "TITLE",
      subtitle: "SUBTITLE",
      author: "AUTHOR",
      description: "DESCRIPTION"
    }
});

// readMore.factory('Books', function($http){});

// angular.module('ngAppDemo', []).controller('ngAppDemoController', function($scope) {
//   $scope.a = 1;
//   $scope.b = 2;
// });