const array=[0,1,2,3,4,5]
const myarray=["chhaya","shah"]

const myArray2=new Array(1,2,3,4,5,6)
console.log(myArray2[1])

// array methods


myarray.push(6)
myarray.push(7)
myarray.pop()
console.log(myarray)


array.unshift(9)
console.log(array)

array.shift()
console.log(array)

console.log(array.includes(9))
console.log(array.indexOf(9))
console.log(array.indexOf(3))

// join operation me bind v karta hai our string me convert kar deta hai

const newArr=array.join()
console.log(array)
console.log(newArr)
console.log(typeof newArr)



// slice and splice

console.log("A",array)

const arr=array.slice(1,3)

console.log(arr)

console.log("B",array)

const arr2=array.splice(1,3)
console.log("C",array)
console.log(arr2)



const marval=['chhaya','manish','manoj']
const dc=['aniruddh','kiran']
marval.push(dc)
console.log(marval)

console.log(marval[3][1]);

const all=marval.concat(dc)
console.log(all)

// spread operator
const all_heroes=[...marval,...dc]
console.log(all_heroes)


const anotherArr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_anotherArr=anotherArr.flat(Infinity)
console.log(real_anotherArr)


console.log(Array.isArray("chhaya"))
console.log(Array.from('chhaya'))
console.log(Array.from({name:"chhaya"}))//interview question

let s1=100
let s2=200
let s3=300

console.log(Array.of(s1,s2,s3))