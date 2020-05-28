//Define Dependencies
const http = require('http');
const app = require('./app');

//Define port
const port = process.env.PORT || 8080;

//Create a server
const server = http.createServer(app);

//Listen a port
server.listen(port, () => {
    console.log('Hello! Im a server ! Im working on port ' + port);
});
