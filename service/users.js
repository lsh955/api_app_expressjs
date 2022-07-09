const {connection} = require("../config/database");
const logFormatter = require('../module/logs')

/**
 * 유저정보 불러오기
 * @returns {Promise<unknown>}
 */
const getUserList = async () => {
    try {
        const query = `SELECT idx,
                              name,
                              address,
                              date
                       FROM test_data`;

        return await connection(query);
    } catch (error) {
        logFormatter.logs.error(`getUserList Function Error >> ${error}`)
        return error
    }
}

/**
 * 유저정보 수정하기
 * @param idx       시퀀스
 * @param name      성함
 * @param address   주소
 * @param date      등록일시
 * @returns {Promise<unknown>}
 */
const updateByUser = async (idx, name, address, date) => {
    try {
        const query = `UPDATE test_data
                       SET name    = ?,
                           address = ?,
                           date    = ?
                       WHERE idx = ?`;

        const updateData = [name, address, date, idx]

        return await connection(query, updateData);
    } catch (error) {
        logFormatter.logs.error(`updateByUser Function Error >> ${error}`)
        return error
    }
}

/**
 * 유저정보 저장하기
 * @param name      성함
 * @param address   주소
 * @param date      등록일시
 * @returns {Promise<unknown>}
 */
const addByUser = async (name, address, date) => {
    try {
        const query = `INSERT INTO test_data (name, address, date)
                       VALUES (?, ?, ?)`;

        const insertData = [name, address, date]

        return await connection(query, insertData);
    } catch (error) {
        logFormatter.logs.error(`addByUser Function Error >> ${error}`)
        return error
    }
}

/**
 * 유저정보 삭제하기
 * @param idx       시퀀스
 * @returns {Promise<unknown>}
 */
const deleteByUser = async (idx) => {
    try {
        const query = `DELETE
                       FROM test_data
                       WHERE idx = ?`;

        const deleteData = [idx]

        return await connection(query, deleteData);
    } catch (error) {
        logFormatter.logs.error(`deleteByUser Function Error >> ${error}`)
        return error
    }
}

module.exports = {
    getUserList,
    updateByUser,
    addByUser,
    deleteByUser
};
