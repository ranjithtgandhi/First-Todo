

define(["App"],function(app){
    var controller=["$scope","$http","$location","$route","$compile","$rootScope","LoadingScreen","$modalInstance","projectService","editId",
        function($scope,$http,$location,$route,$compile,$rootScope,LoadingScreen,$modalInstance,projectService,editId){

            $scope.ok=function(){
                $modalInstance.close();
            };
            if(editId!=-1){
                projectService.getOne(editId,function(res){
                    if(res!=-1){
                            $scope.projName=res.projectName;
                            $scope.projStdate=res.projStartdate;
                            $scope.projEndate=res.projEnddate;
                            $scope.projCliName=res.projClientName;
                    }
                    else{
                        alert("Sorry... Some Error Occurred during Retrieving...");
                        $modalInstance.close();
                    }
                });
            }
            $scope.save=function(){
                var obj={
                    projectName:$scope.projName,
                    projStartdate:$scope.projStdate,
                    projEnddate:$scope.projEndate,
                    projClientName:$scope.projCliName
                };
                if(editId==-1) {
                    projectService.post(obj, function (res) {
                        if (res != -1) {
                            $rootScope.refreshProject = !$rootScope.refreshProject;
                            $modalInstance.close();
                        }
                        else {
                            alert("Sorry... Some Error Occurred during Insert...");
                        }
                    });
                }
                else{
                    obj._id=editId;
                    projectService.put(obj, function (res) {
                        if (res != -1) {
                            $rootScope.refreshProject = !$rootScope.refreshProject;
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