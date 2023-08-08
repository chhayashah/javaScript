// this refer to cureent content/ owener object

const user={
    name:'manish',
    price:999,

    welcomeMessage:function(){
        console.log(`${this.name} , welcome to website`);
        console.log(this)
    }
}
user.welcomeMessage
user.welcomeMessage()
user.name='ani'
user.welcomeMessage()

console.log(this)//{} node pe this curly braces return karta hai
// our broswer pe window object return karta hai



function one(){

    let username='ram'
    console.log(this.username)// function ke ander this kaam nhi karta
    // console.log(this);// function ke andar this ki value print karte hai to bhut sari value return karta hai
}
one()



const two=function(){
     const name='manish'
     console.log(this.name)
}
two()


// arrow function
const three = () => {
    let names='manoj'
    console.log(this)
}
three()


// 
const add = (num1,num2) => {
    return num1 + num2 // explicit return jb ham return keyword likhte hai to explicit return hota
}
console.log(add(5,6))


// implicit return jb return keyword nhi likhte

const addOne = (num3,num4) => num3+num4
addOne(4,5)

const addTne = (num5,num6) => num5+num6
addOne()

