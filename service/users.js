const maria = require("../config/database");

const getUserList = () => {
    return new Promise((resolve, reject) => {
        try {
            const sql = `select *
                         from users`;

            maria.getConnection((error, connection) => {
                connection.query(sql, (error, rows) => {
                    if (error) {
                        console.log(`message: ${error.message}`)
                        console.log(`sql: ${error.sql}`)
                        console.log(`code: ${error.code}`)
                        reject({
                            status: 500,
                            value: {success: false, message: "getUserList SQL Error"}
                        })
                    } else {
                        console.log('getUserList rows >>', rows)
                        resolve({
                            status: 200,
                            value: {success: true, data: rows}
                        })
                    }
                })
            })
        } catch (error) {
            console.log(`getUserList Function Error >> ${error}`)
            reject({
                status: 500,
                value: {success: false, message: error}
            })
        }
    })
}

module.exports = {
    getUserList
};