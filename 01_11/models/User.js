class User{
    constructor(username, pw, email){
        this.username = username;
        this.pw = pw;
        this.email = email;
    }

    getUserName(){
        return this.username;
    }

    getPW(){
        return this.pw;
    }
}

module.exports = User;