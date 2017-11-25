import * as SessionRedis from "../redis/session"

export function checkSession(sessionId) {
    if (sessionId === undefined) {
        throw error.UnAuthorizedError("Token kosong")
    }
    return SessionRedis
        .getSession(sessionId)
        .then(session => {
            return session.userId
        })
}