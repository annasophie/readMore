var readmore = angular.module('readmore', []);

readmore.controller('ReadMoreCtrl', ['$scope', 'Books', function($scope, Books) {
    $scope.book = {
      title: "TITLE",
      subtitle: "SUBTITLE",
      author: "AUTHOR",
      description: "DESCRIPTION"
    };
    $scope.findBooks = function(){
      Books.findBooks("HI there")
    }
}]);

readmore.factory('Books', ['$http',
  function($http){
    return {
      findBooks: function(topic){
        console.log(topic);
      }
    }
  }
]);
// readMore.factory('Books', function($http){});

// angular.module('ngAppDemo', []).controller('ngAppDemoController', function($scope) {
//   $scope.a = 1;
//   $scope.b = 2;
// });