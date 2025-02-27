const jwt = require('jsonwebtoken');
const Token = require('../models/token.model');
class TokenService {

    generateToken(paylaod) {
        const accessToken =  jwt.sign(paylaod,process.env.JWT_ACCESS,{expiresIn:'15m'});
        const refreshToken = jwt.sign(paylaod,process.env.JWT_REFRESH,{expiresIn:'30d'});
        return {accessToken,refreshToken};
    }

    async saveToken(userId,refreshToken){
        const user = await Token.findOne({user:userId});
        if(user){
            user.refreshToken = refreshToken;
            return user.save();
        }
        const token = Token.create({user:userId,refreshToken});
        return token;
    }

    async findToken(refreshToken){
        return Token.findOne({refreshToken});
    }

    async removeToken(refreshToken){
        return Token.findOneAndDelete({refreshToken});
    }

    validateAccessToken(token){
        try {
            return jwt.verify(token,process.env.JWT_ACCESS);
        } catch (error) {
            return null;
        }
    }

    validateRefreshToken(token){
        try {
            return jwt.verify(token,process.env.JWT_REFRESH);
        } catch (error) {
            return null;
        }
    }
}
module.exports = new TokenService();