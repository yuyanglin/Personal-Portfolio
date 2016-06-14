var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
        controller: 'HomeController', 
        templateUrl: 'views/home.html' 
    }).when('/newuser', {
        controller: 'NewUserController',
        templateUrl: 'views/newUser.html'
    }).when('/edituser', {
        controller: 'EditUserController',
        templateUrl: 'views/editUser.html'
    }).otherwise({ 
        redirectTo: '/' 
    }); 
});

app.factory("data", function() {
    var users = [{
        id: 1,
        fName: 'Hege',
        lName: "Pege",
        title : "Head Engineer",
        sex : "male",
        age : 39

    }, {
        id: 2,
        fName: 'Kim',
        lName: "Pim",
        title : "Development Engineer",
        sex : "male",
        age : 30
    }, {
        id: 3,
        fName: 'Sal',
        lName: "Smith",
        title : "Test Engineer",
        sex : "female",
        age : 26
    }, {
        id: 4,
        fName: 'Jack',
        lName: "Jones",
        title : "Web Engineer",
        sex : "male",
        age : 32
    }, {
        id: 5,
        fName: 'John',
        lName: "Doe",
        title : "Web Engineer",
        sex : "male",
        age : 30
    }, {
        id: 6,
        fName: 'Peter',
        lName: "Pan",
        title : "Head Engineer",
        sex : "male",
        age : 28
    }, {
        id: 7,
        fName: 'Kevin',
        lName: "Lin",
        title : "Development Engineer",
        sex : "male",
        age : 34
    }, {
        id: 8,
        fName: 'Amy',
        lName: "Smith",
        title : "Test Engineer",
        sex : "female",
        age : 26
    }, {
        id: 9,
        fName: 'Andrew',
        lName: "Jones",
        title : "Web Engineer",
        sex : "male",
        age : 32
    }, {
        id: 10,
        fName: 'Tiffany',
        lName: "Trump",
        title : "CMO",
        sex : "female",
        age : 36
    }, {
        id: 11,
        fName: 'Marry',
        lName: "Pan",
        title : "CFO",
        sex : "female",
        age : 35
    }, {
        id: 12,
        fName: 'Gandalf',
        lName: "Gray",
        title : "CEO",
        sex : "male",
        age : 38
    }, {
        id: 13,
        fName: 'Jane',
        lName: "Smith",
        title : "Test Engineer",
        sex : "female",
        age : 29
    }, {
        id: 14,
        fName: 'Jacky',
        lName: "Jones",
        title : "Project Engineer",
        sex : "male",
        age : 31
    }, {
        id: 15,
        fName: 'Jenny',
        lName: "Doe",
        title : "Application Engineer",
        sex : "female",
        age : 29
    }, {
        id: 16,
        fName: 'David',
        lName: "Jobs",
        title : "Full Stack Engineer",
        sex : "male",
        age : 24
    }
    ];

    var factory = {};
    
    factory.currentId = null;

    factory.getUsers = function() {
        return users;
    }

    // Save the Change
    factory.saveChange = function(newUserName, index, fName, lName, title, sex, age) {
        if (newUserName) {
            var newUser = {};
            if (users.length == 0) {
                newUser["id"] = 1;
            } else {
                newUser["id"] = users[users.length - 1].id + 1;
            }
            newUser["fName"] = fName;
            newUser["lName"] = lName;
            newUser["title"] = title;
            newUser["sex"] = sex;
            newUser["age"] = age;
            users.push(newUser);    
        } else {
            users[index]["fName"] = fName;
            users[index]["lName"] = lName;
            users[index]["title"] = title;
            users[index]["sex"] = sex;
            users[index]["age"] = age;
            index = null;
        }
    };

    factory.getIndex = function(id) {
        var idx = 0;
        for (var i = 0; i < users.length; i++) {
            if (users[i].id == id) {
                idx = i;
            }
        }
        return idx;
    };

    // Remove the User
    factory.removeUser = function(id) {
        var idx = factory.getIndex(id);
        if (users.length > 1) {
            users.splice(idx, 1);
        } else {
            users.pop();
        }
    }

    return factory;
});

