const {Router}=require('express');
const authController = require('../controllers/auth.controller');
const authMiddleware=require('../middlewares/auth.middleware');
const router=Router();

router.post('/signup',authController.signUpUser);
router.post('/signin',authController.signInUser);
router.post('/signout',authController.signOutUser);
router.get('/refresh',authController.refresh);
router.post('/forgot-password',authController.forgotPassword);
router.put('/reset-password',authController.resetPassword);
router.get('/all-users',authMiddleware,authController.getUsersAll);
router.get('/user-one/:id',authMiddleware,authController.getUserOne);

module.exports=router;