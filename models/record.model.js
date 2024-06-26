const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
  SNo: { type: Number, required: true },
  projectDetails: { type: [String], required: true },
  requestDetails: { type: [String], required: true },
  pi: { type: String, required: true },
  instituteAndDepartment: { type: [String], required: true },
  status: { type: String, required: true },
});

const recordModel = mongoose.model("Records", recordSchema, "myRecords");
module.exports = recordModel;
