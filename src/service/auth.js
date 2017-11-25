import * as SessionRedis from "../redis/session"

export function checkSession(sessionId) {
    console.log("TEST")
    if (sessionId === undefined) {
        throw error.UnAuthorizedError("Token kosong")
    }
    return SessionRedis
        .getSession(sessionId)
        .then(session => {
            return session.userId
        })
}