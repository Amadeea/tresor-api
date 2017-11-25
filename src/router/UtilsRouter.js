import authMiddleware from "./AuthMiddleware";
import express from 'express';
const router = express.Router();

router.get('/ping/', authMiddleware, (req, res, next) => {
    res.status(200).send({
        time: Date.now()
    });
});

export default router