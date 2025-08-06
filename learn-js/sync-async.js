// Three persons in a reastaurant odered 3 items
console.log("3 persons reached restaurant")

//person-1 ordered biryani which takes 5mins time to prepare
console.log("Person-1 ordered biryani")
setTimeout(() => {
    console.log("Person-1 received biryani")
}, 10000);

//person-2 ordered soup which takes 3mins time to prepare
console.log("Person-2 ordered soup")
setTimeout(() => {
    console.log("Person-2 received soup")
}, 7000);

//person-3 ordered water bottle which takes 1min time to prepare
console.log("Person-3 ordered water bottle")
setTimeout(() => {
    console.log("Person-3 received water bottle")
}, 4000);
