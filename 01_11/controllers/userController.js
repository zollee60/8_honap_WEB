const userService = require("../services/userService");
const express = require('express');
const router = express.Router();

router.get("/:id", (req, res) => {
    const id = req.params.id;
    const user = userService.getUserByID(id);
    if(user !== null){
        res.render("userProfile", { title: `${user.getUserName()} oldala`,
                                    welcomeMessage: `Hello ${user.getUserName()}!`,
                                    username: user.getUserName(),
                                    pw: user.getPW(),
                                    email: user.email }
        )
    } else {
        res.send("Nincs ilyen user!")
    }
    
});

module.exports = router;
