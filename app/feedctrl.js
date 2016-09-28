app.controller('feedCtrl',function($scope,$rootScope,$location,$http){
	console.log("feedCtrl init");

	
		  $http.post('api/Dbhandler/feedbe.php', {'option':'list_all'})
        .success(function(response)
        {
            $scope.feed_list=response.records;
            console.log(response.records);
        })
        .error(function(response)
        {
            console.log('error');
        });
 


	$scope.gotofeedip=function(){
		$location.path('feedip');
	};

	$scope.gotocreatenewfeed=function(){
		$location.path('feedip');
	};

});


app.controller('feedipCtrl',function($scope,$rootScope,$location,$http){
	$scope.feed={};
	$scope.feed.uid=$rootScope.uid;
	$scope.feed.option="post";

	$scope.post=function(){
		  $http.post('api/Dbhandler/feedbe.php', $scope.feed)
        .success(function(response)
        {
            concsole.log(response.status);

        })
        .error(function(response)
        {
            console.log('error');
        });
	};
});
