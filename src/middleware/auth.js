import service from '../service'

export default function authMiddleware(req, res, next) {
    Promise
        .resolve(req.get('x-access-token'))
        .then(service.user.session.getSession)
        .then(session => {
            req.body.userId = session.userId
            next()
        })
        .catch(err => {
            next(err)
        })
}