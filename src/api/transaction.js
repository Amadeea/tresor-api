import service from '../service'

const transaction = {
    create: (req, res, next) => {
        req.body.userId = req.userId;
        Promise
            .resolve(req.body)
            .then(service.transaction.create.verifyInput)
            .then(service.transaction.create.createTransaction)
            .then(transaction => {
                res.status(201).send(transaction);
            })
            .catch(next);
    },
    getList: (req, res, next) => {
        req.query.userId = req.userId;
        Promise
            .resolve(req.query)
            .then(service.transaction.transaction.queryList)
            .then(service.transaction.transaction.mapTransactionList)
            .then(transaction => {
                res.status(200).send(transaction);
            })
            .catch(next);
    },
    getTransaction: (req, res, next) => {
        Promise
            .resolve({
                userId : req.userId,
                transactionId: parseInt(req.params.transactionId)
            })
            .then(service.transaction.transaction.querySingle)
            .then(service.transaction.transaction.mapTransaction)
            .then(transaction => {
                res.status(200).send(transaction)
            })
            .catch(next)
    }
}
export default transaction;