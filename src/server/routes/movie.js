const express = require('express');

const getMovieDetail = require('../controllers/getMovieDetail');
const getMovieList = require('../controllers/getMovieList');

const router = express.Router();

router.get('/:id', getMovieDetail);
router.get('/', getMovieList);

module.exports = router;
