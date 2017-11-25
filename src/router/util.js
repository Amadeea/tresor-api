import middleware from '../middleware'
import api from '../api/'
import express from 'express';

const router = express.Router();

router.get('/ping/', middleware.auth, api.util.ping);

export default router