import redisDriver from './driver.js'
import uuidv4 from 'uuid/v4'

export function createSession(userId) {
    const session = {
        userId: userId,
        createdAt: Date.now(),
        updatedAt: Date.now()
    };
    const sessionId = uuidv4();
    redisDriver.set("session:" + sessionId, JSON.stringify(session));
    return sessionId;
}

export function getSession(sessionId) {
    return redisDriver
        .multi()
        .get("session:" + sessionId)
        .execAsync()
        .then(session => {
            return JSON.parse(session)
        })
}
