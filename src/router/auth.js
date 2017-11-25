import * as SessionRedis from '../redis/session'
import * as error from '../error'
import * as UserService from '../service/users'

export function authMiddleware(req, res, next) {
    const sessionId = req.get('x-access-token')
    UserService
        .checkSession(sessionId)
        .then(userId => {
            req.userId = userId
            next()
        })
        .catch(err => {
            next(err)
        })
}