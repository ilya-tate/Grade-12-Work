const mongoose = require("mongoose");
const { StatusCodes } = require("http-status-codes");

const { BadRequest, NotFound } = require("../errors");
const { Job } = require("../models");

module.exports = {
  getAllJobs = async (req, res) => {
    const jobs = await Job.find({ createBy: req.user.useID }).sort("createdAt");
    res.status(StatusCodes.OK).json({ jobs, count: jobs.length });
  },

  getJob = async (req, res) => {
    const { userID } = req.user;
    const { id: jobID } = req.params;
    
    const job = await Job.findOne({
      _id: jobID,
      createdBy: userID
    });

    if (!job) {
      throw new NotFound(`No job with id ${jobID}`);
    }

    res.status(StatusCodes.OK).json({ job });
  },

  createJob = async (req, res) => {
    req.body.createdBy = req.user.userID;
    const job = await

    res.status(StatusCodes.CREATED).json({ job });
  },

  updateJob = (req, res) => {
    res.send("updateJob");
  },

  createJob = (req, res) => {
    res.send("createJob");
  },

  deleteJob = (req, res) => {
    res.send("deleteJob");
  }
};
