import express from "express"
import crypto from 'crypto'
import * as UserService from "../service/users"
import { read } from "fs";
import Registrations from "../model/registrations"

const router = express.Router()

router.post('/', (req, res, next) => {
    UserService.register(req.body.userName, req.body.password, req.body.email)
        .then(result => {
            console.log(result)
            res.status(201).send(result);
        })
        .catch(next);
});

router.post('/auth/', (req, res, next) => {
    UserService.login(req.body.username, req.body.password)
        .then(result => {
            res.status(200).send({
                "x-access-token": result
            });
        })
        .catch(next);
});

export default router;