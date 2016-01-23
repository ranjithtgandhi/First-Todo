
var index=require("./initialRoutes");
var lib=require('./../lib/index');
var app=require('express')();
app.get("/Todo",index.Start);
app.get("/template/:optionTemplate",index.template);
app.use(lib);
app.all('*',function(req,res){
    if(req.path!="/Todo")
      res.redirect("/Todo");
});
module.exports=app;