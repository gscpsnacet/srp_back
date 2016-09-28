app.controller('goformCtrl',function($scope,$rootScope,$location,$http){
	console.log("goformCtrl init");

	
		  $http.post('api/Dbhandler/goformbe.php', {'option':'list_all'})
        .success(function(response)
        {
            $scope.goform_list=response.records;
            console.log(response.records);
        })
        .error(function(response)
        {
            console.log('error');
        });
 


	$scope.gotogoformip=function(){
		$location.path('goformip');
    };

    $scope.gotocreatenewgoform=function(){
        $location.path('goformip');
        console.log('clicked');
	};

});


app.controller('goformipCtrl',function($scope,$rootScope,$location,$http){
	$scope.goform={};
	$scope.goform.uid=$rootScope.uid;
	$scope.goform.option="post";

	$scope.post=function(){
		  $http.post('api/Dbhandler/goformbe.php', $scope.goform)
        .success(function(response)
        {
            concsole.log(response.status);
            if (response.status=="success") {
                $location.path('goform');
            }

        })
        .error(function(response)
        {
            console.log('error');
        });
	};
});
