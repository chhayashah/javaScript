const promiseOne=new Promise(function(resolve,reject){
    // do an async task
    // db calls, cryptography,network

    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log('promise consumed');
})



// 2nd promise
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

// 3rd promise
const promiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "chai", email: "@123"})
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user);
})


// 4th promise
const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"chhaya",password:"132"})
        }else{
            reject('Error:Something went wrong')
        }
    },1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("the promise is either resolve or rejected"));


// promise 5

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"chh",password:"123"})
        }else{
            reject('error: js went wrong')
        }
    },1000);
});
async function consumePromiseFive(){
    try{ 
    const response=await promiseFive
    console.log(response);
    } catch(error) {
        console.log(error);
    }
}
consumePromiseFive()


// 
async function getAllUsers(){
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
        const data=await response.json()
        console.log(data);
    }catch(error){
        console.log("E:", error);
    }
}

getAllUsers();