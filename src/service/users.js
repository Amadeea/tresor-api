import * as UsersDb from "../db/users";
import * as error from "../error";

export function register(userName, password, email) {
    if (!checkPassword(password)) {
        throw new error.ParameterError("password", "Password harus terdiri dari minimal 8 karakter dan mengandung huruf besar, huruf kecil, dan anka")
    }
    return UsersDb.createUser(userName, password, email)
}

function checkPassword(password) {
    return !!password.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$")
}

