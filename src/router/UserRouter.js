import express from "express"
import crypto from 'crypto'
import RegisterService from "../service/user/RegisterService"
import PasswordService from "../service/user/PasswordService"
import UserService from "../service/user/UserService"
import AuthService from "../service/user/AuthService"
import SessionService from "../service/user/SessionService"

const router = express.Router()

router.post('/', (req, res, next) => {
    Promise
        .resolve(req.body)
        .then(RegisterService.verifyInput)
        .then(RegisterService.checkUserExist)
        .then(PasswordService.hashPassword)
        .then(UserService.registerUser)
        .then(result => {
            res.status(201).send(result);
        })
        .catch(next);
});

router.post('/auth/', (req, res, next) => {
    Promise
        .resolve(req.body)
        .then(AuthService.verifyInput)
        .then(AuthService.auth)
        .then(SessionService.createSession)
        .then(result => {
            res.status(200).send({
                "x-access-token": result
            });
        })
        .catch(next);
});

export default router;