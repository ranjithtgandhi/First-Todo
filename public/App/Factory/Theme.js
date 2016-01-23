
define(["App","less"],function(app,less){
    var service=function(){

        return {
        setBlack : function () {
            $("style").remove();
            $("link").remove();
            less.sheets[0] = $("<link rel='stylesheet/less' href='Styles/black/black.less'>").appendTo("head")[0];
            less.refresh();
            less.refreshStyles();
        },
        setWhite : function () {
            $("style").remove();
            $("link").remove();
            less.sheets[0] = $("<link rel='stylesheet/less' href='Styles/white/white.less'>").appendTo("head")[0];
            less.refresh();
            less.refreshStyles();
        }
        };
    };

});