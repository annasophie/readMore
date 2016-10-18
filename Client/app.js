var readmore = angular.module('readmore', []);

readmore.controller('ReadMoreCtrl', ['$scope', 'Books', function($scope, Books) {
    $scope.book = {
      title: "TITLE",
      subtitle: "SUBTITLE",
      author: "AUTHOR",
      description: "DESCRIPTION"
    };
    $scope.bookList = [];

    $scope.findBooks = function(){
      Books.findBooks($scope.topic)
      .then(function(books) {
        console.log("finding book: " + books);
        $scope.topic = '';
        $scope.bookList = books;
      })
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
        }).then(function(info){
          return info.data.items;
        })
      }
    }
  }
]);
