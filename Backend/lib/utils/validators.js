const Joi = require("joi");

function validateTask(data) {
  const schema = Joi.object({
    division: Joi.string().min(2).max(20).required(),

    title: Joi.string().min(5).max(60).required(),
    description: Joi.string().min(5).max(100).required(),
    priority: Joi.number().min(0).max(2).required(),
    status: Joi.number().min(0).max(2).required(),
  });
  const { error } = schema.validate(data);
  return error;
}


module.exports=validateTask