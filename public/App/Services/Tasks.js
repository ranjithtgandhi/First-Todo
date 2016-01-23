
define(["App"],function(app,less){
    var service=["$rootScope","$http",function($rootScope,$http){
        this.get=function(callback){

            $http.get('/tasks').success(function(res){
                callback(res);
            });
        },
            this.getOne= function (val,callback) {
                $http.get('/task/'+val).success(function(res){
                    callback(res);
                });
            };
        this.post=function(val,callback){
            $http.post('/task',val).success(function(res){
                callback(res);
            });
        };
        this.put=function(val,callback){
            $http.put('/task',val).success(function(res){
                callback(res);
            });
        };
        this.delete=function(val,callback){
            $http.delete('/task/'+val).success(function(res){
                callback(res);
            });
        };
    }];
    return service;
});