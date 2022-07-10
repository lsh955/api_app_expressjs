const mysql = require('mysql');

const logFormatter = require("../module/logs");

const pool = mysql.createPool({
    host: process.env.MariaDB_HOST,
    port: process.env.MariaDB_PORT,
    user: process.env.MariaDB_USER,
    password: process.env.MariaDB_PASS,
    database: process.env.MariaDB_DATABASE,
    dateStrings: "date",
    multipleStatements: true,
    connectionLimit: 30,
})

const getDbByConnection = (sql, insertData) => {
    return new Promise(async (resolve, reject) => {
        try {
            await pool.getConnection((error, connection) => {
                connection.query(sql, insertData, (error, rows) => {
                    if (error) {
                        logFormatter.logs.error(`SQL Error >> ${error}`)
                        logFormatter.logs.error(`message: ${error.message}`)
                        logFormatter.logs.error(`sql: ${error.sql}`)
                        logFormatter.logs.error(`code: ${error.code}`)
                        reject("SQL Error")
                    } else {
                        logFormatter.logs.info(`DB Connection Rows >> ${JSON.stringify(rows)}`)
                        resolve(rows)
                    }
                })
                connection.release();   // Connectino Pool 반환
            })
        } catch (error) {
            logFormatter.logs.error(`DB Connection Error >> ${error}`)
            reject(error)
        }
    })
}

module.exports = {
    getDbByConnection
};