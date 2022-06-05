const express = require('express');
const router = express.Router();

const formatter = require("../util/formatter");
const {getUserList} = require("../service/users");


/**
 * 유저정보 불러오기
 */
router.get('/list', async (req, res) => {
    await formatter.routers.responseForm(req, res, getUserList)
});

module.exports = router;
