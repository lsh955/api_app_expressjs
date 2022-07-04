const express = require('express');
const router = express.Router();

const formatter = require("../util/formatter");
const {
    UserByAdd,
    getUserByList,
    UserByUpdate,
    UserByDelete
} = require("../service/users");

/**
 * 유저정보 추가하기
 */
router.post('/', async (req, res) => {
    const {name, address, date} = req.body;

    UserByAdd(name, address, date)
        .then(result => formatter.responseForm(result))
        .catch(error => formatter.responseForm(error))
});

/**
 * 유저정보 불러오기
 */
router.get('/', async (req, res) => {
    await formatter.validationForm(req)

    getUserByList
        .then(result => formatter.responseForm(result))
        .catch(error => formatter.responseForm(error))
});

/**
 * 유저정보 수정하기
 */
router.put('/', async (req, res) => {
    const {name, address, date} = req.body;

    UserByUpdate(name, address, date)
        .then(result => formatter.responseForm(result))
        .catch(error => formatter.responseForm(error))
});

/**
 * 유저정보 삭제하기
 */
router.delete('/', async (req, res) => {
    const {idx} = req.query;

    UserByDelete(idx)
        .then(result => formatter.responseForm(result))
        .catch(error => formatter.responseForm(error))
});

module.exports = router;
