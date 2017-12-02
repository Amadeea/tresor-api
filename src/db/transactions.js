const db = require('./db.js');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

var Transaction = db.define('transactions', {
    transactionId: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    userId: Sequelize.INTEGER,
    info: Sequelize.STRING,
    amount: Sequelize.DOUBLE,
    hashtag: Sequelize.STRING,
    type: Sequelize.STRING
});

function createTransaction(transactions) {
    return db.sync().then(() => {
        return Transaction.create({
            userId: transactions.userId,
            info: transactions.info,
            amount: transactions.amount,
            hashtag: transactions.hashtag,
            type: transactions.type
        });
    });
}

function queryList(query) {
    return db.sync().then(() => {
        const where = {
            userId: query.userId
        }
        if (query.hashtag) {
            where.hashtag = query.hashtag;
        }
        return Transaction.findAll({
            where: where
        });
    });
}

function querySingle(query) {
    return db.sync().then(() => {
        return Transaction.findAll({
            where: {
                transactionId: query.transactionId,
                userId: query.userId
            }
        });
    })
}

const transaction = {
    createTransaction: createTransaction,
    queryList: queryList,
    querySingle: querySingle
}

export default transaction;