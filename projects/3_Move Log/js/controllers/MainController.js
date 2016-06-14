app.controller('MainController', ['$scope', function($scope) {
  $scope.exercises = [
    {
      icon: 'http://www.personal.psu.edu/afr3/blogs/siowfa12/sheep.jpg',
      name: 'Pushups',
      count: 20
    },
    {
      icon: 'http://www.personal.psu.edu/afr3/blogs/siowfa12/sheep.jpg',
      name: 'Squats',
      count: 15
    },
    {
      icon: 'http://www.personal.psu.edu/afr3/blogs/siowfa12/sheep.jpg',
      name: 'Pullups',
      count: 10
    },
    {
      icon: 'http://www.personal.psu.edu/afr3/blogs/siowfa12/sheep.jpg',
      name: 'Rows',
      count: 10
    },
    {
      icon: 'http://www.personal.psu.edu/afr3/blogs/siowfa12/sheep.jpg',
      name: 'Lunges',
      count: 10
    },
    {
      icon: 'http://www.personal.psu.edu/afr3/blogs/siowfa12/sheep.jpg',
      name: 'Step Ups',
      count: 10
    },
    {
      icon: 'http://www.personal.psu.edu/afr3/blogs/siowfa12/sheep.jpg',
      name: 'Sit Ups',
      count: 15
    }
  ];
  
  $scope.increase = function(index) {
    $scope.exercises[index].count += 1;
  };
  $scope.decrease = function(index) {
    $scope.exercises[index].count -= 1;
  };
}]);