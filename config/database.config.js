var host = "ds249623.mlab.com";
var port = 49623;
var name = "getir-case-study";
var user = "dbUser";
var password = "dbPassword1";
//mongodb://rotaract:Bostanli00@ds231374.mlab.com:31374/rotaract_app
var connectionString = "mongodb://" +user + ":" + password + "@" + host + ":" + port + "/" + name;

var onConnected = function () {
    console.log("Database connected on port " + port + ".");
};

var onDisconnected = function () {
    console.log("Database disconnected.");
};

var onError = function (error) {
    console.log("Database error:\n" + error);
    process.exit(1);
};

var closeSIGINT = function () {
    console.log("Database disconnected through app termination (SIGINT).");
    process.exit(0);
};

var closeSIGTERM = function () {
    console.log("Database disconnected through app termination (SIGTERM).");
    process.exit(0);
};

var closeSIGUSR2 = function () {
    console.log("Database disconnected through app termination (SIGUSR2).");
    process.kill(process.pid, "SIGUSR2");
};

module.exports = {
    port: port,
    connectionString: connectionString,

    onConnected: onConnected,
    onDisconnected: onDisconnected,
    onError: onError,

    closeSIGINT: closeSIGINT,
    closeSIGTERM: closeSIGTERM,
    closeSIGUSR2: closeSIGUSR2
};