const authService = require("../services/auth.service");

class AuthController{

    async signUpUser(req,res,next){
        try {
          const {name,email,password}=req.body;
          const user=await authService.signUpUser(name,email,password);
          res.cookie('refreshToken',user.refreshToken,{httpOnly:true,maxAge:30 * 24 * 60 * 60 * 1000});
          return res.json(user);  
        } catch (error) {
            next(error);
        }
    }

    async signInUser(req,res,next){
        try {
            const {email,password}=req.body;
            const user=await authService.signInUser(email,password);
            res.cookie('refreshToken',user.refreshToken,{httpOnly:true,maxAge:30 * 24 * 60 * 60 * 1000});
            return res.json(user);   
        } catch (error) {
            next(error);
        }
    }

    async signOutUser(req,res,next){
        try {
           const {refreshToken}=req.cookies;
           await authService.signOutUser(refreshToken);
           res.clearCookie("refreshToken");
           return res.json({message:"User logged out"}); 
        } catch (error) {
            next(error);
        }
    }

    async refresh(req,res,next){
        try {
            const {refreshToken}=req.cookies;
            const user=await authService.refresh(refreshToken);
            res.cookie('refreshToken',user.refreshToken,{httpOnly:true,maxAge:30 * 24 * 60 * 60 * 1000});
            return res.json(user); 
        } catch (error) {
            next(error);
        }
    }

    async forgotPassword(req,res,next){
        try {
           const {email}=req.body;
           const user=await authService.forgotPassword(email);
           return res.json(user) 
        } catch (error) {
            next(error);
        }
    }

    async resetPassword(req,res,next){
        try {
          const {password,token}=req.body;
          const user=await authService.resetPassword(password,token);
          return res.json(user)  
        } catch (error) {
            next(error);
        }
    }

    async getUsersAll(req,res,next){
        try {
            const user=await authService.getUsersAll();
            return res.json(user);
        } catch (error) {
            next(error);
        }
    }

    async getUserOne(req,res,next){
        try {
          const {id}=req.params;
          const user=await authService.getUserOne(id);
          return res.json(user);  
        } catch (error) {
            next(error);
        }
    }
}
module.exports=new AuthController();