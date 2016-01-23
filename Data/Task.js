

var tasks=require('./Schema/Tasks');
module.exports={
    get:function(callback){

        tasks.find(function(err,res){
            if(err)
                callback(-1);
            else {
                callback(res);
            }
        });

    },
    getOne:function(val,callback){
        tasks.findOne(val,function(err,res){
            if(err)
                callback(-1);
            else {
                callback(res);
            }
        });
    },
    post:function(val,callback){
        var newTask=new tasks(val);
        newTask.save(function(err,res){
            if(err)
                callback(-1);
            else{
                callback(res);
            }
        });
    },
    delete:function(val,callback){

        tasks.findOneAndRemove({_id:val._id},function(err,res){
            if(err)
                callback(-1);
            else {
                callback(res);
            }
        });
    },
    put:function(val,callback){

        tasks.findOneAndUpdate({_id:val._id},{taskName:val.taskName,taskProject:val.taskProject,assignedTo:val.assignedTo,status:val.status},function(err,res){
            if(err)
                callback(-1);
            else {
                callback(res);
            }
        });
    }
};

