for (let index = 0; index < 10; index++) {
    const element = index;
    if(element==5){
        console.log('5 is a best no.')
    }
    console.log(element)
    
}


// 

for(let i = 0; i <= 10; i++){
    console.log(`outer loop value: ${i}`)
    for(let j = 0; j<=10; j++){
        // console.log(`inner loop value ${j} and outer loop ${i}`)
        console.log(i + '*' + j + '=' + i*j);
    }
}

let myArray = ['fish','manogo','animal'];
console.log(myArray.length);
console.log(myArray);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
    
}



// break and continue

for (let ind = 0;ind < 20;ind++) {
    if(ind == 5){
        console.log('detected value 5');
        break;
    }
    console.log(`value ind is ${ind}`)
    
}

for (let inda = 0;inda < 20;inda++) {
    if(inda == 5){
        console.log('detected value 5');
        continue;
    }
    console.log(`value inda is ${inda}`)
    
}