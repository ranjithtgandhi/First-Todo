
var mongoose=require('mongoose');

var projectSchema=new mongoose.Schema({
    projectName:'String',
    projStartdate:'String',
    projEnddate:'String',
    projClientName:'String'
});

module.exports=mongoose.model('project',projectSchema);