const RecordsServices = require("../services/records.services");

const RecordsServicesInstance = new RecordsServices();

const addRecord = async (req, res) => {
  try {
    const result = await RecordsServicesInstance.addRecord(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: "Couldn't add record", error });
  }
};

const getRecords = async (req, res) => {
  try {
    const { page, limit } = req.query;
    const result = await RecordsServicesInstance.getRecords(page, limit);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: "Couldn't get the records", error });
  }
};

module.exports = { addRecord, getRecords };
