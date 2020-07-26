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
server.get('/blog', (req, res)=> res.send('Welcome!'))





server.listen(port, () => console.log(`Express now departing from http://localhost:${port}`))
