const User = require("../models/User");

const userRepo = [
    new User("jani69","villámgyors", "forrojani69@indamail.hu",42),
    new User("laci50","jelszó123", "kovacs_laci@gmail.com",21),
    new User("xXxEmoGirlxXx","azéletszar", "depression@yahoo.com",15),
    new User("JSscriptKiddie","IHackedTheMainframe", "nagyontitkos@sajátdomainemvanmertolyanmenővagyok.hu",12)
];

module.exports = userRepo;