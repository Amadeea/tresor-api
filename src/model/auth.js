import * as Users from "./users"
import * as SessionRedis from "../redis/session"
import * as error from "../error"

function Auth(userName, password) {
    return {
        userName: userName,
        password: password
    }
}

export function create(userName, password) {
    return new Promise(resolve => {
        resolve(
            Auth(
                userName,
                password
            )
        )
    })
}

export function verifyInput(auth) {
    return new Promise((resolve, reject) => {
        const errorFields = []
        if (!auth.userName) {
            errorFields.push(error.Field("userName", "userName kosong"))
        } 
        if (!auth.password) {
            errorFields.push(error.Field("password", "password kosong"))
        } 
        if (errorFields.length !== 0) {
            console.log("error there")
            reject(error.FieldError(errorFields))
        } else {
            resolve(auth)
        }
    })
}

export function verifyGetUserId(auth) {
    return Users.getUser(auth.userName)
    .then(user => {
        Users.checkPassord(auth.password, user.hash)
        return user.userId
    })
}

export function createSession(userId) {
    return SessionRedis.createSession(userId)
}

export function getUserId(sessionId) {
    return SessionRedis
    .getSession(sessionId)
    .then(session => {
        return session.userId
    })
}
