const express = require('express');
const router = express.Router();

const {validationForm, responseForm} = require("../module/form");
const {getUserList} = require("../service/users");

/**
 * 유저정보 불러오기
 */
router.get('/', async (req, res) => {
    await validationForm(req, res)

    await getUserList()
        .then(result => responseForm(res, result))
        .catch(error => responseForm(res, error))
});

module.exports = router;
