const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const routes = require('./routes');
const notFoundHandler = require('./middleware/notFound')

const PORT = process.env.port || 3000;

const app = express();

app.use(helmet());
app.use(morgan('dev'));

app.use('/api', routes);
app.use(notFoundHandler); 

app.listen(PORT, () => {
    console.log(`movie app has started at port ${PORT}`);
})