const nodemailer = require('nodemailer');

class MailService {

    constructor(){
        this.transporter = nodemailer.createTransport({
            host:process.env.SMTP_HOST,
            port:process.env.SMTP_PORT,
            auth:{
                user:process.env.SMTP_USER,
                pass:process.env.SMTP_PASS
            }
        });
    }

    async sendMail(email){
        await this.transporter.sendMail({
            from : process.env.SMTP_USER,
            to: email,
            subject : "Your Account successfully create",
          html: `<div style="max-width: 600px; margin: auto; padding: 20px; font-family: Arial, sans-serif; border: 1px solid #ddd; border-radius: 10px; background: #f9f9f9;">
                <div style="text-align: center; padding: 10px;">
                    <h2 style="color: #333;">Welcome to Our Platform 🎉</h2>
                    <p style="color: #555; font-size: 16px;">Hello,</p>
                    <p style="color: #555; font-size: 16px;">
                        Your account has been successfully created. We are excited to have you onboard! 
                    </p>
                </div>
                <div style="text-align: center; margin-top: 20px;">
                    <a href="https://yourwebsite.com/login" 
                       style="display: inline-block; padding: 12px 24px; background: #007bff; color: white; text-decoration: none; border-radius: 5px; font-size: 16px;">
                        Login to Your Account
                    </a>
                </div>
                <div style="text-align: center; margin-top: 20px; font-size: 14px; color: #888;">
                    <p>If you did not create this account, please ignore this email.</p>
                    <p>© 2025 Your Company. All rights reserved.</p>
                </div>
            </div>`
        });
    }

    async sendForgotPassword(email,token) {
        await this.transporter.sendMail({
            from:process.env.SMTP_USER,
            to:email,
            subject:"Reset Your Password",
            html:` <div style="max-width: 600px; margin: auto; padding: 20px; font-family: Arial, sans-serif; border: 1px solid #ddd; border-radius: 10px; background: #f9f9f9;">
                <div style="text-align: center; padding: 10px;">
                    <h2 style="color: #333;">🔑 Reset Your Password</h2>
                    <p style="color: #555; font-size: 16px;">Hello,</p>
                    <p style="color: #555; font-size: 16px;">
                        We received a request to reset your password. Click the button below to reset your password:
                    </p>
                </div>
                <div style="text-align: center; margin-top: 20px;">
                    <a href="${token}" 
                       style="display: inline-block; padding: 12px 24px; background: #007bff; color: white; text-decoration: none; border-radius: 5px; font-size: 16px;">
                        Reset Password
                    </a>
                </div>
                <div style="text-align: center; margin-top: 20px; font-size: 14px; color: #888;">
                    <p>If you did not request a password reset, please ignore this email.</p>
                    <p>For security reasons, this link will expire in 15 minutes.</p>
                    <p>© 2025 Your Company. All rights reserved.</p>
                </div>
            </div>`
        })
    }
}
module.exports = new MailService();