<!DOCTYPE html>
<html lang="en" ng-app="myApp">

  <head>
    <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1">
          <title>Content Manipulator</title>
          <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
          <!-- Bootstrap -->
          <link href="css/bootstrap.min.css" rel="stylesheet">
          <script src="js/jquery.min.js"></script>
          <script src="js/bootstrap.min.js"></script>

          <link href="css/toaster.css" rel="stylesheet">
          <style type="text/css">
          .breadcrumbs{
            
            font-size: 150%;
          }
          </style>
              </head>

  <body ng-cloak="">
    
    <div >
      <div  style="padding:0px">
        <div style="text-align:center">
          <div style="float:center;"><a href='#/dashboard' style='display: block'>
            
            <!--<img    src='images/logo.png' width="70%" height="5%" style=""/>-->
            <h2> SRP</h2>
            
            </a></div>
          
        </div>
        

        <div data-ng-view=""  class="slide-animation"  style="padding:0px"></div>

      </div>
    </body>
  <toaster-container toaster-options="{'time-out': 3000}"></toaster-container>
  <!-- Libs -->
  <script src="js/angular.min.js"></script>
  <script src="js/angular-route.min.js"></script>
  <script src="js/angular-animate.min.js" ></script>
  <script src="js/toaster.js"></script>
  <script src="app/app.js"></script>
  <script src="app/data.js"></script>
  <script src="app/directives.js"></script>
  <script src="app/authCtrl.js"></script>
  <script src="app/hostCtrl.js"></script>
  <script src="app/GeneralCtrl.js"></script>
  <script src="app/feedctrl.js"></script>
  <script src="app/equipctrl.js"></script>
  <script src="app/goformctrl.js"></script>
  <script src="app/galleryctrl.js"></script>

  <script src="app/newsCtrl.js"></script>
    <script src="app/carouselctrl.js"></script>

  <script src="js/angular-base64.js"></script>
    <script type="text/javascript" src="js/angular-base64-upload.js"></script>



</html>

