

define(["App"],function(app,less){
    var service=["$rootScope","$http",function($rootScope,$http){
       this.get=function(callback){

           $http.get('/projects').success(function(res){
                    callback(res);
           });
       },
       this.getOne= function (val,callback) {
           $http.get('/project/'+val).success(function(res){
               callback(res);
           });
       };
       this.post=function(val,callback){
                $http.post('/project',val).success(function(res){
                    callback(res);
               });
       };
       this.put=function(val,callback){
           $http.put('/project',val).success(function(res){
               callback(res);
           });
       };
       this.delete=function(val,callback){
            $http.delete('/project/'+val).success(function(res){
                callback(res);
            });
        };
    }];
    return service;
});