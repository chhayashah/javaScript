// let myname="chhaya    "
// console.log(myname.length);
// console.log(myname.truelength)

let myHero=["thor","spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderMan:function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.chhaya=function(){
    console.log(`chhaya is present in all object`);
}
Array.prototype.heyChhaya=function(){
    console.log(`chhaya says hello`);
}


// heroPower.chhaya()
myHero.chhaya()
myHero.heyChhaya()


// inheritance
const a={
    name:"chai",
    email:"chhaya@123"
}


const teacher={
    makevideo:true
}
const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:'js Assignment',
    fulltime:true,
    __proto__:TeachingSupport
}
teacher.__proto__=a

//modern syntax

Object.setPrototypeOf(TeachingSupport,teacher)


let anotherusername="chaiourcode      "
String.prototype.trueLength=function(){
    console.log(`${this}`)
    console.log(`${this.name}`)
    console.log(`${this.trim().length}`)
}
anotherusername.trueLength()