
define(["App"],function(app){
    var controller=["$scope","$http","$location","$route","$compile","$rootScope","LoadingScreen","$modal","projectService",
	function($scope,$http,$location,$route,$compile,$rootScope,LoadingScreen,$modal,projectService){
		$scope.home=function(){
			$location.path('/dashboard');
		};
		$scope.projectArray=[];
       $scope.addNew=function(){
	   $modal.open({
			templateUrl:"./App/Template/projModal.html",
			controller:"projectModalController",
		   resolve: {
			   editId: function () {
				   return -1;
			   }
		   }
	   });
	   };
		$scope.$on("$viewContentLoaded",function(){
			projectService.get(function(data){
				$scope.projectArray=data;
			});

		});
		$rootScope.$watch("refreshProject",function(val){
			projectService.get(function(data){
				$scope.projectArray=data;
			});
		});
		$scope.edit=function($event){
			var projEditId=angular.element($event.target).parent().parent().find(".id").text().trim();
			$modal.open({
				templateUrl:"./App/Template/projModal.html",
				controller:"projectModalController",
				resolve: {
					editId: function () {
						return projEditId;
					}
				}
			});
		};
		$scope.delete=function($event){
			var projEditId=angular.element($event.target).parent().parent().find(".id").text().trim();

			projectService.delete(projEditId, function (res) {
				if (res != -1) {
					$rootScope.refreshProject = !$rootScope.refreshProject;

				}
				else {
					alert("Sorry... Unable to Delete...");
				}
			});
		}
		
    }];
    return controller;
});