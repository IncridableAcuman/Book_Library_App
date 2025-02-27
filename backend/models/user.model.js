const {Schema,model} = require('mongoose');

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:8,
        maxlength:1024
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    avatar:{
        type:String,
    },
    favourites:[
        {
            type:Schema.Types.ObjectId,
            ref:"Book"
        }
    ]

},{timestamps:true});
const User = model('User',userSchema);
module.exports = User;