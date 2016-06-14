app.controller('calculationController', ['$scope', function($scope) {
	$scope.displayStr = "";
	$scope.showResult = false;
	$scope.signEnable = false;
	$scope.prevNum = false;
	$scope.prevOp = false; 

	$scope.updateDisplay = function(inputChar) {
		if ($scope.showResult == true) {
			$scope.displayStr = "";
			$scope.showResult = false;
		}
		switch(inputChar) {
			case 10 :
				$scope.displayStr = $scope.displayStr + " + ";
				$scope.prevNum = false;
				$scope.prevOp = true;
				$scope.signEnable = false;
				break;
			case 11 :
				$scope.displayStr = $scope.displayStr + " - ";
				$scope.prevNum = false;
				$scope.prevOp = true;
				$scope.signEnable = false;
				break;
			case 12 :
				$scope.displayStr = $scope.displayStr + " * ";
				$scope.prevNum = false;
				$scope.prevOp = true;
				$scope.signEnable = false;
				break;
			case 13 :
				$scope.displayStr = $scope.displayStr + " / ";
				$scope.prevNum = false;
				$scope.prevOp = true;
				$scope.signEnable = false;
				break;
			default :
				$scope.displayStr = $scope.displayStr + inputChar;
				$scope.prevNum = true;
				$scope.prevOp = false;
		}
	}

	$scope.clear = function() {
		$scope.displayStr = "";
		$scope.prevNum = false;
		$scope.prevOp = false;
		$scope.signEnable = false;
	}

	$scope.putSign = function() {
		if (isNaN($scope.displayStr)) {
			$scope.displayStr = $scope.calculate($scope.displayStr);
		} else {
			$scope.displayStr = $scope.displayStr * (-1);
		}
		$scope.signEnable = true;
	}

	$scope.callResult = function() {
		$scope.displayStr = $scope.calculate($scope.displayStr);
		$scope.showResult = true;
		$scope.prevNum = false;
		$scope.prevOp = false; 
	}

	$scope.calculate = function (str) {
	    // '+' = 1, '-' = -1
	    var sign = 1;
	    var mulDiv = -1; //'none' = -1, '*' = 0, '/' = 1
	    var result = 0;
	    var preValue = -1;

	    for (var i = 0; i < str.length; i++) {
	        if (!isNaN(parseInt(str[i]))) {
	            var num = parseInt(str[i]);
	            while(++i < str.length && !isNaN(parseInt(str[i]))) {
	                num = num * 10 + parseInt(str[i]);
	            }
	            i--;
	            if (mulDiv == 0) {
	                preValue *= num;
	                mulDiv = -1; // reset
	            } else if (mulDiv == 1) {
	                preValue /= num;
	                mulDiv = -1; // reset
	            } else {
	                preValue = num;
	            }
	        } else if (str[i] == '+') {
	            result += sign * preValue; // previous sign
	            sign = 1;
	        } else if (str[i] == '-') {
	        	result += sign * preValue;
	            sign = -1;
	        } else if (str[i] == '*') {
	            mulDiv = 0;
	        } else if (str[i] == '/') {
	            mulDiv = 1;
	        }
	    }
	    result += sign * preValue;
	    return result;
	}

}]);