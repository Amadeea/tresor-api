import * as UsersDb from "../db/users";

export function register(userName, password, email) {
    return UsersDb.createUser(userName, password, email)
}


