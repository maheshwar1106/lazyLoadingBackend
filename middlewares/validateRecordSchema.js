const validateSchema = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(422).json({message:"Wrong Format",error})
    } 
    next();
};

module.exports=validateSchema