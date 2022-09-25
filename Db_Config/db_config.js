const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'friends_book'
});

module.exports = connection;
