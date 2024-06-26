const Records = require("../models/record.model");

class RecordsServices {
  addRecord = async (record) => {
    const newRecord = new Records({ ...record });
    return await newRecord.save();
  };

  getRecords = async (page, limit) => {
    return await Records.find()
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .sort({ _id:1 });
  };
}
module.exports = RecordsServices;
