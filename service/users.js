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

module.exports = {
    getUserList
};
