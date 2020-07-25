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
server.get("/search", (req,res)=> {
 let search = req.query.q;
 let choice = searchTerm(search);
 choice.length > 0 ? res.send(JSON.stringify(choice.slice(0, 10))): res.send(JSON.stringify(`"${search}" returned no results!`));
});

const searchTerm = (objectReturn) => {
    return data.masterArray.filter((data)=>
    data.name.includes(objectReturn) ||
    data.image.includes(objectReturn) ||
    data.description.includes(objectReturn)||
    data.name.includes(objectReturn.toLowerCase()) ||
    data.image.includes(objectReturn.toLowerCase()) ||
    data.description.includes(objectReturn.toLowerCase())
  );
}


server.listen(port, () => console.log(`Express now departing from http://localhost:${port}!`))
