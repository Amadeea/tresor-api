import auth from './auth'
import register from './register'
import password from './password'
import user from './user'
import session from './session'

const service = {
    auth: auth,
    register: register,
    password: password,
    user: user,
    session: session
}

export default service;