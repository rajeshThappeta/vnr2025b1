//get users data
async function getUsers() {
    let res = await fetch('https://jsonplaceholder.typicode.com/users')
    let usersData = await res.json()
    printUsersInTable(usersData)
}


getUsers()


//to display usersData in  table body
let tbody = document.querySelector("tbody")

function printUsersInTable(usersData) {
    let tr;
    for (let userObj of usersData) {
        //create tr element
        tr = document.createElement('tr')
        tr.innerHTML = `<td>${userObj.id}</td>
            <td>${userObj.name}</td>
            <td>${userObj.username}</td>
            <td>${userObj.email}</td>`

        //append tr to tbody
        tbody.appendChild(tr)
    }
   

}


let test = document.querySelector(".test")

test.innerHTML = `<p>This is para</p> <h1>This is heading</h1>`