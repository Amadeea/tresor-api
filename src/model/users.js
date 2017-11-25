import * as UserDb from "../db/users"

function User(userId, userName, hash, email) {
    return {
        userId: userId,
        userName: userName,
        hash: hash,
        email: email,
        checkPassord: checkPassord,
        verifyParams: verifyParams
    };
}

function checkPassord(password) {
    return bcrypt.compareSync(password, this.hash)
}

export function createNewUser(userName, password, email) {
    const hash = bcrypt.hashSync(password, 10)
    return UserDb.createUser(userName, hash, email)
        .then(userDb => {
            return createUserFromDb(userDb)
        })
}

function createUserFromDb(userDb) {
    return User(
        userDb.userId,
        userDb.userName,
        userDb.hash,
        userDb.email
    )
}