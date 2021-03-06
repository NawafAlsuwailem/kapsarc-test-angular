const express = require('express')
const http = require('http');
const app = express()
const path = require('path');

app.use(express.static(__dirname + '/dist'))

// app.listen(process.env.PORT || 8080)

const port = process.env.PORT || 8080;


app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
})

app.all('*', function (req, res) {
  res.status(200).sendFile(`/`, { root: dist });
});

const server = http.createServer(app);
server.listen(port, () => console.log("Node Express server for " + app.name + " listening on port " + port));

console.log('Console listening');
