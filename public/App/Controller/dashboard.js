
define(["App"],function(app){
    var controller=["$scope","$http","$location","$route","$compile","$rootScope","LoadingScreen","projectService","empService","taskService",
	function($scope,$http,$location,$route,$compile,$rootScope,LoadingScreen,projectService,empService,taskService){

		taskService.get(function(data){
			$scope.taskSelectArray=[];
			$scope.taskSelectArray=data;
		});
		projectService.get(function(data) {
			$scope.projSelectArr=[];
			$scope.projSelectArr = data;
		});
		empService.get(function(data) {
			$scope.empSelectArr=[];
			$scope.empSelectArr = data;
		});
        $scope.project=function(){
			$location.path('/project');
		};
		 $scope.employee=function(){
			$location.path('/users');
		};
		 $scope.task=function(){
			$location.path('/tasks');
		};
		
    }];
    return controller;
});