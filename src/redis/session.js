import redisDriver from './driver.js'
import uuidv4 from 'uuid/v4'

export function createSession(userName) {
    const session = {
        userName: userName,
        createdAt: Date.now(),
        updatedAt: Date.now()
    }
    console.log(session)
    const sessionId = uuidv4()
    console.log(sessionId)
    redisDriver.set("session:" + sessionId, session.toString())
    return sessionId
}
