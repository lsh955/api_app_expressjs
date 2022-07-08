const {connection} = require("../config/database");

const getUserList = async () => {
    try {
        const query = `SELECT *
                     FROM test_data`;

        return await connection(query);
    } catch (error) {
        console.log(`getUserList Function Error >> ${error}`)
        return error
    }
}

module.exports = {
    getUserList
};
