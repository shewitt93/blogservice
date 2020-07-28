const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const server = express();
server.use(cors());
server.use(bodyParser.text());

// My blogs resource
const blog = [
    {title: "angus", text: "hello", type: "Digital", cameratype: "Canon",
    lenstype: "50mm f/1.8", image: "C:\fakepath\angus_photo.jpg", comments: [{name: "Simon", comment: "Hello Angus"}, {name: "Despoiner", comment: "I love JS"}, {name: "Hannah", comment: "I love HTML"}]},
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

// Create route for search
server.get("/blog", (req,res)=> {
    let search = req.query.q;
    let choice = searchTerm(search);
    choice.length > 0 ? res.send(JSON.stringify(choice)): res.send(JSON.stringify(`"${search}" returned no results!`));
});
const searchTerm = (question) => {
    return data.blog.filter((data) => {
      post.title.toLowerCase().includes(question) ||
      post.type.toLowerCase().includes(question) ||
      post.text.toLowerCase().includes(question) ||
      post.cameratype.toLowerCase().includes(question) ||
      post.lenstype.toLowerCase().includes(question)
})};

server.listen(port, () => console.log(`Express now departing from http://localhost:${port}`))
