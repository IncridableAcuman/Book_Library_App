const bookService = require("../services/book.service");

class BookController{

    async createBook(req,res,next){
        try {
          const {title,author,description,genre,publishedYear,coverImage}  = req.body;
          const {id}=req.user;
          const book = await bookService.createBook(title,author,description,genre,coverImage,publishedYear,id);
          return res.json(book);
        } catch (error) {
            next(error);
            console.log(error)
        }
    }

    async getAllBooks(req,res,next){
        try {
         const books = await bookService.getAllBooks();
         return res.json(books);   
        } catch (error) {
            next(error);
        }
    }

    async getOneBook(req,res,next){
        try {
           const {id} = req.params;
           const book = await bookService.getOneBook(id);
           return res.json(book); 
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