const express = require('express');
const router = express.Router();

const formatter = require("../util/formatter");
const {getUserList} = require("../service/users");

/**
 * 유저정보 불러오기
 */
router.get('/list', async (req, res) => {
    await formatter.routers.validationForm(req, res)

    getUserList
        .then(result => formatter.routers.responseForm(result))
        .catch(error => formatter.routers.responseForm(error))
});

module.exports = router;
