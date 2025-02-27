const bookService = require("../services/book.service");

class BookController{

    async createBook(req,res,next){
        try {
          const {title,author,description,genre,publishedYear}  = req.body;
          const {id}=req.body;
          const book = await bookService.createBook(title,author,description,genre,publishedYear,id);
          return res.json(book);
        } catch (error) {
            next(error);
        }
    }

    async getAllBooks(req,res,next){
        try {
            
        } catch (error) {
            next(error);
        }
    }

    async getOneBook(req,res,next){
        try {
            
        } catch (error) {
            next(error);
        }
    }

    async updateBook(req,res,next){
        try {
            
        } catch (error) {
            next(error);
        }
    }

    deleteBook(req,res,next){
        try {
            
        } catch (error) {
            next(error);
        }
    }

}
module.exports=new BookController();