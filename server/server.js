const data = require('./data') //link to data.js
const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');

const server = express();
server.use(cors());
// server.use(bodyParser.json());

const port = 3000;
// root route
server.get('/', (req, res) => res.send('Hello, client!'))
//search route





server.listen(port, () => console.log(`Express now departing from http://localhost:${port}!`))
