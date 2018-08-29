const express = require('express');
const router = express.Router();

// set up view variables
const landing = require('./landing');
const getBoard = require('./get-board');
const error = require('./error');
const errorRoute = require('./error-route');
const createBoard = require('./create-board');
const addEntry = require('./add-entry');


// set up router
router.get('/', landing.get);
router.get('/board/:board_id', getBoard.get);
router.get('/make_error', errorRoute);
router.get('/create/', createBoard);
router.post('/add/', addEntry);
router.use(error.client);
router.use(error.server);


module.exports = router;
