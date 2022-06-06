const express = require('express');
const bodyParser = require('body-parser');

const homeData = require('./routes/home');
const users = require('./routes/users');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}))

app.use('/', homeData.router);
app.use('/users', users);

app.use('/', (req, res, next) => {
    res.status(404).render('404', {
        pageTitle: "Page Not Found"
    });
})

app.listen(3000);
