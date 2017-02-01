app.controller('LoginCtrl', function ($scope, authFactory, $location) {
  console.log('hey, this is the LoginCtrl')


  $scope.loginButton = function (e, p) {
    var email = e
    var password = p

    authFactory.login(email, password)
    .then(()=>{
      $location.url("/")
    })
  }  //end of $scope.loginButton

  $scope.registerButton = function (e, p) {

  var email = e
  var password = p


  authFactory.register(email, password)
    .then(()=>{
      //if user successfully registers, redirects to homepage
      $location.url("/")
    })

  } //registerButton

}) //end of controller
