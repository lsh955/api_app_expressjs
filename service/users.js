const maria = require("../config/database");

/**
 * 유저정보 추가하기
 *
 * @param name
 * @param address
 * @param date
 * @returns {Promise<unknown>}
 * @constructor
 */
const UserByAdd = (name, address, date) => {
    return new Promise((resolve, reject) => {
        try {
            const sql = ``;

            maria.getConnection((error, connection) => {
                connection.query(sql, (error, rows) => {
                    if (error) {
                        console.log(`UserByAdd SQL Error >> ${error}`)
                        console.log(`message: ${error.message}`)
                        console.log(`sql: ${error.sql}`)
                        console.log(`code: ${error.code}`)
                        reject("UserByAdd SQL Error")
                    } else {
                        console.log('UserByAdd rows >>', rows)
                        resolve(rows)
                    }
                })
                connection.release();
            })
        } catch (error) {
            console.log(`UserByAdd Function Error >> ${error}`)
            reject(error)
        }
    })
}

/**
 * 유저정보 불러오기
 *
 * @returns {Promise<unknown>}
 */
const getUserByList = async () => {
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
                connection.release();
            })
        } catch (error) {
            console.log(`getUserList Function Error >> ${error}`)
            reject(error)
        }
    })
}

/**
 * 유저정보 수정하기
 *
 * @param name
 * @param address
 * @param date
 * @returns {Promise<unknown>}
 * @constructor
 */
const UserByUpdate = (name, address, date) => {
    return new Promise((resolve, reject) => {
        try {
            const sql = ``;

            maria.getConnection((error, connection) => {
                connection.query(sql, (error, rows) => {
                    if (error) {
                        console.log(`UserByUpdate SQL Error >> ${error}`)
                        console.log(`message: ${error.message}`)
                        console.log(`sql: ${error.sql}`)
                        console.log(`code: ${error.code}`)
                        reject("UserByUpdate SQL Error")
                    } else {
                        console.log('UserByUpdate rows >>', rows)
                        resolve(rows)
                    }
                })
                connection.release();
            })
        } catch (error) {
            console.log(`UserByUpdate Function Error >> ${error}`)
            reject(error)
        }
    })
}

/**
 * 유저정보 삭제하기
 *
 * @param idx
 * @returns {Promise<unknown>}
 * @constructor
 */
const UserByDelete = (idx) => {
    return new Promise((resolve, reject) => {
        try {
            const sql = ``;

            maria.getConnection((error, connection) => {
                connection.query(sql, (error, rows) => {
                    if (error) {
                        console.log(`UserByDelete SQL Error >> ${error}`)
                        console.log(`message: ${error.message}`)
                        console.log(`sql: ${error.sql}`)
                        console.log(`code: ${error.code}`)
                        reject("UserByDelete SQL Error")
                    } else {
                        console.log('UserByDelete rows >>', rows)
                        resolve(rows)
                    }
                })
                connection.release();
            })
        } catch (error) {
            console.log(`UserByDelete Function Error >> ${error}`)
            reject(error)
        }
    })
}

module.exports = {
    UserByAdd,
    getUserByList,
    UserByUpdate,
    UserByDelete
};