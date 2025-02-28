const {Router} = require('express');
const upload = require('../configs/multer.config');
const bookController = require('../controllers/book.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const userAuthMiddleware = require('../middlewares/userAuth.middleware');
const router=Router();

router.post('/create',userAuthMiddleware,bookController.createBook);
router.get('/all-books',authMiddleware,bookController.getAllBooks);

module.exports=router;