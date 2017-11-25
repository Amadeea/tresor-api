import * as UsersDb from "../db/users";
import * as SessionRedis from "../redis/session"
import * as error from "../error";
import * as Registrations from "../model/registrations"
import * as Auth from "../model/auth"

export function register(userName, password, email) {
    return Registrations.create(userName, password, email)
    .then( registration => {
        return Registrations.verifyParams(registration)
    })
    .then( registration => {
        return Registrations.checkUserExist(registration)
    })
    .then( registration => {
        return Registrations.registerUser(registration)
    })
    .then(mapToApi)
}

export function login(userName, password) {
    return Auth.create(userName, password)
    .then(auth => {
        return Auth.verifyInput(auth)
    })
    .then(auth => {
        return Auth.verifyGetUserId(auth)
    })
    .then(userId => {
        return Auth.createSession(userId)
    })
}

export function checkSession(sessionId) {
    if (sessionId === undefined) {
        throw error.UnAuthorizedError("Token kosong")
    }
    return Auth.getUserId(sessionId)
}

function mapToApi(user) {
    return {
        userId: user.userId,
        userName: user.userName,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
    }
}
