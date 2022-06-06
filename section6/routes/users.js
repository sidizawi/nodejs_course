const express = require('express');

const router = express.Router();

const homeData = require('./home');

router.get('/', (req, res, next) => {
    const users = homeData.data;
    res.render('users', {
        pageTitle: "",
        users,
    });
})

module.exports = router;
