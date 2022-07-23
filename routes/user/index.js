const express = require('express');
const router = express.Router();

const {
    validationSchema
} = require('./validation')
const {
    validationForm,
    responseForm
} = require("../../module/form");
const {
    getUserList,
    updateByUser,
    addByUser,
    deleteByUser
} = require("../../service/users");

/**
 * @swagger
 *  /:
 *    get:
 *      tags:
 *      - product
 *      description: 유저정보 불러오기
 *      produces:
 *      - application/json
 *      parameters:
 *        - in: query
 *          name: start
 *          required: false
 *          schema:
 *            type: integer
 *            description: 결과 중, 결과의 시작점
 *        - in: query
 *          name: display
 *          required: false
 *          schema:
 *            type: integer
 *            description: 결과의 노출개수
 */
router.get('/', validationSchema.list, async (req, res) => {
    const {start, display} = req.query

    await validationForm(req, res)

    // TODO :: 두개의 모듈을 깔끔하게 엮을 방법을 생각해 보자!
    // const totalCount = await getUserListTotalCount()
    // const userList = await getUserList(start, display)

    await getUserList(start, display)
        .then(result => responseForm(res, result))
        .catch(error => responseForm(res, error))
});

/**
 * @swagger
 *  /:
 *    put:
 *      tags:
 *      - product
 *      description: 유저정보 수정하기
 *      produces:
 *      - application/json
 *      parameters:
 *        - in: query
 *          name: idx
 *          required: false
 *          schema:
 *            type: integer
 *            description: 시퀀스
 *        - in: query
 *          name: name
 *          required: false
 *          schema:
 *            type: integer
 *            description: 성함
 *       - in: query
 *          name: address
 *          required: false
 *          schema:
 *            type: integer
 *            description: 주소
 *        - in: query
 *          name: date
 *          required: false
 *          schema:
 *            type: integer
 *            description: 등록일시
 */
router.put('/', validationSchema.updateByUser, async (req, res) => {
    const {idx, name, address, date} = req.body

    await validationForm(req, res)

    await updateByUser(idx, name, address, date)
        .then(result => responseForm(res, result))
        .catch(error => responseForm(res, error))
});

/**
 * @swagger
 *  /:
 *    post:
 *      tags:
 *      - product
 *      description: 유저정보 저장하기
 *      produces:
 *      - application/json
 *      parameters:
 *        - in: query
 *          name: name
 *          required: false
 *          schema:
 *            type: integer
 *            description: 성함
 *        - in: query
 *          name: address
 *          required: false
 *          schema:
 *            type: integer
 *            description: 주소
 *       - in: query
 *          name: date
 *          required: false
 *          schema:
 *            type: integer
 *            description: 등록일시
 */
router.post('/', validationSchema.addByUser, async (req, res) => {
    const {name, address, date} = req.body

    await validationForm(req, res)

    await addByUser(name, address, date)
        .then(result => responseForm(res, result))
        .catch(error => responseForm(res, error))
});

/**
 * @swagger
 *  /:
 *    delete:
 *      tags:
 *      - product
 *      description: 유저정보 삭제하기
 *      produces:
 *      - application/json
 *      parameters:
 *        - in: query
 *          name: idx
 *          required: false
 *          schema:
 *            type: integer
 *            description: 시퀀스
 */
router.delete('/', validationSchema.deleteByUser, async (req, res) => {
    const {idx} = req.query

    await validationForm(req, res)

    await deleteByUser(idx)
        .then(result => responseForm(res, result))
        .catch(error => responseForm(res, error))
});

module.exports = router;
