const mysql = require('mysql2');

// create the connection to database
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'auth_db'
});

conn.connect((err) => {
    if (err) throw err;
    console.log("Database Connected!");
})

module.exports = conn