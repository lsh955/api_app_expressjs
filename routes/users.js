const express = require('express');
const router = express.Router();

const {getUserList} = require("../service/users");

/**
 * 유저정보 불러오기
 */
router.get('/list', (req, res) => {

    getUserList()
        .then(result =>
            res.status(result.status).json(result.value)
        )
        .catch(error =>
            res.status(error.status).json(error.value)
        );
});

module.exports = router;
