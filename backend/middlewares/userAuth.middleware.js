const BaseError = require('../errors/base.error');
const tokenService = require('../services/token.service');

module.exports=(req,res,next)=>{
    try {
        const{refreshToken} = req.cookies;
        if(!refreshToken){
            return next(BaseError.BadAuth());
        }
        const userData = tokenService.validateRefreshToken(refreshToken);
        if(!userData){
            return next(BaseError.BadAuth());
        }
        req.user=userData;
        next();
    } catch (error) {
        return next(BaseError.BadAuth());
    }
}