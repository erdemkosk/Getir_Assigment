

var httpPort = process.env.PORT || 3000;



var httpOnListening = function () {
    console.log("HTTP server is running on port " + httpPort + ".");
};

var httpOnError = function (error) {
    if (isExist(error)) {
        console.log("HTTP server error:\n" + error);
        process.exit(1);
    }
};

module.exports = {
    httpPort: httpPort,
    httpOnListening: httpOnListening,
    httpOnError: httpOnError
};