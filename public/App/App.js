
window.name = "NG_DEFER_BOOTSTRAP!";
define(["Controller/index","less","Services/index","Factory/index","angular","jquery","angularRoute","angularBootstrap","toggle","windowEvent"],function(controller,less,service,factory){
    var app;
    angular.element(document).ready(function() {

        app = angular.module("myApp", ["ui.bootstrap","ui.bootstrap.tpls","ui.bootstrap.modal","ngRoute",'toggle-switch','windowEventBroadcasts'])
            .config(["$routeProvider",'$controllerProvider', function ($routeProvider,$controllerProvider) {
                $routeProvider
                    .when("/dashboard", {
                        templateUrl: "/template/dashboard",
                        controller:"dashboardController"
                    })
                    .when("/project", {
                        templateUrl: "/template/project",
                        controller:"projectController"
                    })
                    .when("/users", {
                        templateUrl: "/template/users",
                        controller:"employeeController"
                    })
					.when("/tasks", {
                        templateUrl: "/template/tasks",
                        controller:"taskController"
                    })
                   
                    .otherwise({
                        redirectTo:"/dashboard"
                    });

            }])
           .run(["$rootScope","$http","$location","$timeout",function($rootScope,$http,$location,$timeout){
                $rootScope.$on('$routeChangeStart', function (event, next, current) {
                    $rootScope.loading=true;
                    
                });
                $rootScope.$on('$routeChangeSuccess', function (event, next, current) {
                       $timeout(function(){
                        $rootScope.loading = false;
                    },1000);
                });
				$rootScope.theme=true;
				$rootScope.noRemoveStyle=false;
				$rootScope.$watch("theme",function(value){
				if($rootScope.noRemoveStyle){
						var style=angular.element("style");
						angular.element(style[style.length-1]).remove();
						angular.element("link").remove();
						}
					if(value){
						
						
						var theme=$('<link rel="stylesheet/less" href="Styles/black/black.less">');
						theme.appendTo('head');
						less.sheets[0]=theme[0];
						less.refresh();
						less.refreshStyles();
						
					}
					else{
						
						
						var theme=$('<link rel="stylesheet/less" href="Styles/white/white.less">');
						theme.appendTo('head');
						less.sheets[0]=theme[0];
						less.refresh();
						less.refreshStyles();
						
					}
					$rootScope.noRemoveStyle=true;
				});
            }]);



            factory(app);
            service(app);
            controller(app);
			
            angular.bootstrap(document, ["myApp"]);
          

    });
    return app;
});