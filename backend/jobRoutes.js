const express = require('express');
const jobs = require('./jobController');

const router = express.Router();

router.post('/', jobs);

module.exports = router;