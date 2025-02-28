const BaseError=require('../errors/base.error');
const tokenService=require('../services/token.service');
module.exports=(req,res,next)=>{
    try {
      const {refreshToken}=req.cookies;
    if(!refreshToken){
        return next(BaseError.UnAuthorization());
    }
    const userPayload=tokenService.validateRefreshToken(refreshToken);
    if(!userPayload){
         return next(BaseError.UnAuthorization());
    }
        req.user=userPayload;
        next();  
    } catch (error) {
        return next(BaseError.UnAuthorization());
    }

}