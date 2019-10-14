const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecordSchema = new Schema({
    key:{
        type:String,
        // required:true
    },
    value:{
        type:String,
        // required:true
    },      
  
    createdAt:{
        type:Date
    },
    counts:{
        type:[] 
    },
   
})

const Record = mongoose.model("Record",RecordSchema);
module.exports = Record;

module.exports.get = function (callback, limit) {
    Record.find(callback).limit(limit);
}