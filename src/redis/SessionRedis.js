import redisDriver from './driver.js'
import uuidv4 from 'uuid/v4'
import * as err from '../error'

function createSession(userId) {
    const session = {
        userId: userId,
        createdAt: Date.now(),
        updatedAt: Date.now()
    };
    const sessionId = uuidv4();
    redisDriver.set("session:" + sessionId, JSON.stringify(session));
    return sessionId;
}

function getSession(sessionId) {
    return redisDriver
        .multi()
        .get("session:" + sessionId)
        .execAsync()
        .then(session => {
            return JSON.parse(session)
        })
        .catch(() => {
            throw err.UnAuthorizedError("Token Tidak Ditemukan")
        })
}

const SessionRedis = {
    createSession : createSession,
    getSession : getSession
}

export default SessionRedis