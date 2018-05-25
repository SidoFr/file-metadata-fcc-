const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const controllers = require('./controllers/controllers');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.post(
    '/get-size',
    controllers.upload,
    controllers.getSize);

module.exports = app;
