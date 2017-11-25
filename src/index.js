const express = require('express');
const bodyParser = require('body-parser');
const app = express();

import UtilRouter from "./router/utils"
import UserRouter from "./router/users"
import TransactionRouter from "./router/transactions"
import * as error from "./error"

app.use(bodyParser.urlencoded());

app.use('/', UtilRouter);
app.use('/users', UserRouter);
app.use('/transactions', TransactionRouter);

app.use((err, req, res, next) => {
    console.log(err)
    if (err.status === undefined) {
        err.status = 500;
        err.body = "Unknown Error"
    }
    res.status(err.status).send(err.body);
})

app.listen(3000, function () {
    console.log("Listening to port 3000");
});
