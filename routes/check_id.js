const { getRedisInstance } = require('../utils/Connection');

function checkIdExistence(id, res){
    getRedisInstance().get(id)
        .then(value => {
        if (value == null) {
            return res.status(404).json({ msg: 'Key not found' });
        }
        return res.status(200).json({ key: value });
        })
        .catch(err => {
        return res.status(500).json({ msg: 'Error get key from redis' });
        });
}

module.exports = { checkIdExistence };