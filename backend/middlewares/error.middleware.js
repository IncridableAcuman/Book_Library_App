const BaseErrors = require('../errors/base.error');
module.exports=(er,req,res,next)=>{
    if(er instanceof BaseErrors){
        return res.status(er.status).json({message:er.message,errors:er.errors});
    }
    return res.status(500).json({success:false,message:"Internal Server Error"});
}