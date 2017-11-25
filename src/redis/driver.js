const redis = require('redis');
import bluebird from 'bluebird'

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

export default redis.createClient(6379, 'tresorRedis')

