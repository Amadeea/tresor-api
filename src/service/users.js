import * as UsersDb from "../db/users";
import * as error from "../error";

export function register(userName, password, email) {
    return UsersDb.getUser(userName).then(user => {
        if (user != null) {
            throw new error.FieldError({
                field: "userName",
                message: "User sudah terdaftar"
            })
        }
    }).then(() => {
        if (!checkPassword(password)) {
            throw new error.FieldError({
                field:"password", 
                message:"Password harus terdiri dari minimal 6 karakter dan mengandung huruf besar, huruf kecil, dan angka"
            })
        }
    }).then(() => {
        return UsersDb.createUser(userName, password, email)
    })
}

function checkPassword(password) {
    return new RegExp("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d^a-zA-Z0-9].{5,50}$").test(password)
}

