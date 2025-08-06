// I WILL CALL YOU AFTER 5 MINS

let futureCondition=false;

//Create a Promise object
const callPromise = new Promise((fulfilled, rejected) => {

    setTimeout(() => {
        if (futureCondition === true) {
            fulfilled('Hello frnd..')
        } else {
            rejected("Sorry frnd..")
        }
    }, 5000);
})



//Consume that Promise
callPromise
.then((msg)=>console.log("Promise is fulfilled :",msg))
.catch((errMsg)=>console.log("Promise is rejected :",errMsg))


console.log("first")