const {Schema,model} = require('mongoose');

const bookSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,   
    },
    description:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true,
        enum:["Fiction","Non-Fiction","History","Science","Fantasy","Biography","Other"]
    },
    coverImage:{
        type:String
    },
    rating:{
        type:Number,
        default:0,
        min:0,
        max:5
    },
    reviews:[
        {
            user:{type:Schema.Types.ObjectId,ref:"User"},
            commet:{type:String},
            rating:{type:Number,default:0,min:0,max:5},
            createdAt:{type:Date,default:Date.now}
        }
    ],
    publishedYear:{
        type:Number,
        required:true
    },
    availabesCopies:{
        type:Number,
        default:1
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true});
const Book = model('Book',bookSchema);
module.exports = Book;