app.controller('equipCtrl',function($scope,$rootScope,$location,$http){
	console.log("equipCtrl init");

	
		  $http.post('api/Dbhandler/equipbe.php', {'option':'list_all'})
        .success(function(response)
        {
            $scope.equip_list=response.records;
            console.log(response.records);
        })
        .error(function(response)
        {
            console.log('error');
        });
 


	$scope.gotoequipip=function(){
		$location.path('equipip');
	};

	$scope.gotocreatenewequip=function(){
		$location.path('equipip');
	};

});


app.controller('equipipCtrl',function($scope,$rootScope,$location,$http){
	$scope.equip={};
	$scope.equip.uid=$rootScope.uid;
	$scope.equip.option="post";

	$scope.post=function(){
        console.log("clicked");
		  $http.post('api/Dbhandler/equipbe.php', $scope.equip)
        .success(function(response)
        {
            console.log(response.status);
            if (response.status=="success") {
                $location.path('equip');
            }

        })
        .error(function(response)
        {
            console.log('error');
        });
	};
});
