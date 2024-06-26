const Joi = require("joi");

const schema = Joi.object().keys({
  SNo: Joi.number().required(),
  projectDetails: Joi.array().items(
    Joi.string().required(),
    Joi.string().required(),
    Joi.string().required()
  ),
  requestDetails: Joi.array().items(
    Joi.string().required(),
    Joi.string().required()
  ),
  pi: Joi.string().required(),
  instituteAndDepartment: Joi.array().items(
    Joi.string().required(),
    Joi.string().required()
  ),
  status: Joi.string().required(),
});

module.exports = schema;
