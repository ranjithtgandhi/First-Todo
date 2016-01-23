
define(["App"
    ,"./Loading"
    ,"./Project"
    ,"./Employee"
    ,"./Tasks"
],function(app,load,project,emp,task){
    return function(app) {
        app.service("LoadingScreen", load);
        app.service("projectService", project);
        app.service("empService", emp);
        app.service("taskService", task);
    }
});