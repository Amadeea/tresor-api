import SessionRedis from '../../redis/SessionRedis'

const SessionService = {
    createSession : SessionRedis.createSession,
    getSession: SessionRedis.getSession
}

export default SessionService
