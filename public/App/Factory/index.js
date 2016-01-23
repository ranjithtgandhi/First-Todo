
define(["App",
    "./Theme"
],function(app,theme){
    return function(app) {
        app.factory("Theme", theme);
    };
});