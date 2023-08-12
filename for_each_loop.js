const coding=['js','python',"java","cpp"];

coding.forEach( function (item) {
    console.log(item);
})

coding.forEach( (val) => {
    console.log(val)
})

// function printMe(value){
//     console.log(value);
// }
// coding.forEach(printMe)


coding.forEach ((item, index, arr) => {
    console.log(item, index, arr);
})


const myCoding=[
    {
        name:'javascript',
        file:'js'
    },
    {
        name:'java',
        file:'java'
    },
    {
        name:'python',
        file:'py'
    }
]
myCoding.forEach( (item) => {
    console.log(item.file);
})