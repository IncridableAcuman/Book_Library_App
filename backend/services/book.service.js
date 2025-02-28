const BaseError = require('../errors/base.error');
const User = require('../models/user.model');
const Book = require('../models/book.model');
const BookDTO=require('../dtos/book.dto');
class BookService{

    async createBook(title,author,description,genre,coverImage,publishedYear,id){
        if(!title || !author || !description || !genre || !publishedYear){
            throw BaseError.BadRequest("All fields are required");
        }
        const book = await Book.create({title,author,description,genre,coverImage,publishedYear,createdBy:id});
        const bookDto=new BookDTO(book);
        return bookDto;
    }

    async getAllBooks(query){
        const filter = {};
        if(query.genre){
            filter.genre=query.genre;
        }
        if(query.author){
            filter.author={$regex:query.author,$options:"i"}
        }
        if(query.publishedYear){
            filter.publishedYear=query.publishedYear;
        }
        if(query.minRating && query.maxRating){
            filter.rating={$gte:query.minRating,$lte:query.maxRating}
        } else if(query.minRating) {
            filter.rating={$gte:query.minRating}
        } else if(query.maxRating){
            filter.rating={$lte:query.maxRating}
        }
        return await Book.find(filter).populate('createdBy','name email');
    }

    async getOneBook(id){
        const book = await Book.findById(id);
        if(!book){
            throw BaseError.NotFound("Book not found");
        }
        return new BookDTO(book);
    }

    async updateBook(id,updateData){
        const book= await Book.findByIdAndUpdate(id,{...updateData},{new:true});
        if(!book){
            throw BaseError.NotFound("Book not found");
        }
        return new BookDTO(book);
    }

    async deleteBook(id){
        const book = await Book.findByIdAndDelete(id);
        if(!book){
            throw BaseError.NotFound("Book not found");
        }
        return new BookDTO(book);
    }

    async addReview(bookId,userId,comment,rating){
        if(!rating || rating < 0 || rating > 5){
            throw BaseError.BadRequest("Rating must be between 0 and 5.");
        }
        const book = await Book.findById(bookId);
        if(!book){
            throw BaseError.NotFound("Book not found");
        }
        const existingUser = book.reviews.find(review=>review.user.toString() === userId);
        if(existingUser){
            throw BaseError.BadRequest("You have already reviewed this book.");
        }
        book.reviews.push({user:userId,comment,rating});
        const totalRating = book.reviews.reduce((sum,review)=>sum+review.rating,0);
        book.rating=totalRating/book.reviews.length;
        await book.save();
        return book;
    }
}
module.exports=new BookService();