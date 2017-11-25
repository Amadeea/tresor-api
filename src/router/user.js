import express from "express"
import crypto from 'crypto'
import api from '../api'

const router = express.Router()

router.post('/', api.user.register);
router.post('/auth/', api.user.auth);

export default router;