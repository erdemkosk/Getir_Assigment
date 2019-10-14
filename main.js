/* core modules */
var path = require("path");
var http = require("http");

global.appRoot = path.resolve(__dirname); // define application's root directory as a global variable

/* imports */
require(path.join(appRoot, "api", "functions", "global"));
var serverConfig = require(path.join(appRoot, "config", "server.config"));

/* providing database connection */
require(path.join(appRoot, "api", "data", "database.connection"));

var app = require(path.join(appRoot, "app"));



/* creating HTTP server */
var httpServer = http.createServer(app);
httpServer.listen(serverConfig.httpPort);
httpServer.on("error", serverConfig.httpOnError);
httpServer.on("listening", serverConfig.httpOnListening);
