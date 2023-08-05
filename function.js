function addTwoNumber(num1,num2){
    console.log(num1+num2);
}
const result=addTwoNumber(9,6)
console.log(result)


addTwoNumber(3,'4')
addTwoNumber(3,'a')
addTwoNumber(3,null)
addTwoNumber()


// return
function add(a,b){
    // let res=a+b;
    // console.log('chhaya')
    // return result
    // console.log('shah')
    return a+b
}
const res=add(4,5)
console.log(res)

function calculateCardPrice(...num4){
    return num4
}
console.log(calculateCardPrice(300,5000,600))


function calculateCardPrice1(val,val2,...num5){
    return num5
}
console.log(calculateCardPrice1(300,5000,600,400,800))


//
const user={
    usernames:"manish",
    price:78
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.usernames} and price is ${anyobject.price} and ${anyobject.prices}`)
}
handleObject(user)


const myNewArray=[200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondaryValue(myNewArray));
console.log(returnSecondValue([200,300,40,500]))


