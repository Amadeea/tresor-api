import * as SessionRedis from '../redis/session'
import * as error from '../error'
import * as AuthService from '../service/auth'

export function authMiddleware(req, res, next) {
    const sessionId = req.get('x-access-token')
    AuthService
        .checkSession(sessionId)
        .then(() => {
            res.status(200).send({
                time: Date.now()
            })
        })
        .catch(err => {
            next(err)
        })
}