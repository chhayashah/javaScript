// global scope ke pollution se kayi baar problem hoti hai us global scope ke variable ya pollution ko hatane ke liye IIFE ka use karte hai
(function one(){
    console.log('hello')
})();

// iife function to terminate karne ke liye semicolon lagate hai


// arrow function using iife

(  () => {

    console.log('hey')
})();


// 
(  (name) => {

    console.log(` hey ${name}`)
})('chhaya')