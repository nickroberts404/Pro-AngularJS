angular.module("outdoorCenter")
.controller("outdoorCenterCtrl", function($scope){

	$scope.data = {
		products: [
			{ name: "Product #1", description: "An awesome product", category: "Category #1", price:100},
			{ name: "Product #2", description: "An awesome product", category: "Category #2", price:110},
			{ name: "Product #3", description: "An awesome product", category: "Category #3", price:150},
			{ name: "Product #4", description: "An awesome product", category: "Category #4", price:230}
			]
	};
});