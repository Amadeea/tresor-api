import * as SessionRedis from "../redis/session"

export function checkSession(sessionId) {
    if (sessionId === undefined) {
        throw error.UnAuthorizedError("Token tidak ditemukan")
    }
    return SessionRedis.getSession(sessionId).then(session => {
        console.log(session)
    })
}