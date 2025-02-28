const {Router} = require('express');
const upload = require('../configs/multer.config');
const bookController = require('../controllers/book.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const userAuthMiddleware = require('../middlewares/userAuth.middleware');
const router=Router();

router.post('/create',userAuthMiddleware,bookController.createBook);
router.get('/all-books',userAuthMiddleware,bookController.getAllBooks);
router.get('/book-one/:id',userAuthMiddleware,bookController.getOneBook);
router.put('/update/:id',userAuthMiddleware,bookController.updateBook);
router.delete('/delete/:id',userAuthMiddleware,bookController.deleteBook);
router.post('/review',userAuthMiddleware,bookController.addReview);

module.exports=router;