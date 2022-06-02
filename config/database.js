const mysql = require('mysql');

let connection = {
    host: process.env.MariaDB_HOST,
    port: process.env.MariaDB_PORT,
    user: process.env.MariaDB_USER,
    password: process.env.MariaDB_PASS,
    database: process.env.MariaDB_DATABASE,
    dateStrings: "date",
    multipleStatements: true,
    connectionLimit: 30,
}

module.exports = mysql.createPool(connection);