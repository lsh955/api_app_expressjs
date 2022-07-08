const express = require('express');
const router = express.Router();

const formatter = require("../util/formatter");
const {getUserList} = require("../service/users");

/**
 * 유저정보 불러오기
 */
router.get('/', async (req, res) => {
    await formatter.validationForm(req)

    await getUserList()
        .then(result => res.json(result))
        .catch(error => res.json(error))
});

module.exports = router;
