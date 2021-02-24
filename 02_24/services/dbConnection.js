const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '46.101.185.21',
    user: 'szasz_edu',
    password: 'SzaszSQL2021',
    database: 'book_club'
});

module.exports = connection;