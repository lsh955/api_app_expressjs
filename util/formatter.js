require('dotenv').config()  // .env 환경설정

const _ = require('lodash');
const moment = require('moment')
const {validationResult} = require('express-validator')

/**
 * router API 결과 단일화를 위한 처리
 * @type {{validationForm: ((function(*, *): Promise<*|undefined>)|*), responseForm: ((function(*, *, *): Promise<void>)|*)}}
 */
exports.routers = {
    validationForm: async (req) => {
        // 파라미터 조건이 맞지 않는경우, message return
        const validation = validationResult(req).array()

        if (!_.isEmpty(validation)) {
            return {
                code: 'VALIDATION_FAILURE',
                message: validation[0].msg
            }
        }
    },
    responseForm: async (data) => {
        // 최초 요청부터 완료까지 시간측정을 위한 셋팅.
        const startTime = new Date();

        try {
            return {
                code: 'SUCCESS',
                message: '성공',
                doDT: new Date(),
                data: data,
                duration: new Date() - startTime
            }
        } catch (error) {
            return {
                code: 'FAILURE',
                message: error
            }
        }
    }
}

/**
 * console.log 단일화를 위한 처리
 * @type {{warn: exports.logs.warn, debug: exports.logs.debug, time: string, error: exports.logs.error, info: exports.logs.info}}
 */
exports.logs = {
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