const express = require('express');
const path = require('path');

const home = require('./routes/home');
const users = require('./routes/users');

const app = express();

app.use(express.static('public'))

app.use(home);
app.use('/users', users);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
});

app.listen(3000);
