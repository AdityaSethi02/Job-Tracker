const Job = require('./jobModel');

const jobs = async (req, res) => {
    try
    {
        const job = new Job(req.body);
        const savedJob = await job.save();
        res.status(201).json(savedJob);
    }
    catch (error)
    {
        console.log(error);
        res.status(500).json({error: error.message});
    }
}

module.exports = jobs;