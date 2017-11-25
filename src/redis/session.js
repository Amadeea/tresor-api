import redisDriver from './driver.js'
import uuidv4 from 'uuid/v4'

export function createSession(userId) {
    const session = {
        userId: userId,
        createdAt: Date.now(),
        updatedAt: Date.now()
    };
    const sessionId = uuidv4();
    redisDriver.set("session:" + sessionId, session.toString());
    return sessionId;
}
