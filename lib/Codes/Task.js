

var data=require('./../../Data/Task');

module.exports={
    get:function(req,res){
        data.get(function(data){
            res.send(data);
        });

    },
    getOne:function(req,res){

        data.getOne(req.params,function(data){
            res.send(data);
        });

    },
    post:function(req,res){
        var body=req.body;
        data.post(body,function(result){
            res.send(result);
        });
    },
    delete:function(req,res){


        data.delete(req.params,function(result){
            res.send(result);
        });

    },
    put:function(req,res){

        var body=req.body;
        data.put(body,function(result){
            res.send(result);
        });
    }
};