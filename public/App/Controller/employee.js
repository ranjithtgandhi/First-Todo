

define(["App"],function(app){
    var controller=["$scope","$http","$location","$route","$compile","$rootScope","LoadingScreen","$modal","empService",
        function($scope,$http,$location,$route,$compile,$rootScope,LoadingScreen,$modal,empService){
            $scope.home=function(){
                $location.path('/dashboard');
            };
            $scope.employeeArray=[];
            $scope.addNew=function(){
                $modal.open({
                    templateUrl:"./App/Template/Employee.html",
                    controller:"employeeModalController",
                    resolve: {
                        editId: function () {
                            return -1;
                        }
                    }
                });
            };
            $scope.$on("$viewContentLoaded",function(){
                empService.get(function(data){
                    $scope.employeeArray=data;
                });

            });
            $rootScope.$watch("refreshEmployee",function(val){
                empService.get(function(data){
                    $scope.employeeArray=data;
                });
            });
            $scope.edit=function($event){
                var projEditId=angular.element($event.target).parent().parent().find(".id").text().trim();
                $modal.open({
                    templateUrl:"./App/Template/Employee.html",
                    controller:"employeeModalController",
                    resolve: {
                        editId: function () {
                            return projEditId;
                        }
                    }
                });
            };
            $scope.delete=function($event){
                var projEditId=angular.element($event.target).parent().parent().find(".id").text().trim();

                empService.delete(projEditId, function (res) {
                    if (res != -1) {
                        $rootScope.refreshEmployee = !$rootScope.refreshEmployee;

                    }
                    else {
                        alert("Sorry... Unable to Delete...");
                    }
                });
            }

        }];
    return controller;
});