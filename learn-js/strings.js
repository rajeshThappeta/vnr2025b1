//String
let wish='good evening to all'

//Operations
let test='abcd' //['a','b','c','d']

console.log(wish.length)

//get substring
console.log(wish.slice(1,5)) //ood 
console.log(wish.substring(1,5))

console.log(wish.replace('o','x'))
console.log(wish.replace('good','bad'))
console.log(wish.replaceAll('o','x'))

//change case
console.log(wish.toUpperCase())


let str1='abc'
let str2='xyz'
console.log(str1+str2) //abcxyz
console.log(str1.concat(str2))

//return char at specific index
console.log(wish.charAt(5))


//split wish string
console.log(wish.split(''))

let s1='ab'
let s2='cd'

console.log(s2.localeCompare(s2))