function outside() {
    let a = 10;
    return function inside() {

        let b = 20;
        return a + b;
    };
}





let result = outside()
 console.log(result())// 30

 //Closure = inside(a function) + outside data(a)