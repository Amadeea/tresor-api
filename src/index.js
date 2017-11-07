const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const app = express();

import * as UserService from "./service/users"

const users = new Users();

app.use(bodyParser.urlencoded());

app.post('/register', (req, res) => {
    var password = crypto.createHash('md5').update(req.body.password).digest("hex");
    UserService.register(req.body.username, password, req.body.email)
        .done((result) => {
            res.send("Data successfully registered");
        })
});

app.get('/get-transaction', function (req, res) {
    dbWrapper.getTransaction(req.param('user_id'), function (error, data) {
        for (var i = 0; i < data.length; i++) {
            var row = data[i];
            console.log(row);
        }
    });
    res.send("Done");
});

app.post('/add-transaction', function (req, res) {
    dbWrapper.addTransaction(req.body);
    res.send("Done");
});

app.listen(3000, function () {
    console.log("Listening to port 3000");
});
