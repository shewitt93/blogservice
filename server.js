const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const server = express();
// server.use(express.static('/client/client.js'))
// server.use(express.static('/client/index.html'))
server.use(cors());
server.use(express.json())
server.use(bodyParser.text({
  extended: true,
  limit: '50mb',

  parameterLimit: 10000000

}));
server.use(bodyParser.urlencoded({
  extended: true,
  limit: '50mb',

  parameterLimit: 10000000
}))
server.use(bodyParser.json({
  limit: '50mb',
  parameterLimit: 10000000
}))
 server.use(bodyParser.raw({
  limit: '50mb',
  inflate: true,
  parameterLimit: 10000000
}))

// My blogs resource
const blog = []



const port = process.env.PORT || 3000;
// root route
server.get('/', (req, res) => res.send('Hello, client!'))
//search route
server.get('/blogs', (req, res)=> res.send(JSON.stringify({ blog })))
// Create new blog post route
server.post('/blog', (req, res) => {

  const newBlog = JSON.parse(req.body);

  blog.push(newBlog);
  res.send(JSON.stringify(newBlog))
})

server.get('/blog/comments', (req, res)=> {
  res.send(JSON.stringify(blog[0].comments))
})

server.post('/blog/comments', (req, res) => {
const newComment= JSON.parse(req.body);
blog[newComment.id].comments.push(newComment);
res.send(JSON.stringify(newComment))
})

server.post('/blog/emojis', (req, res) => {
  const newEmoji = JSON.parse(req.body)
  blog[newEmoji.id].emojiCount = newEmoji;
  res.send(JSON.stringify(newEmoji))
})

server.delete('/blog', (req, res)=> {
  const deletePost = JSON.parse(req.body);
  blog.splice(deletePost.id,1)

  res.send(JSON.stringify(deletePost))
})


server.listen(port, () => console.log(`Express now departing from http://localhost:${port}`))
