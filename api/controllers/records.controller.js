var Record = require('../data/models/record');
var Validation = require('../data/models/validation');


// Handle index actions
exports.getAllRecords = async function (req, res) {
    await Record.get(function (err, record) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });

        }
        res.json({
            code: 0,
            msg: "success",
            records: record
        });
    });
};

//Handle Post Actions For Records

//Is Succced Call 0
// There is No record 1
// Error 2

exports.getFindedRecordsFromCriterias = async function (req, res) {

    var validation = new Validation(req.body.startDate, req.body.endDate, req.body.minCount, req.body.maxCount);
    var isValid = validation.checkValidation();

    if (isValid) {
        await Record.aggregate([
            {
                $unwind: {
                    path: '$counts'
                }
            },
            {
                $match: { // Search for Date
                    createdAt: { $gte: new Date((req.body.startDate)), $lt: new Date((req.body.endDate)) }
                }
            },
            {
                // Grouping for sum 
                $group: {
                    _id: '$key',
                    count: { $sum: "$counts" },
                    createdAt: { $first: '$createdAt' }
                }
            },
            {
                $match: { // Filter for max and min count
                    count: { $gte: parseInt(req.body.minCount), $lt: parseInt(req.body.maxCount) }
                }
            },
            {
                $sort: {
                    count: 1
                }
            },
            {
                $project: {
                    _id: 0,
                    key: "$_id",
                    createdAt: "$createdAt",
                    count: "$count"
                }
            }

        ], function (err, record) {
            if (err) {
                res.send(err);
            }
            if (record != null && record.length > 0) { //If we have a data

                res.json({
                    code: 0,
                    msg: "Success",
                    records: record
                });
            } else { // We dont have a any data =(
                res.json({
                    code: 1,
                    msg: "Fail",
                    detail: "No records found",
                    records : []

                });
            }
        });
    }
    else {
        //Not Valid Paramters
        res.status(500).json({
            code: 2,
            msg: "validation error",

        });
    }

};





