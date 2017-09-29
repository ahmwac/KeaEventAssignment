const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const path = __dirname + '/public/';

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('wwwroot'));

app.get('/', function (req, res) {
    res.send('<h1>Hello from root</h1>');
});

app.get('/testdigselv', function (req, res) {
    res.send('Du vandt!!');
});

app.get('/login', function (req, res) {
    res.sendFile(path + 'login.html', function (err) {
        // handle error
    });
});

app.post('/login', function (req, res) {
    if (req.body.user === 'ali') {
        res.sendFile(path + 'index.html', function (err) {
        });
    } else {
        res.sendFile(path + 'login.html', function (err) {
            // handle error
        });
    }
});

app.get('/index', function (req, res) {
    res.sendFile(path + 'index.html', function (err) {
        // handle error
    });
});

app.get('/contact', function (req, res) {
    res.sendFile(path + 'contact.html', function (err) {
        // handle error
    });
});

app.listen(process.env.PORT || 3000);