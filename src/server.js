const express = require('express');
const path = require('path');

const server = express();


server.use(express.static(path.join(__dirname, '..', 'build')))
server.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
})


const port = 8080;

server.listen(port, () => {
  console.log(`Express Server listening on port ${port}`)
})
