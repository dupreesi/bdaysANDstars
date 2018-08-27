const express = require('express');
const router = express.Router();

// set up view variables
const landing = require('./landing');
// const createBoard = require('./createBoard')

// set up router
router.get('/', landing.get);


module.exports = router;
