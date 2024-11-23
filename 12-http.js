// HTTP module

const http = require("http");

// req - incoming request - req is an object
// res - is what we are sending back - res is an object

const server = http.createServer((req, res) => {
  res.write("Welcome to our home page");
  res.end();
});

server.listen(5000);
