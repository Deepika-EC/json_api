const jsonServer = require("json-server");//es5 // importing json-server library
// import jsonserver from json-server // es6 version
const server = jsonServer.create(); // created 
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3003; // you can use any port number here;

server.use(middlewares);
server.use(router);

server.listen(port);