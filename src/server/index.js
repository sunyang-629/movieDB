
const express = require('express');
require('dotenv').config();
const routes = require('./routes');

const PORT = process.env.port || 3000;

const app = express();
app.use('/api',routes);

app.listen(PORT, () => {
    console.log(`movie app has started at port ${PORT}`);
})