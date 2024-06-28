const express = require('express');
const checkIdExistence = require('./routes/id');

const router = express.Router();

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const result = checkIdExistence(id);
    
    const data = result ? { id, result } : { error: 'Not found' };
    res.status(result ? 200 : 404).json(data);

});

module.exports = router;
