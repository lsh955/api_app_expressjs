const express = require('express');
const router = express.Router();

const {
    validationForm,
    responseForm
} = require("../module/form");
const {
    getUserList,
    updateByUser,
    addByUser,
    deleteByUser
} = require("../service/users");

/**
 * 유저정보 불러오기
 */
router.get('/', async (req, res) => {
    const {start, display} = req.query

    await validationForm(req, res)

    await getUserList(start, display)
        .then(result => responseForm(res, result))
        .catch(error => responseForm(res, error))
});

/**
 * 유저정보 수정하기
 */
router.put('/', async (req, res) => {
    const {idx, name, address, date} = req.body

    await validationForm(req, res)

    await updateByUser(idx, name, address, date)
        .then(result => responseForm(res, result))
        .catch(error => responseForm(res, error))
});

/**
 * 유저정보 저장하기
 */
router.post('/', async (req, res) => {
    const {name, address, date} = req.body

    await validationForm(req, res)

    await addByUser(name, address, date)
        .then(result => responseForm(res, result))
        .catch(error => responseForm(res, error))
});

/**
 * 유저정보 삭제하기
 */
router.delete('/', async (req, res) => {
    const {idx} = req.query

    await validationForm(req, res)

    await deleteByUser(idx)
        .then(result => responseForm(res, result))
        .catch(error => responseForm(res, error))
});

module.exports = router;
