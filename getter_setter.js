class user {
    constructor(email, password){
        this.email = email;
        this.password=password
    }
    get email() {
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }



    get password(){
        return `${this._password.toUpperCase()}chh`
    }
    set password(value){
        this._password = value
    }
}
    const chhaya = new user("chhaya@234","abc")
    console.log(chhaya.password);
    console.log(chhaya.email);


