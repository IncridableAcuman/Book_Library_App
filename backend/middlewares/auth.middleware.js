const BaseError = require('../errors/base.error');
const tokenService = require('../services/token.service');
module.exports=function(req,res,next){
    try {
      const authorization= req.headers;
    if(!authorization){
        return next(BaseError.BadAuth());
    }
    const accessToken=authorization.split(" ")[1];
    if(!accessToken){
        return next(BaseError.BadAuth());
    }
    const userData=tokenService=tokenService.validateAccessToken(accessToken);
    if(!userData){
        return next(BaseError.BadAuth());
    }
    req.user=userData;
    next();  
    } catch (error) {
        return next(BaseError.BadAuth());
    }
    
}