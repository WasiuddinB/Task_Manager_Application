const express = require('express');
const app = express();
require('../db/db');

const port = 4000;

app.listen(port, () => {
    console.log(`The Server is running on PORT: `, port);
});