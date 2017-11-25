import * as error from "../error"
import * as UserDb from "../db/users"
import User from "./users"

function Registration(userName, password, email) {
    return {
        userName: userName,
        password: password,
        email: email,
        verifyParams: verifyParams,
        createUser: createUser
    }
}

function createUser() {
    return User.createNewUser(
        this.userName,
        this.password,
        this.email
    )
}

function verifyParams() {
    return new Promise((resolve, reject) => {
        const errorFields = []
        if (this.userName === undefined) {
            errorFields.push(error.Field("userName", "userName kosong"))
        } 
        if (this.password === undefined) {
            errorFields.push(error.Field("password", "password kosong"))
        } 
        if (checkPassword(this.password)) {
            errorFields.push(error.Field("password", "Password harus terdiri dari minimal 6 karakter dan mengandung huruf besar, huruf kecil, dan angka"))
        } 
        if (!errorFields.length === 0) {
            reject(error.FieldError(errorFields))
        } else {
            resolve(this)
        }
    })
}

function checkPassword(password) {
    return new RegExp("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d^a-zA-Z0-9].{5,50}$").test(password);
}

export default function (username, password, email) {
    return new Promise(resolve => {
        resolve(
            Registration(
                username,
                password,
                email
            )
        )
    })
}
