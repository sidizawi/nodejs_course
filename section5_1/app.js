const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    res.send(`
        <h1>Your new followers</h1>
        <ul>
            <li>Bertrand</li>
            <li>Natalie</li>
            <li>Oscar</li>
            <li>...</li>
        </ul>
    `)
})

app.use('/', (req, res, next) => {
    res.send('<h1>Welcome to Twitter Analytics</h1>')
})

app.listen(3000);
