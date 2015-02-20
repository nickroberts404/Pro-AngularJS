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

	$scope.incompleteCount = function(){
   		var count = 0;
   		angular.forEach($scope.todo.items, function(item){
   			if(!item.done) count++;
   		});
   		return count;
    }
})