import * as TransactionDb from "../db/transactions"

export function createTransaction(transactions) {
    return TransactionDb.createTransaction(transactions)
}
