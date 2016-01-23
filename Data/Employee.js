


var employee=require('./Schema/Employee');
module.exports={
    get:function(callback){

        employee.find(function(err,res){
            if(err)
                callback(-1);
            else {
                callback(res);
            }
        });

    },
    getOne:function(val,callback){
        employee.findOne(val,function(err,res){
            if(err)
                callback(-1);
            else {
                callback(res);
            }
        });
    },
    post:function(val,callback){
        var newEmploy=new employee(val);
        newEmploy.save(function(err,res){
            if(err)
                callback(-1);
            else{
                callback(res);
            }
        });
    },
    delete:function(val,callback){
        employee.findOneAndRemove({_id:val._id},function(err,res){
            if(err)
                callback(-1);
            else {
                callback(res);
            }
        });
    },
    put:function(val,callback){
        employee.findOneAndUpdate({_id:val._id},{empName:val.empName,empContact:val.empContact,empDesignation:val.empDesignation,empSkills:val.empSkills},function(err,res){
            if(err)
                callback(-1);
            else {
                callback(res);
            }
        });
    }
};

