import middleware from '../middleware'
import api from '../api'
import express from 'express'
const router = express.Router();

router.post('/', middleware.auth, api.transaction.create)
router.get('/', middleware.auth, api.transaction.getList)
router.get('/:transactionId', middleware.auth, api.transaction.getTransaction)

export default router