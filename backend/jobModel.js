const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    companyName: {type: String, required: true},
    position: {type: String, required: true},
    domain: {type: String, required: true},
    platform: {type: String, required: true},
    status: {type: String, default: "Applied"}
});

const Job =  mongoose.model('Job', jobSchema);

module.exports = Job;