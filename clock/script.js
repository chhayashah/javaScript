const clock=document.getElementById('clock')

let date=new Date()
// console.log(date.toLocaleTimeString());

clock.innerHTML =  date.toLocaleTimeString();

setInterval(function(){


}, 1000)