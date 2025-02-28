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
         const books = await bookService.getAllBooks(req.query);
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
            const {id} = req.params;
            const updateData  = req.body;
            const book = await bookService.updateBook(id,updateData);
            return res.json(book); 
        } catch (error) {
            next(error);
        }
    }

    async deleteBook(req,res,next){
        try {
            const {id} = req.params;
            const book = await bookService.deleteBook(id);
            return res.json(book);
        } catch (error) {
            next(error);
        }
    }

    async addReview(req,res,next){
        try {
            const {bookId,comment,rating} = req.body;
            const userId=req.user.id;
            const book = await bookService.addReview(bookId,userId,comment,rating);
            return res.json(book);
        } catch (error) {
            next(error);
        }
    }
}
module.exports=new BookController();