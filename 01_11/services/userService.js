const userRepo = require("../repositories/UserRepo");

const userService = {
    checkCredentials: (username, pw) => {
        const user = userRepo.find(user => user.getUserName() === username);
        if(user !== undefined){
            if(user.getPW() === pw){
                return true;
            } else{
                return false;
            }
        } else{
            return false;
        }
    },
    
    getUserByID: (id) => {
        if(id < userRepo.length){
            return userRepo[id-1];
        } else{
            return null;
        }
    }
}

module.exports = userService;