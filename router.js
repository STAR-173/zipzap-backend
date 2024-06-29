const express = require('express');
const { getRedisInstance } = require('./utils/Connection');
const { checkIdExistence } = require('./routes/check_id');

const router = express.Router();

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    checkIdExistence(id, res);
});


module.exports = router;
