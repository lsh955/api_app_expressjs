const {connection} = require("../config/database");
const logFormatter = require('../module/logs')

/**
 * 유저정보 불러오기
 *
 * @param start     결과 중, 결과의 시작점
 * @param display   결과의 노출개수
 * @returns {Promise<unknown>}
 */
const getUserList = async (start, display) => {
    try {
        if (start === undefined)
            start = 0
        if (display === "0" || isNaN(display))
            display = 1

        const query = `SELECT idx,
                              name,
                              address,
                              date
                       FROM test_data
                       ORDER BY idx DESC
                       LIMIT ?,?`;

        const selectData = [parseInt(start), parseInt(display)]

        return await connection(query, selectData);
    } catch (error) {
        logFormatter.logs.error(`getUserList Function Error >> ${error}`)
        return error
    }
}

/**
 * 유저정보 전체 카운트
 *
 * @returns {Promise<*|{total: unknown}>}
 */
const getUserListTotalCount = async () => {
    try {
        const query = `SELECT COUNT(*)
                       FROM test_data`;

        const rows = await connection(query);

        return {
            total : rows[0]
        }
    } catch (error) {
        logFormatter.logs.error(`getUserListTotalCount Function Error >> ${error}`)
        return error
    }
}

/**
 * 유저정보 수정하기
 *
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
 *
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
 *
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
    deleteByUser,
    getUserListTotalCount
};
