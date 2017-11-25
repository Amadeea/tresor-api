import service from '../service'

const user = {
    register: function (req, res, next) {
        Promise
            .resolve(req.body)
            .then(service.user.register.verifyInput)
            .then(service.user.register.checkUserExist)
            .then(service.user.password.hashPassword)
            .then(service.user.user.registerUser)
            .then(result => {
                res.status(201).send(result);
            })
            .catch(next);
    },
    auth: function (req, res, next) {
        Promise
            .resolve(req.body)
            .then(service.user.auth.verifyInput)
            .then(service.user.auth.authorize)
            .then(service.user.session.createSession)
            .then(result => {
                res.status(200).send({
                    "x-access-token": result
                });
            })
            .catch(next);
    }
}

export default user;