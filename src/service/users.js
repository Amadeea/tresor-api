import * as UsersDb from "../db/users";

export function register(userName, password, email) {
    return Promise.resolve()
        .then(() => UsersDb.createUser(userName, password, email))
}


