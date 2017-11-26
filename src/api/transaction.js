import service from '../service'

const transaction = {
    create: (req, res, next) => {
        req.body.userId = req.userId;
        Promise
            .resolve(req.body)
            .then(service.transaction.create.verifyInput)
            .then(service.transaction.create.createTransaction)
            .then(transaction => {
                res.status(201).send(transaction)
            })
            .catch(next);
    }
}
export default transaction;