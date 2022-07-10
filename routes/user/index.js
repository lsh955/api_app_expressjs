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
    deleteByUser,
    getUserListTotalCount
} = require("../../service/users");

/**
 * 유저정보 불러오기
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
 * 유저정보 수정하기
 */
router.put('/', validationSchema.updateByUser, async (req, res) => {
    const {idx, name, address, date} = req.body

    await validationForm(req, res)

    await updateByUser(idx, name, address, date)
        .then(result => responseForm(res, result))
        .catch(error => responseForm(res, error))
});

/**
 * 유저정보 저장하기
 */
router.post('/', validationSchema.addByUser, async (req, res) => {
    const {name, address, date} = req.body

    await validationForm(req, res)

    await addByUser(name, address, date)
        .then(result => responseForm(res, result))
        .catch(error => responseForm(res, error))
});

/**
 * 유저정보 삭제하기
 */
router.delete('/', validationSchema.deleteByUser, async (req, res) => {
    const {idx} = req.query

    await validationForm(req, res)

    await deleteByUser(idx)
        .then(result => responseForm(res, result))
        .catch(error => responseForm(res, error))
});

module.exports = router;
