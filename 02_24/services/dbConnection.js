const mysql = require('mysql2/promise');

const getConnection = async () => {
    const connection = await mysql.createConnection({
        host: '46.101.185.21',
        user: 'szasz_edu',
        password: 'SzaszSQL2021',
        database: 'book_club'
    });

    return connection;
}



module.exports = getConnection;