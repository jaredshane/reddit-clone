app.factory('votingFactory', function($http){
    return{
        voteUp : (key, data)=>{
            console.log("vote data", data);
            return $http
            .patch(`https://reddit-clone-b97a6.firebaseio.com/posts/${key}.json`, {"vote": data})
            .then(()=>{
                console.log("hey from the patch");
            })
        },
        voteDown : (key, data)=>{
            console.log("vote data", data);
            return $http
            .patch(`https://reddit-clone-b97a6.firebaseio.com/posts/${key}.json`, {"vote": data})
            .then(()=>{
                console.log("hey from the patch");
            })
        }
    }
})
