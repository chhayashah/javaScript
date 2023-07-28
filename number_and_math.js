const score=400
console.log(score);

const balance=new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const number=345.65
console.log(number.toPrecision(3))

const a=3454.65;
console.log(a.toPrecision(3))

const h=1000000;
console.log(h.toLocaleString())

// math--------

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.6))
console.log(Math.floor(4.6))
console.log(Math.random());
console.log((Math.random()*10) + 1);

const min =10
const max=20
console.log(Math.floor(Math.random() * (max-min-1))+min)