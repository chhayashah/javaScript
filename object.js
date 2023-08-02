// const ob=new Object()//single terms object hai
const ob={}//non-single terms object hai
console.log(ob)

const tinder={}
tinder.id='101'
tinder.name='chhaya'
console.log(tinder)

const regular={
    email:'chhaya@gmail.com',
    fullname:{
        username:{
            firstname:'chhaya',
            lastname:'shah'
        }
    }
}
console.log(regular)
console.log(regular.fullname)
console.log(regular.fullname.username)
console.log(regular.fullname.username.firstname)


const obj1={1:'a',2:'b'}
const obj2={3:'a',4:'b'}
const obj3={5:'a',6:'b'}

// const obj4={obj1,obj2}
// const obj4=Object.assign({},obj1,obj2,obj3)
const obj4={...obj1,...obj2,...obj3}
console.log(obj4)

console.log(Object.keys(tinder))
console.log(Object.values(tinder))
console.log(Object.entries(tinder))

console.log(tinder.hasOwnProperty('isLogged'))


const course={
    name:'js',
    price:'999',
    instructor:'hitesh'
}

// course.instructor
const{instructor}=course
console.log(instructor)