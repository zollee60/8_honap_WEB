const getConnection = require("./dbConnection");
const Book = require("../models/Book");

const bookService = {

    save: async (book) => {
        const dbConn = await getConnection();
        const [rows, fields] = await dbConn.execute(`INSERT INTO books (title,author,published_at,finished) VALUES (?,?,?,?)`,
            [book.title,book.author,book.published_at,book.finished]
        );
        const newBook = new Book(rows.insertId, book.title,book.author,book.published_at,book.finished)
        return newBook;
    },

    getBooklist: async () => {
        const dbConn = await getConnection();
        const [rows, fields] = await dbConn.execute('SELECT * FROM books');

        const books = rows.map(row => new Book(row.id,row.title,row.author,row.published_at,row.finished))
        return books;
    },

    delete: async (id) => {
        const dbConn = await getConnection();
        const [rows, fields] = await dbConn.execute('DELETE FROM books WHERE id = ?',[id]);
    },

    getBook : async (id) =>{
        const dbConn = await getConnection();
        const [rows, fields] = await dbConn.execute('SELECT * FROM books WHERE id = ?',[id]);

        if(rows.length === 1){
            const book = new Book(rows[0].id,rows[0].title,rows[0].author,rows[0].published_at,rows[0].finished);
            return book;
        } else{
            return 0;
        }
    },

    update: async (id,newBookInfo) => {
        const dbConn = await getConnection();
        let sql = 'UPDATE books SET ';

        for(let key in newBookInfo){
            sql += `${key} = ?, `;
        }
        sql = sql.substring(0,sql.length-2);

        sql += ` WHERE id = ${id}`;
        
        const [rows, fields] = await dbConn.execute(sql,Object.values(newBookInfo));

        if(rows.affectedRows === 1){
            return true;
        } else{
            return false;
        }

    }
}

module.exports = bookService;