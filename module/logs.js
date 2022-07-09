require('dotenv').config()  // .env 환경설정

const moment = require("moment");

/**
 * console.log 단일화를 위한 처리
 *
 * @type {{warn: logs.warn, debug: logs.debug, time: string, error: logs.error, info: logs.info}}
 */
const logs = {
    debug: (message) => {
        console.debug(moment().format('YYYY-MM-DDTHH:mm:ss.SSS') + '\tDEBUG\t' + process.env.SERVER_NAME + '\t' + message)
    },
    info: (message) => {
        console.log(moment().format('YYYY-MM-DDTHH:mm:ss.SSS') + '\tINFO\t' + process.env.SERVER_NAME + '\t' + message)
    },
    warn: (message) => {
        console.warn(moment().format('YYYY-MM-DDTHH:mm:ss.SSS') + '\tWARN\t' + process.env.SERVER_NAME + '\t' + message)
    },
    error: (message, error) => {
        console.error(moment().format('YYYY-MM-DDTHH:mm:ss.SSS') + '\tERROR\t' + process.env.SERVER_NAME + '\t' + message, error)
    },
    time: moment().format('YYYY-MM-DD HH:mm:ss.SSS')
}

module.exports = {
    logs
};