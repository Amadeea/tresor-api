import service from '../service'

export default function authMiddleware(req, res, next) {
    Promise
        .resolve(req.get('x-access-token'))
        .then(service.user.session.getSession)
        .then(userId => {
            req.userId = userId
            next()
        })
        .catch(err => {
            next(err)
        })
}