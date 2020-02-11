const express = require('express');
const movieRoutes = require('./router/movie');
const popularRoutes = require('./router/popular');
const searchRoutes = require('./router/search');

const router = express.Router();

router.use('/movies', movieRoutes);
router.use('/popular', popularRoutes);
router.use('/search', searchRoutes);

module.exports = router;