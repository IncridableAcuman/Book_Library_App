const BaseError = require('../errors/base.error');
const User = require('../models/user.model');
class BookService{

    async createBook(title,author,description,genre,publishedYear,id){
        if(!title || !author || !description || !genre || !publishedYear){
            throw BaseError.BadRequest("All fields are required");
        }
        const user=await User.findById(id);
        if(!user){
            throw BaseError.NotFound("User not found");
        }
        
    }
}
module.exports=new BookService();