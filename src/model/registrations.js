import * as error from "../error"
import * as UserDb from "../db/users"
import * as User from "./users"

function Registration(userName, password, email) {
    return {
        userName: userName,
        password: password,
        email: email
    }
}

export function create(userName, password, email) {
    return new Promise(resolve => {
        resolve(Registration(
            userName,
            password,
            email
        ))
    })
}

export function checkUserExist(registration) {
    return User
    .getUser(registration.userName)
    .then(() => {
        throw error.FieldError([].push(error.Field("userName", "userName sudah terdaftar")))
    })
    .catch(() => {
        return registration
    })

}

export function registerUser(registration) {
    return User.createNewUser(
        registration.userName,
        registration.password,
        registration.email
    )
}

export function verifyParams(registration) {
    return new Promise((resolve, reject) => {
        const errorFields = []
        if (registration.userName === undefined) {
            errorFields.push(error.Field("userName", "userName kosong"))
        } 
        if (registration.password === undefined) {
            errorFields.push(error.Field("password", "password kosong"))
        } 
        if (checkPassword(registration.password)) {
            errorFields.push(error.Field("password", "Password harus terdiri dari minimal 6 karakter dan mengandung huruf besar, huruf kecil, dan angka"))
        } 
        if (!errorFields.length === 0) {
            reject(error.FieldError(errorFields))
        } else {
            resolve(registration)
        }
    })
}

function checkPassword(password) {
    return new RegExp("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d^a-zA-Z0-9].{5,50}$").test(password);
}
