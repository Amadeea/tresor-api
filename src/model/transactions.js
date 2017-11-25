import * as error from '../error'
import * as TransactionDb from '../db/transactions'

function Transaction(userId, info, amount, hashtag, type) {
    return {
        userId : userId,
        info: info,
        amount: amount,
        hashtag: hashtag,
        type: type
    };
}

export function create(userId, info, amount, hashtag, type) {
    return new Promise(resolve => {
        resolve(Transaction(
            userId,
            info,
            amount,
            hashtag,
            type
        ))
    })
}

export function verifyInput(transaction) {
    return new Promise((resolve, reject) => {
        const errorFields = []
        if (!transaction.info) {
            errorFields.push(error.Field("info", "info kosong"))
        } 
        if (!transaction.amount) {
            errorFields.push(error.Field("amount", "amount kosong"))
        } 
        if (!transaction.hashtag) {
            errorFields.push(error.Field("hashtag", "hashtag kosong"))
        } 
        if (!transaction.type) {
            errorFields.push(error.Field("type", "type kosong"))
        } 
        if (errorFields.length !== 0) {
            reject(error.FieldError(errorFields))
        } else {
            resolve(transaction)
        }
    })
}

export function saveToDb(transaction) {
    return TransactionDb.createTransaction(
        transaction
    ).then(transactionDb => {
        return createTransactionFromDb(transactionDb)
    }) 
}

function createTransactionFromDb(transactionDb) {
    return Transaction(
        transactionDb.userId,
        transactionDb.info,
        transactionDb.amount,
        transactionDb.hashtag,
        transactionDb.type
    )
}