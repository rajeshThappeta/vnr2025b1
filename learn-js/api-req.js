//API Req

function getPostsFromAPI(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
}


getPostsFromAPI()

console.log("first")