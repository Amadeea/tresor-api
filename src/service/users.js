import * as UsersDb from "../db/users";
import * as SessionRedis from "../redis/session"
import * as error from "../error";
import bcrypt from "bcryptjs"
import Registration from "../model/registrations"

export function register(userName, password, email) {
    return Registration(userName, password, email)
    .then( registration => {
        return registration.verifyParams()
    })
    .then( registration => {
        return registration.createUser()
    })
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

