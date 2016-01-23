/**
 * Created by EMD on 6/18/2015.
 */
define(["App"
    ,"./Question"
],function(app,question){
    return function(app) {
        app.directive("chooseQuestion", question);

    }
});