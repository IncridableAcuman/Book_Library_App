const bcrypt=require('bcrypt')
const BaseError = require('../errors/base.error');
const User = require('../models/user.model');
const UserDTO = require('../dtos/user.dto');
const tokenService=require('./token.service')
const mailService=require('./mail.service');
class AuthService {

    async signUpUser(name,email,password){
        if(!name || !email || !password){
            throw BaseError.BadRequest("All fields are required");
        }
        const existUser =await User.findOne({email});
        if(existUser){
            throw BaseError.BadRequest("User already exist");
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const user=await User.create({name,email,password:hashedPassword});
        const userDto=new UserDTO(user);
        await mailService.sendMail(userDto.email);
        const tokens=tokenService.generateToken({...userDto});
        await tokenService.saveToken(userDto.id,tokens.refreshToken);
        return {userDto,...tokens};
    }
    async signInUser(email,password){
        if(!email || !password){
            throw BaseError.BadRequest("All fields are required");
        }
        const user=await User.findOne({email});
        if(!user){
            throw BaseError.NotFound("User not found");
        }
        const isPassword=await bcrypt.compare(password,user.password);
        if(!isPassword){
            throw BaseError.BadRequest("Password incorrect");
        }
        const userDto=new UserDTO(user);
        const tokens=tokenService.generateToken({...userDto});
        await tokenService.saveToken(userDto.id,tokens.refreshToken);
        return {userDto,...tokens};
    }

    async signOutUser(refreshToken){
        return await tokenService.removeToken(refreshToken);
    }

    async refresh(refreshToken){
        const userPayload=tokenService.validateRefreshToken(refreshToken);
        const tokenDb=await tokenService.findToken(refreshToken);
        if(!userPayload || !tokenDb){
            throw BaseError.BadAuth();
        }
        const user=await User.findById(userPayload.id);
        if(!user){
            throw BaseError.BadAuth();
        }
        const userDto=new UserDTO(user);
        const tokens=tokenService.generateToken({...userDto});
        await tokenService.saveToken(userDto.id,tokens.refreshToken);
        return {userDto,...tokens};
    }

    async forgotPassword(email){
        if(!email){
            throw BaseError.BadRequest("Email is required");
        }
        const user=await User.findOne({email});
        if(!user){
            throw BaseError.NotFound("User not found");
        }
        const userDto=new UserDTO(user);
        const token=tokenService.generateToken({...userDto});
        await mailService.sendForgotPassword(email,`${process.env.CLIENT_URL}/reset-password/${token.accessToken}`);
        return {message:"Reset password link sent to your email"}
    }
    async resetPassword(password,token){
        if(!password || !token){
            throw BaseError.BadRequest("All fields are required");
        }
        if(password.length<8){
            throw BaseError.BadRequest("Password must be at least 8 character long")
        }
        const userPayload=tokenService.validateAccessToken(token);
        if(!userPayload){
            throw BaseError.BadRequest("Invalid token");
        }
        const user=await User.findById(userPayload.id);
        if(!user){
            throw BaseError.NotFound("User not found");
        }
        const hashedPassword=await bcrypt.hash(password,10);
        user.password=hashedPassword;
        await user.save();
        await tokenService.removeToken(token);
        return {message:"Password reset successfully"}

    }
    async getUsersAll(){
        return await User.find().populate('-password');

    }
    async getUserOne(id){
        const user=await User.findById(id);
        if(!user){
            throw BaseError.NotFound("User not found");
        }
        return new UserDTO(user);
    }

    async getProfile(id){
        const user = await User.findById(id).populate('favourites','title author genre');
        if(!user){
            throw BaseError.NotFound("User not found");
        }
        return user;
    }

    async toggleFavoritesBook(userId,bookId){
        const user = await User.findById(userId);
        if(!user){
            throw BaseError.NotFound("User not found");
        }
        const bookIndex=user.favourites.indexOf(bookId);
        if(bookIndex === -1){
            user.favourites.push(bookId);
        } else {
            user.favourites.slice(bookIndex,1);
        }
        await user.save();
        return user;
    }

}
module.exports = new AuthService();