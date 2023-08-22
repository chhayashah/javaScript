const descripter = Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descripter)

// console.log(Math.PI)
// Math.PT=8
// console.log(Math.PI)

const chai ={
    name:"jinger",
    price:432,
    isAvailable:true
}
console.log(chai)
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,"name", {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));