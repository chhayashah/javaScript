const email='chh@12.gmail';
if(email){
    console.log('got an email');
}
else{
    console.log('not got a email');
}

// falsy values
// false,0,-0,BigInt 0n, "", null, undefined,NaN


// truthy values
// "0",'false',' ',[],{},function(){}

if(email.length === 0){
    console.log("Array is empty");
}

const emptyobj = {}

if(Object.keys(emptyobj).length === 0) {
    console.log("object is empty");
}


// Nullish Coalescing operator (??): null undefined

let val1;
val1 = 5 ?? 10;

console.log(val1)

let val2;
val2 = null ?? 10;
console.log(val2)

let val3;
val3= undefined ?? 10;
console.log(val3)
