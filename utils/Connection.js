const redis = require('redis');

let client = null;

function redisClient() {
    if (!client) {
        const redisUrl = process.env.REDIS_URL;
        const redisPassword = process.env.REDIS_PASSWORD;

        console.log('Redis URL:', redisUrl);
        console.log('Redis Password:', redisPassword);


        client = redis.createClient(redisUrl, {
            password: redisPassword
        });

        // Handle any connection errors
        client.on('error', (error) => {
            console.error('Redis connection error:', error);
        });

        console.log('Redis client created');
    }

    return client;
}

module.exports = redisClient;