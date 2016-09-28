var app = angular.module('myApp', ['ngRoute', 'ngAnimate', 'toaster','naif.base64']);

app.config(['$routeProvider',
  function ($routeProvider) {

    //divide the layouts into different folders and define the variables for oath

    var pathmain="partials/";
    var pathip="partials/iplayout/";
        $routeProvider.
        when('/login', {
            title: 'Login',
            templateUrl: pathmain+'login.html',
            controller: 'authCtrl'
        })
            .when('/dashboard', {
                title: 'Dashboard',
                templateUrl: 'partials/dashboard.html',
                controller: 'hostCtrl'
            })
            .when('/logout', {
                title: 'Logout',
                templateUrl: 'partials/login.html',
                controller: 'logoutCtrl'
            })
            .when('/signup', {
                title: 'Signup',
                templateUrl: 'partials/signup.html',
                controller: 'authCtrl'
            })
            .when('/feed', {
                title: 'Feed',
                templateUrl: 'partials/feed.html',
                controller: 'feedCtrl'
            })
            .when('/feedip', {
                title: 'feedIp',
                templateUrl: pathip+'feedip.html',
                controller: 'feedipCtrl'
            })

            .when('/go', {
                title: 'News',
                templateUrl: 'partials/go.html',
                controller: 'goCtrl'
            })
            .when('/goip', {
                title: 'goIp',
                templateUrl: pathip+'/goip.html',
                controller: 'goipCtrl'
            })
            .when('/goform', {
                title: 'Goform',
                templateUrl: 'partials/goform.html',
                controller: 'goCtrl'
            })
            .when('/goformip', {
                title: 'GoformIp',
                templateUrl: pathip+'/goformip.html',
                controller: 'goformipCtrl'
            })
            .when('/equip', {
                title: 'News',
                templateUrl: 'partials/equip.html',
                controller: 'equipCtrl'
            })
            .when('/equipip', {
                title: 'NewsIp',
                templateUrl: pathip+'/equipip.html',
                controller: 'equipipCtrl'
            })
            .when('/orglist', {
                title: 'Gallery',
                templateUrl: 'partials/orglist.html',
                controller: 'orglistCtrl'
            })
            .when('/orglistip', {
                title: 'Galleryip',
                templateUrl: pathip+'orglistip.html',
                controller: 'orglistipCtrl'
            })
            .when('/disdet', {
                title: 'Disability details',
                templateUrl: 'partials/disdet.html',
                controller: 'disdetCtrl'
            })
            .when('/disdetip', {
                title: 'Disability Details',
                templateUrl: pathip+'disdetip.html',
                controller: 'disdetipCtrl'
            })
            .when('/', {
                title: 'Login',
                templateUrl: 'partials/login.html',
                controller: 'authCtrl',
                role: '0'
            })
            .otherwise({
                redirectTo: '/login'
            });
  }])
    .run(function ($rootScope, $location, Data) {
        $rootScope.newsUrl="api/Dbhandler/newsbe.php";
        $rootScope.eventUrl="api/Dbhandler/eventbe.php";
        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            $rootScope.authenticated = false;
             var nextUrl = next.$$route.originalPath;
            Data.get('session').then(function (results) {
                if (results.uid) {
                    $rootScope.authenticated = true;
                    $rootScope.uid = results.uid;
                    $rootScope.name = results.name;
                    $rootScope.email = results.email;
                    $location.path(nextUrl);

                } else {
                    if (nextUrl == '/signup' ) {
                        $location.path('/signup');
                    }else{
                        $location.path('/login');
                    }
                }
            });
        });
    })
    // We can write our own fileUpload service to reuse it in the controller
