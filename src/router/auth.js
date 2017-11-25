import * as SessionRedis from '../redis/session'
import * as error from '../error'
import * as AuthService from '../service/auth'

export function authMiddleware(req, res, next) {
    const sessionId = req.get('x-access-token')
    AuthService
        .checkSession(sessionId)
        .then(userId => {
            req.userId = userId
            next()
        })
        .catch(err => {
            next(err)
        })
}