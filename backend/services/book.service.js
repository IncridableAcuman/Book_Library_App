const BaseError = require('../errors/base.error');
const User = require('../models/user.model');
const Book = require('../models/book.model');
const BookDTO=require('../dtos/book.dto');
class BookService{

    async createBook(title,author,description,genre,publishedYear,id){
        if(!title || !author || !description || !genre || !publishedYear){
            throw BaseError.BadRequest("All fields are required");
        }
        const user=await User.findById(id);
        if(!user){
            throw BaseError.NotFound("User not found");
        }
        const book = await Book.create({title,author,description,genre,publishedYear,createdBy:user.id});
        const bookDto=new BookDTO(book);
        return bookDto;
    }

    async getAllBooks(){
        return await Book.find().populate('createdBy','name email');
    }

    async getOneBook(id){
        const book = await Book.findById(id);
        if(!book){
            throw BaseError.NotFound("Book not found");
        }
        return new BookDTO(book);
    }
}
module.exports=new BookService();