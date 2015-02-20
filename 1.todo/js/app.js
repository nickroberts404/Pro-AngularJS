var model = {
	user: "Nick",
	items: [{action: "Buy Flowers", done: false},
			{action: "Get Shoes", done: false},
			{action: "Collect Tickets", done: true},
			{action: "Email Professor", done: false}]
};

var todoApp = angular.module("todoApp", []);

todoApp.controller("ToDoCtrl", function($scope){
	$scope.todo = model;
})