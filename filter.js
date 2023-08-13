const nums=[1,2,3,4,5,6,7,8,9,10]
// const mynums=nums.filter((num) => {
//     return num >4;
// })


const mynums=[]
nums.forEach((num) => {
    if(num>4){
        mynums.push(num)
    }
})
console.log(mynums)

const books=[
    {title:'Book One',genre:'Friction',publish:1981,edition:2004},
    {title:'Book two',genre:'history',publish:1992,edition:2008},
    {title:'Book three',genre:'Friction',publish:1893,edition:1994},
    {title:'Book four',genre:'non-Friction',publish:2001,edition:1984},
    {title:'Book five',genre:'Friction',publish:1981,edition:1988},
    {title:'Book six',genre:'science',publish:2003,edition:2009},
    {title:'Book seven',genre:'Friction',publish:1999,edition:1987},
    {title:'Book eight',genre:'Friction',publish:1987,edition:1986}
];
let userBooks=books.filter( (bk) => bk.genre === 'history');
 userBooks=books.filter( (bk) => {return bk.publish >= 1995})

console.log(userBooks);