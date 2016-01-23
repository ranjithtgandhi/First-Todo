
var mongoose=require('mongoose');

var taskSchema=new mongoose.Schema({
    taskName:'String',
    taskProject:'String',
    assignedTo:'String',
    status:'String'
});

module.exports=mongoose.model('task',taskSchema);