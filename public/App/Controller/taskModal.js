

define(["App"],function(app){
    var controller=["$scope","$http","$location","$route","$compile","$rootScope","LoadingScreen","$modalInstance","taskService","editId","projectService","empService",
        function($scope,$http,$location,$route,$compile,$rootScope,LoadingScreen,$modalInstance,taskService,editId,projectService,empService){

            $scope.ok=function(){
                $modalInstance.close();
            };


            projectService.get(function(data) {
                $scope.projSelectArr=[];
                $scope.projSelectArr = data;
            });
            empService.get(function(data) {
                $scope.empSelectArr=[];
                $scope.empSelectArr = data;
            });
            if(editId!=-1){

                    taskService.getOne(editId,function(res){
                        if(res!=-1){
                            $scope.taskName=res.taskName;
                            $scope.taskProject=res.taskProject;
                            $scope.assignedTo=res.assignedTo;
                            $scope.status=res.status;
                        }
                        else{
                            alert("Sorry... Some Error Occurred during Retrieving...");
                            $modalInstance.close();
                        }
                    });



            }
            $scope.save=function(){
                var obj={
                    taskName:$scope.taskName,
                    taskProject:$scope.taskProject,
                    assignedTo:$scope.assignedTo,
                    status:$scope.status
                };
                if(editId==-1) {
                    taskService.post(obj, function (res) {
                        if (res != -1) {
                            $rootScope.refreshTask = !$rootScope.refreshTask;
                            $modalInstance.close();
                        }
                        else {
                            alert("Sorry... Some Error Occurred during Insert...");
                        }
                    });
                }
                else{
                    obj._id=editId;
                    taskService.put(obj, function (res) {
                        if (res != -1) {
                            $rootScope.refreshTask = !$rootScope.refreshTask;
                            $modalInstance.close();
                        }
                        else {
                            alert("Sorry... Some Error Occurred during Insert...");
                        }
                    });
                }
            };

        }];
    return controller;
});