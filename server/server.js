const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const server = express();
server.use(cors());
server.use(bodyParser.text());

// My blogs resource
const blog = [
    {title: "angus", text: "hello", type: "Digital", cameratype: "Canon",
    lenstype: "50mm f/1.8", image: "C:\fakepath\angus_photo.jpg"},
]

const port = 3000;
// root route
server.get('/', (req, res) => res.send('Hello, client!'))
//search route
server.get('/blog', (req, res)=> res.send(JSON.stringify({ blog })))

// Create new blog post route
server.post('/blog', (req, res) => {
  const newBlog = JSON.parse(req.body);
  blog.push(newBlog);
  res.send(JSON.stringify(newBlog))
})

server.listen(port, () => console.log(`Express now departing from http://localhost:${port}`))
