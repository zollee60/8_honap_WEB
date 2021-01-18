const gameService = {
    solution: 0,

    generateRandom: () => {
        this.solution = Math.floor(Math.random() * Math.floor(101));
    },

    checkAnswer: (number) => {
        if(number > this.solution){
            return 1;
        } else if(number < this.solution){
            return -1;
        } else {
            return 0;
        }
    }
}

module.exports = gameService;