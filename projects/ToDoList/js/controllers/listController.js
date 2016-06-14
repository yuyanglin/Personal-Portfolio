app.controller('listController', ['$scope', function($scope) {
	$scope.items= [
		{
			name : "Breakfast",
			done : false
		}, {
			name : "Lunch",
			done : false
		}, {
			name : "Dinner",
			done : false
		}
	];

	$scope.addItem = function() {
			var newItem = {};
			newItem.name = $scope.inputItem;
			newItem.done = false;
			$scope.items.push(newItem);
			$scope.inputItem = "";
			countRemain();
	};

	$scope.doneList = {};

	$scope.count = 3;

	var countRemain = function() {
		$scope.count = 0;
		for (var i = 0; i < $scope.items.length; i++) {
			if ($scope.items[i].done == false) {
				$scope.count++;
			}
		}
	}

	$scope.addToDoneList = function(index) {
		if ($scope.items[index].done == true) {
			$scope.doneList[$scope.items[index].name] = true;
			console.log("I am here at adding");
		} else if ($scope.items[index].done == false) {
			delete $scope.doneList[$scope.items[index].name];
			console.log("I am at delete");
		}
		countRemain();
	};

	$scope.clearDoneList = function() {
		for (var i = 0; i < $scope.items.length; i++) {
			if ($scope.doneList.hasOwnProperty($scope.items[i].name)) {
				$scope.items[i].done = false;
			}
		}
		$scope.doneList = {};
		countRemain();
	}

	$scope.markAll = function() {
		for (var i = 0; i < $scope.items.length; i++) {
			$scope.items[i].done = true;
			$scope.doneList[$scope.items[i].name] = true;
		}
		countRemain();
	}

	$scope.removeItem = function(index) {
		delete $scope.doneList[$scope.items[index].name];
		$scope.items.splice(index, 1);
		countRemain(); 
	}

}]);