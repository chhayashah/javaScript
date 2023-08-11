const temp=41
if(temp===41){
    console.log("less than 50");
}else{
    console.log("greater than 50")
}



// 
const score=200

if(score>100){
    let power='fly'
    console.log(`user power: ${power}`);
}
// console.log(`user power : ${power}`);



const userLoggedIn=true
const debitCard=true
const loggedInFormGoogle=false
const loggedInFormEmail=true


if(userLoggedIn && debitCard){
    console.log('Allow to buy course')
}

if(loggedInFormEmail || loggedInFormGoogle){
    console.log('user looged in')
}