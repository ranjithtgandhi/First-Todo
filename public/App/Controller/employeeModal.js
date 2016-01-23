

define(["App"],function(app){
    var controller=["$scope","$http","$location","$route","$compile","$rootScope","LoadingScreen","$modalInstance","empService","editId",
        function($scope,$http,$location,$route,$compile,$rootScope,LoadingScreen,$modalInstance,empService,editId){

            $scope.ok=function(){
                $modalInstance.close();
            };
            if(editId!=-1){
                empService.getOne(editId,function(res){
                    if(res!=-1){
                        $scope.empName=res.empName;
                        $scope.empContact=res.empContact;
                        $scope.empDesignation=res.empDesignation;
                        $scope.empSkills=res.empSkills;
                    }
                    else{
                        alert("Sorry... Some Error Occurred during Retrieving...");
                        $modalInstance.close();
                    }
                });
            }
            $scope.save=function(){
                var obj={
                    empName:$scope.empName,
                    empContact:$scope.empContact,
                    empDesignation:$scope.empDesignation,
                    empSkills:$scope.empSkills
                };
                if(editId==-1) {
                    empService.post(obj, function (res) {
                        if (res != -1) {
                            $rootScope.refreshEmployee = !$rootScope.refreshEmployee;
                            $modalInstance.close();
                        }
                        else {
                            alert("Sorry... Some Error Occurred during Insert...");
                        }
                    });
                }
                else{
                    obj._id=editId;
                    empService.put(obj, function (res) {
                        if (res != -1) {
                            $rootScope.refreshEmployee = !$rootScope.refreshEmployee;
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