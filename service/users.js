const maria = require("../config/database");

const getUserList = async () => {
    return new Promise((resolve, reject) => {
        try {
            const sql = `SELECT *
                         FROM test_data`;

            maria.getConnection((error, connection) => {
                connection.query(sql, (error, rows) => {
                    if (error) {
                        console.log(`getUserList SQL Error >> ${error}`)
                        console.log(`message: ${error.message}`)
                        console.log(`sql: ${error.sql}`)
                        console.log(`code: ${error.code}`)
                        reject("getUserList SQL Error")
                    } else {
                        console.log('getUserList rows >>', rows)
                        resolve(rows)
                    }
                })
                connection.release(); // Connectino Pool 반환
            })
        } catch (error) {
            console.log(`getUserList Function Error >> ${error}`)
            reject(error)
        }
    })
}


module.exports = {
    getUserList
};