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

  $scope.registerButton = function (e, p, u) {

    var email = e;
    var password = p;
    var username = u;




    console.log(username)



    authFactory.register(email, password)
      .then((user)=>{
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            user.updateProfile({
              displayName: username
            }).then(function() {
              // Update successful.
              console.log('updated!')
              console.log("disaplyName", firebase.auth().currentUser.displayName)
            }, function(error) {
              // An error happened.
              console.log(error)
            });

  } else {
    // No user is signed in.
  }
});
        //if user successfully registers, redirects to homepage
        $location.url("/")
      })

  } //registerButton

  $scope.twitter = function () {
    var provider = new firebase.auth.TwitterAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
      // You can use these server side with your app's credentials to access the Twitter API.
      var token = result.credential.accessToken;
      var secret = result.credential.secret;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).then(function (){
      $location.url("/")
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });

  }

}) //end of controller
