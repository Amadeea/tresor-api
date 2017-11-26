import _ from  'lodash'
import db from '../../db'
import error from '../../error'

function mapTransaction(transactionModel) {
    return {
        transactionId : transactionModel.transactionId,
        userId: transactionModel.userId,
        info: transactionModel.info,
        amount: transactionModel.amount,
        hashtag: transactionModel.hashtag,
        type: transactionModel.type,
        updatedAt: transactionModel.updatedAt,
        createdAt: transactionModel.createdAt
    }
}

function mapTransactionList(listTransactionModel) {
    return {
        count: listTransactionModel.length,
        data: _.forEach(listTransactionModel, mapTransaction)
    }
}

function querySingle(query) {
    console.log(query)
    return db.transaction
        .querySingle(query)
        .then(transaction => {
            if (transaction[0]) {
                return transaction[0]
            } else {
                throw error.NotFoundError("transaksi tidak ditemukan")
            }
        })
    
}

function queryList(query) {
    return db.transaction
        .queryList(query)
        .then(transactionList => {
            console.log(transactionList);
            if (transactionList) {
                return transactionList
            } else {
                throw error.NotFoundError("list transaksi tidak ditemukan")
            }
        })
}

const transaction = {
    querySingle: querySingle,
    queryList: queryList,
    mapTransactionList: mapTransactionList,
    mapTransaction: mapTransaction
}

export default transaction;