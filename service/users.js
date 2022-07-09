const {connection} = require("../config/database");

const logFormatter = require('../module/logs')

const getUserList = async () => {
    try {
        const query = `SELECT *
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
