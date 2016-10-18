var readmore = angular.module('readmore', []);

readmore.controller('ReadMoreCtrl', ['$scope', 'Books', function($scope, Books) {
    $scope.book = {
      title: "TITLE",
      subtitle: "SUBTITLE",
      author: "AUTHOR",
      description: "DESCRIPTION"
    };
    $scope.findBooks = function(){
      Books.findBooks($scope.topic)
    }
}]);

readmore.factory('Books', ['$http',
  function($http){
    return {
      findBooks: function(topic){
        console.log(topic);
        return $http({
          method: 'GET',
          url: 'https://www.googleapis.com/books/v1/volumes?q="' + topic + '"'
        }).then(function(data){
          console.log(data);
        })
      }
    }
  }
]);
// readMore.factory('Books', function($http){});

// angular.module('ngAppDemo', []).controller('ngAppDemoController', function($scope) {
//   $scope.a = 1;
//   $scope.b = 2;
// });