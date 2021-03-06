app.controller('authCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data) {
    //initially set those objects to null to avoid undefined error

    $scope.login = {};
    $scope.signup = {};
   // console.log(email);
    $scope.doLogin = function (student) {
        Data.post('login', {
            student: student
        }).then(function (results) {
            Data.toast(results);
            if (results.status == "success") {
                $location.path('dashboard');
            }
        });
    };
    $scope.signup = {email:'',password:'',name:''};
    $scope.signUp = function (student) {
        Data.post('signUp', {
            student: student
        }).then(function (results) {
            Data.toast(results);
            console.log('New user created');
            if(results.status=="success"){
                $scope.signup = {email:'',password:'',name:''};
                 $location.path('signup');
            }
           
        });
    };
    $scope.logout = function () {
        Data.get('logout').then(function (results) {
            Data.toast(results);
            console.log("logout called");
            $location.path('login');
        });
    };

    


});

