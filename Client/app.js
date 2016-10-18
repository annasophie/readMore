var readmore = angular.module('readmore', []);

readmore.controller('ReadMoreCtrl', ['$scope', 'Books', function($scope, Books) {
    $scope.book = {
      title: "TITLE",
      subtitle: "SUBTITLE",
      author: "AUTHOR",
      description: "DESCRIPTION"
    };
    $scope.bookList = [];
    $scope.index = 0;
    $scope.currentBook = {};
    $scope.sought = false;

    $scope.findBooks = function(){
      $scope.sought = true;
      Books.findBooks($scope.topic)
      .then(function(books) {
        $scope.topic = '';
        books.items.forEach(function(book){
          $scope.bookList.push(book);
        });
        $scope.currentBook = books.items[$scope.index];
      })
    };

    $scope.scroll = function() {
      console.log('scrolling')
      if ($scope.index < $scope.bookList.length) {
        $scope.index++;
        console.log($scope.index)
        $scope.currentBook = $scope.bookList[$scope.index];
      }
      //TODO: add else
    };
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
          return info.data;
        })
      }
    }
  }
]);
