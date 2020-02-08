const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const routes = require('./routes');

const PORT = process.env.port || 3000;

const app = express();

app.use(helmet());
app.use('/api',routes);

app.listen(PORT, () => {
    console.log(`movie app has started at port ${PORT}`);
})