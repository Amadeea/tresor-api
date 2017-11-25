import middleware from '../middleware'
import api from '../api'
import express from 'express'
const router = express.Router();

router.post('/', middleware.auth, api.transaction.create)

export default router