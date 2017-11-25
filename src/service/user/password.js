import bcrypt from 'bcryptjs'

function hashPassword(registration) {
    registration.hash = bcrypt.hashSync(registration.password, 10)
    return registration
}

function verifyPassword(password, hash) {
    return bcrypt.compareSync(password, hash)
}

const service = {
    hashPassword: hashPassword,
    verifyPassword: verifyPassword
}

export default service