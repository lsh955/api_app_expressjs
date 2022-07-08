const express = require('express');
const router = express.Router();

const formatter = require("../util/formatter");
const {getUserList} = require("../service/users");

/**
 * 유저정보 불러오기
 */
router.get('/', async (req, res) => {
    await formatter.validationForm(req)

    getUserList
        .then(result => formatter.responseForm(result))
        .catch(error => formatter.responseForm(error))
});

module.exports = router;
