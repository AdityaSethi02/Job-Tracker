const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    companyName: {type: String, require: true},
    position: {type: String, require: true},
    domain: {type: String, require: true},
    platform: {type: String, require: true},
    status: {type: String, default: "Applied"}
});

const Job =  mongoose.model('Job', jobSchema);

module.exports = Job;