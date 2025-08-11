//get form element
let form = document.querySelector('form')
//read inputs
let input1 = document.querySelector("#username")
let input2 = document.querySelector("#email")
//read paras
let un=document.querySelector(".username")
let em=document.querySelector(".email")

//add event listenere to form
form.addEventListener('submit', (event) => {
    //stop reloading of page when form submitted
    event.preventDefault()

    //read values of input elements
    let username=input1.value;
    let email=input2.value;
    
    //print on web page
    un.textContent=username
    em.textContent=email

    //claer the fields after form submit
    form.reset()

})