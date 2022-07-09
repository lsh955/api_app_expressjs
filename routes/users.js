const express = require('express');
const router = express.Router();

const {validationForm} = require("../util/formatter");
const {getUserList} = require("../service/users");

/**
 * 유저정보 불러오기
 */
router.get('/', async (req, res) => {
    await validationForm(req, res)

    await getUserList()
        .then(result => res.json(result))
        .catch(error => res.json(error))
});

module.exports = router;
