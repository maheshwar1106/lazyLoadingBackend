const { addRecord, getRecords } = require("../controllers/records.controller");
const router = require("express").Router();
const schema = require("../validations/records.validation");
const validateSchema = require("../middlewares/validateRecordSchema");
const validateUser = validateSchema(schema);

router.post("/add", validateUser, addRecord);
router.get("/getrecords",getRecords)

module.exports = router;
