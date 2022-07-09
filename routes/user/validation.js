const {query, body} = require('express-validator')

/**
 * validation 스키마 검증 룰
 * : validation 스키마는 요청에 대한 검증 또는 삭제를 정의하는 개체
 */
const validationSchema = {
    list: [
        query('start', 'start(출력시작) 가 입력되지 않았습니다.')
            .notEmpty()
            .isInt({
                min: 0
            }).withMessage('start(출력시작) 는 0부터 입력 가능합니다.'),
        query('display', 'display(출력건수) 가 입력되지 않았습니다.')
            .notEmpty()
            .isInt({
                min: 1
            }).withMessage('display(출력건수) 는 1부터 입력 가능합니다.'),
    ],
    updateByUser: [
        body('idx', 'idx 가 입력되지 않았습니다.')
            .notEmpty(),
        body('name', 'name 이 입력되지 않았습니다.')
            .notEmpty(),
        body('address', 'address 가 입력되지 않았습니다.')
            .notEmpty(),
        body('date', 'date 가 입력되지 않았습니다.')
            .notEmpty(),
    ],
    addByUser: [
        body('name', 'name 이 입력되지 않았습니다.')
            .notEmpty(),
        body('address', 'address 가 입력되지 않았습니다.')
            .notEmpty(),
        body('date', 'date 가 입력되지 않았습니다.')
            .notEmpty(),
    ],
    deleteByUser: [
        query('idx', 'idx 가 입력되지 않았습니다.')
            .notEmpty(),
    ]
}

module.exports = {
    validationSchema
}