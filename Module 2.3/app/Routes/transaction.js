const express = require('express');
const router = express();
const { create } = require('../Controller/transaction');

router.get('/transactions', create);

module.exports = router;