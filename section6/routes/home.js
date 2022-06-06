const express = require('express');

const router = express.Router();
const data = [];

router.get('/', (req, res, next) => {
    res.render('home', {
        pageTitle: "Hone Page",
    });
})

router.post('/add-user', (req, res, next) => {
    data.push(req.body);
    res.redirect('/users');
})

module.exports.router = router;
module.exports.data = data;
