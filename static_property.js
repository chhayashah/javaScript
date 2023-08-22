class user {
    constructor(username){
        this.username= username
    }
    logMe(){
        console.log(`username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const chhaya = new user("chhaya")
// console.log(chhaya.createId())

class Teacher extends user {
    constructor(username, email){
        super(username)
        this.email=email
    }
}

const iphone = new Teacher("iphone", "chh@234")
iphone.logMe()