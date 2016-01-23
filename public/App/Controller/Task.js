
define(["App"],function(app){
    var controller=["$scope","$http","$location","$route","$compile","$rootScope","LoadingScreen","$modal","taskService",
        function($scope,$http,$location,$route,$compile,$rootScope,LoadingScreen,$modal,taskService){
            $scope.home=function(){
                $location.path('/dashboard');
            };
            $scope.taskArray=[];
            $scope.addNew=function(){
                $modal.open({
                    templateUrl:"./App/Template/Task.html",
                    controller:"taskModalController",
                    resolve: {
                        editId: function () {
                            return -1;
                        }
                    }
                });
            };
            $scope.$on("$viewContentLoaded",function(){
                taskService.get(function(data){
                    $scope.taskArray=data;
                });

            });
            $rootScope.$watch("refreshTask",function(val){
                taskService.get(function(data){
                    $scope.taskArray=data;
                });
            });
            $scope.edit=function($event){
                var projEditId=angular.element($event.target).parent().parent().find(".id").text().trim();
                $modal.open({
                    templateUrl:"./App/Template/Task.html",
                    controller:"taskModalController",
                    resolve: {
                        editId: function () {
                            return projEditId;
                        }
                    }
                });
            };
            $scope.delete=function($event){
                var projEditId=angular.element($event.target).parent().parent().find(".id").text().trim();

                taskService.delete(projEditId, function (res) {
                    if (res != -1) {
                        $rootScope.refreshTask = !$rootScope.refreshTask;

                    }
                    else {
                        alert("Sorry... Unable to Delete...");
                    }
                });
            }

        }];
    return controller;
});