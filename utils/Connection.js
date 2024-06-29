const redis = require('redis');
let instanceClient = null;
const client = redis.createClient({
    username: 'default', // use your Redis user. More info https://redis.io/docs/latest/operate/oss_and_stack/management/security/acl/
    password: 'P050j96FfwGAWTlPK06orF3KotzdLyF4', // use your password here
    socket: {
        host: 'redis-16861.c212.ap-south-1-1.ec2.redns.redis-cloud.com',
        port: 16861,
    }
});

client.on('error', (err) => {
    console.log(err);
    console.log('Redis Client Error');
    process.exit(1);
});

client.on('connect', () => {
    console.log('Redis plugged in.');
});

const connectRedis = async () => {
    const instance = await client.connect();
    instanceClient = instance;
};

const getRedisInstance = () => {
    if (!instanceClient) throw new Error('Must connect to database firts!');
    return instanceClient;
};
const quitRedisInstance = async () => {
    console.log('Close redis connection');
    await getRedisInstance().quit();
    instanceClient = null;
};

module.exports = { connectRedis, getRedisInstance, quitRedisInstance };
