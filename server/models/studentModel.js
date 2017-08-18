var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var studentModel = new Schema({
    rollNo: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    lname: {
        type: String,
    },
    address: {
        type: String,
        required: true
    },
    division: {
        type: String,

    },
    branch: {
        type: String,
    },
    create_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
    },
});
module.exports = mongoose.model('Student', studentModel);