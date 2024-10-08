const router = require('express').Router();

const { createToken, deleteToken } = require('../../controller/v1/token');

router.post('/create', createToken);
router.delete('/delete', deleteToken);

module.exports = router;
