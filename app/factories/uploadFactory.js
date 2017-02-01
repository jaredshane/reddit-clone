app.factory('uploadFactory',function(){
    let storageRef = firebase.storage().ref();

    console.log(storageRef.child('images'))

    let inputElement = document.getElementById('fileInput');

    inputElement.addEventListener("change", handleFiles, false);
    let something = img.url

    return{

        handleFiles : (img) => {
            let fileList = this.files;
            console.log("filelist[0]", fileList[0])
            storageRef.child("images/" + fileList[0].name).put(fileList[0])
            .then(function(snapshot) {
            console.log('Uploaded a file!')
            console.log(snapshot)
            console.log(storageRef.child('images'))
         })
        }

    }

    console.log(storageRef.child('images'))
    // storageRef.child('something').getDownloadURL()
    // .then(function(url) {
    // var img = document.getElementById('myImg')
    // img.src = url;
    // }).catch(function (error) {
    //
    // })
})
