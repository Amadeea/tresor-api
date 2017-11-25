const db = require('./db.js')
const Sequelize = require('sequelize')

var Transaction = db.define('transactions', {
    transactionId: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    userId: Sequelize.INTEGER,
    info: Sequelize.STRING,
    amount: Sequelize.DOUBLE,
    hashtag: Sequelize.STRING,
    type: Sequelize.STRING
});


export function createTransaction(transactions) {
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

export function getTransactionList(userId) {
    return db.sync().then(() => {
        return Transaction.
    })
}