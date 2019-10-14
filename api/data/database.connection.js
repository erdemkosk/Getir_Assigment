/* core modules */
var path = require("path");

/* 3rd party modules */
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

/* imports */
var databaseConfig = require(path.join(appRoot, "config", "database.config"));

/* connecting to database */
mongoose.connect(databaseConfig.connectionString);

mongoose.connection.on("connected", databaseConfig.onConnected);

mongoose.connection.on("disconnected", databaseConfig.onDisconnected);

mongoose.connection.on("error", databaseConfig.onError);

process.on("SIGINT", function () {
    mongoose.connection.close(databaseConfig.closeSIGINT);
});

process.on("SIGTERM", function () {
    mongoose.connection.close(databaseConfig.closeSIGTERM);
});

process.once("SIGUSR2", function () {
    mongoose.connection.close(databaseConfig.closeSIGUSR2);
});

/* registering data models */
/*require(path.join(appRoot, "api", "data", "product.model"));
require(path.join(appRoot, "api", "data", "log.model"));*/