const userService = require("../services/userService");
const express = require('express');
const router = express.Router();

router.get("/get/:id", (req, res) => {
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
        res.sendStatus(404);
        //res.send("Nincs ilyen user!")
    }
});

router.get("/age", (req, res) => {
    const avgAge = userService.getAvgAge();
    res.render("avgAge", {
        title: "Átlag életkor",
        avgAgeMessage: `A userek átlag életkora: ${avgAge}`
    });
});

module.exports = router;
