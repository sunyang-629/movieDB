const express = require('express');
const movieRoutes = require('./routes/movie');

const router = express.Router();

router.use('/movies', movieRoutes);

module.exports = router;
