import db from '../../db'
import error from '../../error'

function verifyInput(transaction) {
    const errorFields = [];
    if (!transaction.info) {
        errorFields.push(error.UnprocessableEntity.Field("info", "info kosong"));
    }
    if (!transaction.amount) {
        errorFields.push(error.UnprocessableEntity.Field("amount", "amount kosong"));
    }
    if (!transaction.hashtag) {
        errorFields.push(error.UnprocessableEntity.Field("hashtag", "hashtag kosong"));
    }
    if (!transaction.type) {
        errorFields.push(error.UnprocessableEntity.Field("type", "type kosong"));
    }
    if (errorFields.length !== 0) {
        throw error.UnprocessableEntity.create(errorFields);
    } else {
        return transaction;
    }
}

function createTransaction(transaction) {
    return db.transaction.createTransaction(transaction)
}

const create = {
    verifyInput: verifyInput,
    createTransaction: createTransaction
}

export default create;