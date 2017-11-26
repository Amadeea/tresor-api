import db from '../../db'

function queryList(query) {
    return db.transaction.queryList(query);
}

const getList = {
    queryList: queryList
}

export default getList;