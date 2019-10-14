global.isExist = function (x) {
    if ((typeof x !== "undefined") && (x !== null)) {
        return true;
    } else {
        return false;
    }
};

global.isInitialized = function (x) {
    if (!isExist(x) && (x !== "") && (x !== []) && (x !== {})) {
        return true;
    } else {
        return false;
    }
};




global.getCurrentDate_Long = function () {
    var currentdate = new Date();
    var datetime = currentdate.getDate() + "/" +
        (currentdate.getMonth() + 1) + "/" +
        currentdate.getFullYear() + " @ " +
        currentdate.getHours() + ":" +
        currentdate.getMinutes() + ":" +
        currentdate.getSeconds();

    return datetime;
};

global.isValidMongoDbID = function (id) {
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
        return true;
    } else {
        return false;
    }
};

