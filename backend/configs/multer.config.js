const multer=require('multer');
const path=require('path');
const BaseErrors = require('../errors/base.error');

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/')
    },
    filename:(req,file,cb)=>{
        cb(null,`${Date.now()}-${file.originalname}`);
    }
});

const fileFilter = (req,file,cb)=>{
    const allowedTypes = /jpeg|jpg|png|gif/;
    const exstname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if(exstname && mimetype){
        cb(null,true);
    } else{
        cb(BaseErrors.BadRequest("Only image files can be uploaded!"),false);
    }
}

const upload = multer({
    storage,
    limits:{fileSize:5 * 1024 * 1024},
    fileFilter
});
module.exports=upload;