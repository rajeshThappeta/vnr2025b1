//API Req

function getPostsFromAPI1() {
    fetch('https://jsonplaceholder.typicode.com/posts') //returns a Promise
        .then(res => res.json()) //returns another promise
        .then(data => console.log(data))
        .catch(err => console.log(err))
}

//promiseObj.then().catch()
//async & await 
async function getPostsFromAPI2() {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts')
    let data = await res.json()
    console.log(data)
}

getPostsFromAPI2()

