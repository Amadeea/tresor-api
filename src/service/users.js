import * as UsersDb from "../db/users";
import * as SessionRedis from "../redis/session"
import * as error from "../error";
import bcrypt from "bcryptjs"
import * as Registrations from "../model/registrations"

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
    return UsersDb.getUser(userName).then(user => {
        if (user === null || !bcrypt.compareSync(password, user.password)) {
            throw new error.FieldError({
                message: "username / password salah"
            });
        }

        return user.userId;
    }).then(userId => {
        return SessionRedis.createSession(userId);
    })
}

function checkPassword(password) {
    return new RegExp("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d^a-zA-Z0-9].{5,50}$").test(password);
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
