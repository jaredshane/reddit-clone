app.controller('MainCtrl', function ($http, $scope, $location) {
  console.log('hey, this is the MainCtrl')

  $scope.getFirebase = () =>{
      $http.get('https://reddit-clone-b97a6.firebaseio.com/posts.json')
      .then((res)=>{
          console.log("res", res.data);
          $scope.data = res.data;
      })
  }
  $scope.getFirebase()
  //modal function
  $(document).ready(function(){
    $('.modal').modal();
  });
  // Create a root reference
  let storageRef = firebase.storage().ref();
  let fileList;

  // let fileList;

  console.log(storageRef.child('images'))

  let inputElement = document.getElementById('fileInput');

  inputElement.addEventListener("change", handleFiles, false);

  function handleFiles() {
    fileList = this.files;
    console.log("filelist[0]", fileList[0])
    storageRef.child("images/" + fileList[0].name).put(fileList[0])
        .then(function(snapshot) {
              console.log('Uploaded a file!')
              console.log("fileList", fileList);
                storageRef.child(`images/${fileList[0].name}`).getDownloadURL()
                .then(function(url) {
                var img = document.getElementById('myImg')
                img.src = url;
                console.log(url)
            }).catch(function (error){
            })
        }
   )} //end of handleFiles

   $scope.saveFirebase = (title,checkbox) => {

       console.log("checkbox", checkbox);
       let url = storageRef.child(`images/${fileList[0].name}`).getDownloadURL()
        .then((data)=>{
            const article = {
            'title' : title,
            'img': data,
            'upvote' : 0,
            'username' : 'dontCare',
            'tamboClass' : checkbox
            'username' : firebase.auth().currentUser.displayName
        }
        console.log("article", article);
           $http.post('https://reddit-clone-b97a6.firebaseio.com/posts.json', article)
           .then(()=>{
               console.log("HeyGirlHey");
               $scope.getFirebase()
           })
        })
   } //end of saveFirebase

  $scope.logoutofFirebase = function (e) {
    firebase.auth().signOut()
    $location.url("/login")
  }


}) //end of controller