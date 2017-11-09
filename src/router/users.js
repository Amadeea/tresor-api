const express = require("express")
const router = express.Router()
const crypto = require('crypto');

import * as UserService from "../service/users"

router.post('/', (req, res, next) => {
    UserService.register(req.body.username, req.body.password, req.body.email)
        .then((result) => {
            res.send("Data successfully registered");
        })
        .catch(next)
})

export default router