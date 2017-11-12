const express = require('express');
const bodyParser = require('body-parser');
const app = express();

import UserRouter from "./router/users"
import * as error from "./error"

app.use(bodyParser.urlencoded());

app.use('/users', UserRouter)

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

app.use((err, req, res, next) => {
    console.log(err)
    res.status(err.status).send(err.body)
})

app.listen(3000, function () {
    console.log("Listening to port 3000");
});
