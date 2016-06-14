app.directive("itemElement", function() {
	return {
		restrict : "E",
		scope : {
			item : "="
		},
		templateUrl : 'js/directives/item.html'
	};
});