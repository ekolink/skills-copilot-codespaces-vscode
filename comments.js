// Create web server
// Create a web server that listens for requests and sends back a response.

// Create a web server that listens for requests and sends back a response.
// The server should listen on port 8080.
// The server should respond with a status code of 200.
// The server should respond with the message "Hello, world!".

// Import the http module
const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, world!\n');
});

// Listen on port 8080
server.listen(8080, () => {
  console.log('Server listening on port 8080');
});

// Run the server with node comments.js
// Open your browser and navigate to http://localhost:8080
// You should see the message "Hello, world!" in your browser.
