const express = require("express");

const { jobs } = require("../controllers");

const { getAllJobs, createJob, getJob, deleteJob, updateJob } = jobs;
const router = express.Router();

router.route("/").get(getAllJobs).post(createJob);
router.route("/:id").get(getJob).delete(deleteJob).put(updateJob);

module.exports = router;
