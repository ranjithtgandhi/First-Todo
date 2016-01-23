

var app=require('express')();
var project=require('./Codes/Project');
var employee=require('./Codes/Employee');
var task=require('./Codes/Task');

app.get('/projects',project.get);
app.get('/project/:_id',project.getOne);
app.post('/project',project.post);
app.put('/project',project.put);
app.delete('/project/:_id',project.delete);

app.get('/employees',employee.get);
app.get('/employee/:_id',employee.getOne);
app.post('/employee',employee.post);
app.put('/employee',employee.put);
app.delete('/employee/:_id',employee.delete);

app.get('/tasks',task.get);
app.get('/task/:_id',task.getOne);
app.post('/task',task.post);
app.put('/task',task.put);
app.delete('/task/:_id',task.delete);

module.exports=app;