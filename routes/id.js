const redisClient = require('../utils/Connection');

if (!redisClient) {
    throw new Error('redisClient is undefined');
}

function checkIdExistence(id) {
    return new Promise(async (resolve, reject) => {
        try {
            const value = await redisClient.get(id);
            if (value) {
            resolve(value);
            } else {
            resolve('Not exist');
            }
        } catch (err) {
            reject(err);
        }
    });
}

module.exports = checkIdExistence;