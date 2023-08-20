// object literal
const user={
    username:"chhaya",
    loginCount:8,
    signedIn:true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`username: ${this.username}`);
        console.log(this);
    }
}

console.log(user.username)
console.log(user.getUserDetails());
console.log(this);




// 
function UserOne(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greeting=function(){
        console.log(`welcome ${this.username}`);
    }

    return this;
}

const usertwo= new UserOne("kiran",12,true)
const userThree=new UserOne("manoj",11,false)

console.log(userThree)
console.log(usertwo.constructor())



// function is function as well object also
function multiply(num){
    return num*5;
}
multiply.power=2;
console.log(multiply(4))
console.log(multiply.power)
console.log(multiply.prototype)


function createUser(username,score){
    this.username=username
    this.score=score
}

createUser.prototype.increment=function(){
    this.score++
}

createUser.prototype.printMe= function(){
    console.log(`score is ${this.score}`);
}

const chai=new createUser("chai",23)
const tea=new createUser("tea",24)

chai.printMe()