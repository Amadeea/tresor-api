import redis from '../../redis/redis'

const service = {
    createSession : redis.session.createSession,
    getSession: redis.session.getSession
}

export default service
