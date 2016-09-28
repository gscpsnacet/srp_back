app.controller("hostCtrl",function($scope,$rootScope,$location,Data,toaster){
	$scope.welcome="Welcome";
 //   console.log("host");


	$scope.logout = function () {
        Data.get('logout').then(function (results) {
            Data.toast(results);
            console.log("logout called");
            $location.path('login');
        });
    };

    $scope.gotosignup=function(){
        $location.path('signup');
    };

    $scope.gotofeed=function(){
        console.log("feed");
        $location.path('feed');
    };

    $scope.gotoorglist=function(){
        console.log("orglist");
        $location.path('orglist');
    };

	 $scope.gotogo= function(){

        $location.path('go');
    };

    $scope.gotogoform=function(){
    	console.log("Goto events");
    	$location.path('goform');
    };

    $scope.gotodisdet=function(){
    	console.log("Goto news");
    	$location.path('disdet');
    };

    $scope.gotoequip=function(){
        console.log("Goto gallery");
        $location.path('equip');
    };


});