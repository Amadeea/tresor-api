import _ from  'lodash'

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

const transaction = {
    mapTransactionList: mapTransactionList,
    mapTransaction: mapTransaction
}

export default transaction;