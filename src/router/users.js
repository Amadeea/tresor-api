const express = require("express")
const router = express.Router()
const crypto = require('crypto');

import * as UserService from "../service/users"
import { read } from "fs";

router.post('/', (req, res, next) => {
    UserService.register(req.body.username, req.body.password, req.body.email)
        .then((result) => {
            res.status(201).send();
        })
        .catch(next);
});

router.post('/auth/', (req, res, next) => {
    UserService.login(req.body.username, req.body.password)
        .then(result => {
            res.status(200).send({
                "x-access-token" : result
            });
        })
        .catch(next);
});

export default router;