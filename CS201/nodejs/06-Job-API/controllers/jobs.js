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

  updateJob = async (req, res) => {
    const { company, position } = req.body;
    const { userID } = req.user;
    const { id: jobID } = req.params;

    if (!company || !position) {
      throw new BadRequest("Company and position fields are required");
    }

    const job = await Job.findByIdAndUpdate(
      { id: jobID, createdBy: userID },
      req.body,
      // Job saves new document, not old one
      // Run validators
      { new: true, runValidators: true }
    );
    if (!job) {
      throw new NotFoundError(`No job with id ${jobID}`)
    }

    res.status(StatusCodes.OK).json({ job });
  },

  createJob = (req, res) => {
    res.send("createJob");
  },

  deleteJob = async (req, res) => {
    const {
      user: { userID },
      params: { id: jobID }
    } = params;

    const job = await Job.findByIdAndUpdate({
      _id: jobID,
      createdBy: userID
    });
    if (!job) {
      throw NotFoundError(`No Job with id ${jobID}`);
    }

    res.status(StatusCode.OK).json({ job });
  }
};
