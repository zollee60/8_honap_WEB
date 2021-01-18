class User{
    constructor(username, pw, email, age){
        this.username = username;
        this.pw = pw;
        this.email = email;
        this.age = age;
    }

    getUserName(){
        return this.username;
    }

    getPW(){
        return this.pw;
    }

    getAge(){
        return this.age;
    }
}

module.exports = User;