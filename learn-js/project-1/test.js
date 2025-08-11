//read para
let para = document.querySelector('p')
let incBtn = document.querySelector('#inc')
let decBtn = document.querySelector('#dec')

let counter = 0;

para.textContent = counter;

incBtn.addEventListener('click', () => {

    counter = counter + 1
    para.textContent = counter;
})

decBtn.addEventListener('click', () => {

    counter = counter - 1
    para.textContent = counter;
})