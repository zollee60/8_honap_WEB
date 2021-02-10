let charlist=[];

const charService = {
    save: (char) => {
        charlist.push({
            id: charlist.length+1,
            char: char
        });

    },

    getCharlist: () => charlist,

    delete: (id) => {
        charlist = charlist.filter((char) => {if(char.id !== id){return char}})
    },

    getChar :(id) =>{
        return charlist.find(char => char.id === id);
    }
}

module.exports = charService;