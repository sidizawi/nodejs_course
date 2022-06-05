const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(process.cwd(), 'views', 'users.html'));
});

module.exports = router;
