

define(["App"],function(app,less){
    var service=["$rootScope","$http",function($rootScope,$http){
        this.get=function(callback){

            $http.get('/employees').success(function(res){
                callback(res);
            });
        },
            this.getOne= function (val,callback) {
                $http.get('/employee/'+val).success(function(res){
                    callback(res);
                });
            };
        this.post=function(val,callback){
            $http.post('/employee',val).success(function(res){
                callback(res);
            });
        };
        this.put=function(val,callback){
            $http.put('/employee',val).success(function(res){
                callback(res);
            });
        };
        this.delete=function(val,callback){
            $http.delete('/employee/'+val).success(function(res){
                callback(res);
            });
        };
    }];
    return service;
});