import * as Transaction from "../model/transactions"

export function createTransaction(
    userId,
    info,
    amount,
    hashtag,
    type
) {
    return Transaction.create(
        userId,
        info,
        amount,
        hashtag,
        type
    ).then( transaction => {
        return Transaction.verifyInput(transaction)
    })
    .then (transaction => {
        return Transaction.saveToDb(transaction)
    })
}

export function getTransactionList(userId) {
    return Transaction.getTransactionList(userId)
}