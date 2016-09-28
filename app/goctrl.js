app.controller('goCtrl',function($scope,$rootScope,$location,$http){
	console.log("goCtrl init");

	
		  $http.post('api/Dbhandler/gobe.php', {'option':'list_all'})
        .success(function(response)
        {
            $scope.go_list=response.records;
            console.log(response.records);
        })
        .error(function(response)
        {
            console.log('error');
        });
 


	$scope.gotogoip=function(){
		$location.path('goip');
	};

	$scope.gotocreatenewgo=function(){
		$location.path('goip');
	};

});


app.controller('goipCtrl',function($scope,$rootScope,$location,$http){
	$scope.go={};
	$scope.go.uid=$rootScope.uid;
	$scope.go.option="post";

	$scope.post=function(){
        console.log("clicked");
		  $http.post('api/Dbhandler/gobe.php', $scope.go)
        .success(function(response)
        {
            console.log(response.status);
            if (response.status=="success") {
                $location.path('go');
            }

        })
        .error(function(response)
        {
            console.log('error');
        });
	};
});
