let arr=[2,3,4,5,6,7,8];
for (const num of arr) {
    console.log(num);
}


const greetings="hello world!";
for (const greet of greetings) {
    console.log(greet);
}



// const myObject={
//     js:'javascript',
//     cpp:'c++',
//     rb:'ruby',
//     swift:'swift by apple'
// }
// for (const key of myObject) {
//     console.log(key);
// }



// array me for of loop use karenge
// object me for in loop use karenge

const myObject1={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}
for (const key1 in myObject1) {
    // console.log(key1);
    console.log(myObject1[key1]);
}