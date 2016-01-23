

var project=require('./Schema/Project');
module.exports={
    get:function(callback){

        project.find(function(err,res){
            if(err)
                callback(-1);
            else {
               callback(res);
            }
        });

    },
    getOne:function(val,callback){
        project.findOne(val,function(err,res){
            if(err)
                callback(-1);
            else {
                callback(res);
            }
        });
    },
    post:function(val,callback){
      var newProj=new project(val);
       newProj.save(function(err,res){
          if(err)
                callback(-1);
          else{
              callback(res);
          }
       });
    },
    delete:function(val,callback){
        console.log(val);
        project.findOneAndRemove({_id:val._id},function(err,res){
            if(err)
                callback(-1);
            else {
                callback(res);
            }
        });
    },
    put:function(val,callback){

        project.findOneAndUpdate({_id:val._id},{projectName:val.projectName,projStartdate:val.projStartdate,projEnddate:val.projEnddate,projClientName:val.projClientName},function(err,res){
            if(err)
                callback(-1);
            else {
                callback(res);
            }
        });
    }
};

