
define(["App"],function(app){
    var directive=function() {
        return {
            restrict:"E",
            templateUrl:"./App/Template/Question.html",
            replace:false,
            link:function($scope,$element,$attr){
                $scope.tickedAnswer=false;
            }
        };
    };
    return directive;
});