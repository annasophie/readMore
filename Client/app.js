var readmore = angular.module('readmore', ['ngAnimate']);

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
          book.authors = book.volumeInfo.authors
          $scope.bookList.push(book);
          console.log(book.authors)

        });
        $scope.currentBook = books.items[$scope.index];
        // $scope.currentBook.author = $scope.bookList[$scope.index].volumeInfo.authors
        // console.log($scope.currentBook.author)
        // console.log($scope.bookList[0].volumeInfo.authors)
      })
    };

    $scope.scroll = function() {
      console.log('scrolling')
      if ($scope.index < $scope.bookList.length) {
        $scope.index++;
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
          console.log(info.data.items[0])

          return info.data;
        })
      }
    }
  }
]);
