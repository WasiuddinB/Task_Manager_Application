const express = require('express');
const app = express();
require('../db/db');

const cors = require('cors');
const authRoutes=require('./routes/authRoutes');

const morgan = require('morgan');


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('auth',authRoutes);

const port = 4000;

app.listen(port, () => {
    console.log(`The Server is running on PORT: `, port);
});