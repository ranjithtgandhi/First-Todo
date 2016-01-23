
var mongoose=require('mongoose');

var employeeSchema=new mongoose.Schema({
    empName:'String',
    empContact:'String',
    empDesignation:'String',
    empSkills:'String'
});

module.exports=mongoose.model('employee',employeeSchema);