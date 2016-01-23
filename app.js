
var http=require('http');
var express=require('express');
var app=new express();
var body=require('body-parser');
var path=require('path');
var routes=require('./Routes/Main');
/*var mongoose=require('mongoose');

mongoose.connect("mongodb://arun:shiva@proximus.modulusmongo.net:27017/ra4gimYx",function(err){
    console.log(err);
});*/

app.use(body.urlencoded());
app.use(body.json());
app.set('view engine','jade');
app.engine('html',require('ejs').renderFile);
app.set('Views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,"public")));
app.use(routes);
var server=app.listen(process.env.PORT || 1272);
console.log("Server Running on the port:"+(process.env.PORT || 1272));