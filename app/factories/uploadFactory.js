app.factory('uploadFactory',function($http, $location,$q){

    return{
        getFirebase : () =>{
            return $http
            .get('https://reddit-clone-b97a6.firebaseio.com/posts.json')
            .then((res)=>{
                console.log("from fire res", res);
                let filtered = [];
                for (let i in res.data) {
                    let item = res.data[i];
                    item.firebase = i;
                    filtered.push(item);
                }
                return filtered;

            })
        },
    //     return saveFirebase : (title, checkbox) => {
       //
    //         console.log("checkbox", checkbox);
    //         let url = storageRef.child(`images/${fileList[0].name}`).getDownloadURL()
    //          .then((data)=>{
    //              const article = {
    //              'title' : title,
    //              'img': data,
    //              'vote' : 0,
    //              'username' : 'dontCare',
    //              'tamboClass' : checkbox,
    //              'username' : firebase.auth().currentUser.displayName
    //          },
    //          console.log("article", article);
    //             $http.post('https://reddit-clone-b97a6.firebaseio.com/posts.json', article)
    //             .then(()=>{
    //                 console.log("HeyGirlHey");
    //                 //$scope.getFirebase()
    //             })
    //          })
    //     } //end of saveFirebase
       //
       logoutofFirebase : function (e) {
           return $q.resolve(firebase.auth().signOut())
           .then(()=>{
            $location.url('/login')
        })
       }
    }
})
