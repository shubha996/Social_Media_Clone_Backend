const express = require('express');
const app = express();
const PORT = 4000;
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());

var login = require('./Routes/Login');
app.use('/login', login);

app.listen(PORT, () => {
    console.log(`The server has been started and listening to port ${PORT}`);
})