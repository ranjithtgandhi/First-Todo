
define(["App"],function(app,less){
    var service=["$rootScope",function($rootScope){
        this.showLoading=function(){
            $rootScope.loading=true;
        };
        this.hideLoading=function(){
            $rootScope.loading=false;
        };
    }];
    return service;
});