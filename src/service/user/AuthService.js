import UserService from './UserService'
import PasswordService from './PasswordService'
import error from '../../error'

function verifyInput(auth) {
    const errorFields = []
    if (!auth.userName) {
        errorFields.push(error.Field("userName", "userName kosong"))
    }
    if (!auth.password) {
        errorFields.push(error.Field("password", "password kosong"))
    }
    if (errorFields.length !== 0) {
        throw error.FieldError(errorFields)
    } else {
        return auth
    }
}

function auth(auth) {
    return UserService
        .getUserByUserName(auth.userName)
        .catch(() => {
            throw error.UnAuthorizedError("userName atau password")
        })
        .then( user => {
            if (PasswordService.verifyPassword(auth.password, user.hash)) {
                return user.userId
            } else {
                throw error.UnAuthorizedError("userName atau password")
            }
        })
}

const AuthService = {
    verifyInput: verifyInput,
    auth: auth
}

export default AuthService
