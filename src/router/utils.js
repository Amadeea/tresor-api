import { authMiddleware } from "./auth";
const express = require("express")
const router = express.Router()

router.get('/ping/', authMiddleware, (req, res, next) => {
    res.status(200).send({
        time: Date.now()
    });
})

export default router