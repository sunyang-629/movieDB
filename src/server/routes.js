const express = require('express');
const movieRoutes = require('./router/movie');
const popularRoutes = require('./router/popular');

const router = express.Router();

router.use('/movies', movieRoutes);
router.use('/popular', popularRoutes);

module.exports = router;