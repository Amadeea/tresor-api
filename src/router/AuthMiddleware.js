import SessionService from '../service/user/SessionService'

export default function authMiddleware(req, res, next) {
    Promise
        .resolve(req.get('x-access-token'))
        .then(SessionService.getSession)
        .then(userId => {
            req.userId = userId
            next()
        })
        .catch(err => {
            next(err)
        })
}