//************* NEW USER CONTROLLER ************//
app.controller('NewUserController', ['$scope', 'data', function($scope, data) {
    $scope.users = data.getUsers();

    $scope.edit = true;

    $scope.fName = '';
    $scope.lName = '';
    $scope.title = '';
    $scope.sex = '';
    $scope.age = '';
    $scope.passw1 = '';
    $scope.passw2 = '';

    $scope.addUser = function() {
        data.saveChange(true, null, $scope.fName, $scope.lName, $scope.title, $scope.sex, $scope.age);
    };

    // Exam the data field valid!
    $scope.$watch('passw1', function() {
        $scope.test();
    });
    $scope.$watch('passw2', function() {
        $scope.test();
    });
    $scope.$watch('fName', function() {
        $scope.test();
    });
    $scope.$watch('lName', function() {
        $scope.test();
    });
    $scope.$watch('title', function() {
        $scope.test();
    });
    $scope.$watch('sex', function() {
        $scope.test();
    });
    $scope.$watch('age', function() {
        $scope.test();
    });

    // Test Two passward are same
    $scope.test = function() {
        if ($scope.passw1 !== $scope.passw2) {
            $scope.error = true;
        } else {
            $scope.error = false;
        }
        $scope.incomplete = false;
        if ($scope.edit && (!$scope.fName.length ||
                !$scope.lName.length ||
                !$scope.passw1.length || !$scope.passw2.length)) {
            $scope.incomplete = true;
        }
    };
}]);

//************* EDIT USER CONTROLLER ************//
app.controller('EditUserController', ['$scope', 'data', function($scope, data) {
    // $scope.users = data.getUsers();
    $scope.newUserName = false;

    $scope.editUser = function(idx) {
        $scope.users = data.getUsers();
        $scope.fName = $scope.users[idx].fName;
        $scope.lName = $scope.users[idx].lName;
        $scope.title = $scope.users[idx].title;
        $scope.sex = $scope.users[idx].sex;
        $scope.age = $scope.users[idx].age;
    };

    $scope.index = data.getIndex(data.currentId);

    $scope.editUser($scope.index);

    $scope.addUser = function() {
        data.saveChange(false, $scope.index, $scope.fName, $scope.lName, $scope.title, $scope.sex, $scope.age);
    };

    // Exam the data field valid!
    $scope.$watch('passw1', function() {
        $scope.test();
    });
    $scope.$watch('passw2', function() {
        $scope.test();
    });
    $scope.$watch('fName', function() {
        $scope.test();
    });
    $scope.$watch('lName', function() {
        $scope.test();
    });
    $scope.$watch('title', function() {
        $scope.test();
    });
    $scope.$watch('sex', function() {
        $scope.test();
    });
    $scope.$watch('age', function() {
        $scope.test();
    });

    // Test Two passward are same
    $scope.test = function() {
        if ($scope.passw1 !== $scope.passw2) {
            $scope.error = true;
        } else {
            $scope.error = false;
        }
        $scope.incomplete = false;
        if ($scope.edit && (!$scope.fName.length ||
                !$scope.lName.length ||
                !$scope.passw1.length || !$scope.passw2.length)) {
            $scope.incomplete = true;
        }
    };
}]);

//************ HOME PAGE CONTROLLER ************//
app.controller('HomeController', ['$scope', 'data', function($scope, data, $routeParams) {
    $scope.users = data.getUsers();

    $scope.searchinput = null;

    $scope.setId = function(id) {
        data.currentId = id;
    }


    $scope.deleteUser = function(id) {
        data.removeUser(id);
        $scope.syncFunc();
        if ( ($scope.currentPage - 1) * $scope.pageSize >= $scope.users.length) {
            $scope.updatePage($scope.currentPage - 1);
        } else {
            $scope.updatePage($scope.currentPage);
        }
    };

    $scope.test = $scope.users.length;

    // Pager Logic
    $scope.pageSize = 4;
    $scope.startIdx = 0;
    $scope.pageNumArray = [];
    $scope.currentPage = 1;

    $scope.syncFunc = function() {
        $scope.pageNumbers = Math.ceil($scope.users.length / $scope.pageSize);
        $scope.pageNumArray = [];
        for (var i = 0; i < $scope.pageNumbers; i++) {
            $scope.pageNumArray[i] = i + 1;
        }
    };

    $scope.syncFunc();

    // This will update the page content base on the current page number
    $scope.updatePage = function(num) {
        if (num < 1 || num > $scope.pageNumArray.length) {
            return;
        } else {
            $scope.startIdx = $scope.pageSize * (num - 1);
            $scope.currentPage = num;
        }
    }
}]);


