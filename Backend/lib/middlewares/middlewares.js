const validateTask= require("../utils/validators")

 function validate(req,res,next){
    const error= validateTask(req.body)
    if(error){
        console.log(error)
        res.status(400).json(error)
        return;
    }
    next()
}

module.exports=validate