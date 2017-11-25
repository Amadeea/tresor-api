import * as UsersDb from "../db/users";
import * as SessionRedis from "../redis/session"
import * as error from "../error";
import bcrypt from "bcryptjs"

export function register(userName, password, email) {
    if (userName === undefined) {
        throw new error.FieldError({
            field: "userName",
            message: "username tidak boleh kosong"
        });
    } else if (password === undefined) {
        throw new error.FieldError({
            field: "password",
            message: "password tidak boleh kosong"
        });
    }
    return UsersDb.getUser(userName).then(user => {
        if (user !== null) {
            throw new error.FieldError({
                field: "username",
                message: "User sudah terdaftar"
            });
        }
    }).then(() => {
        if (!checkPassword(password)) {
            throw new error.FieldError({
                field: "password",
                message: "Password harus terdiri dari minimal 6 karakter dan mengandung huruf besar, huruf kecil, dan angka"
            });
        }
    }).then(() => {
        const hash = bcrypt.hashSync(password, 10);
        return UsersDb.createUser(userName, hash, email);
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

