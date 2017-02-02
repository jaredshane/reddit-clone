const app = angular.module('redditApp', ['ngRoute'])

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBM8Q6ImvtSTC8BDg2EkXNdA5eR-03nItw",
  authDomain: "reddit-clone-b97a6.firebaseapp.com",
  databaseURL: "https://reddit-clone-b97a6.firebaseio.com",
  storageBucket: "reddit-clone-b97a6.appspot.com",
  messagingSenderId: "515019203543"
});

app.config(($routeProvider, $locationProvider) => {
  $locationProvider.hashPrefix('')

  const showHideLogout = {
  showHideLogout: function() {
     const authReady = firebase.auth().onAuthStateChanged(user => {
       authReady()
         if (!user) {
           $('.logoutButton').addClass('ng-hide')
           $('.loginButton').removeClass('ng-hide')
           $('.newPost').addClass('ng-hide')
         } else if (user) {
           $('.logoutButton').removeClass('ng-hide')
           $('.loginButton').addClass("ng-hide")
           $('.newPost').removeClass('ng-hide')
         }

       }) //authReady

    }
  } //showHideLogout

  $routeProvider
    .when('/', {
      controller: 'MainCtrl',
      templateUrl: 'partials/main.html',
      resolve: showHideLogout
    })
    .when('/login', {
      controller: 'LoginCtrl',
      templateUrl: 'partials/login.html',
      resolve: showHideLogout
    })

})
