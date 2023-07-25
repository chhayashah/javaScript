const name="hitesh"
const age=20;

console.log(`hello my name is ${name} and my age is ${age}`)


const gameName=new String("manishShah")

console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLowerCase)
console.log(gameName.toUpperCase)
console.log(gameName.charAt(6))
console.log(gameName.indexOf('S'))

const newString=gameName.substring(0,4)
console.log(newString)

const anotherString=gameName.slice(-8,4)
console.log(anotherString)

const newS ="         kiran      "
console.log(newS)
console.log(newS.trim)

const url = "https://chhaya.com/chhya%3455shah"
console.log(url.replace("%34",'-'))

console.log(url.includes('ki'))
