const dbConn = require("./dbConnection");

let booklist=[];

const bookService = {
    save: (book) => {
        dbConn.connect();
        dbConn.query(`INSERT INTO books (title,author,published_at,finished) VALUES (?,?,?,?)`,
            [book.title,book.author,book.published_at,book.finished],
            (error, results, fields) => {
                console.log(results);
            }
        )

        booklist.push({
            id: booklist.length+1,
            author: book.author,
            title: book.title,
            published_at: book.published_at,
            finished: book.finished
        });
        return booklist.length+1;
    },

    getBooklist: () => booklist,

    delete: (id) => {
        booklist = booklist.filter((char) => {if(char.id !== id){return char}});
        for(let i = 0; i < booklist.length; i++){
            booklist[i].id = i+1;
        }
    },

    getBook :(id) =>{
        return booklist.find(char => char.id === id);
    },

    update: (id,newBookInfo) => {
        let updated = false;
        for(let i = 0; i < booklist.length; i++){
            if(booklist[i].id === id){
                for(let key in newBookInfo){
                    console.log(key);
                    if(booklist[i].hasOwnProperty(key)){
                        booklist[i][key] = newBookInfo[key];
                    }
                }
                updated = true;
            }
        }
        return updated;
    }
}

module.exports = bookService;