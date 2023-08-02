
import express from 'express';
import { signup } from '../controller/user.controller';
import { login } from '../controller/login.controller';
import { logout } from '../controller/logout.controller';
import { deleteUser } from '../controller/deleteUser.controller';
import { getUserDetails } from '../controller/get.details.controller';
import { forgetPassword, resetPassword } from '../controller/forgetpassword.controller';
import { loginMiddleware, signupMiddleware } from '../middleware/joiValidation';
import { addAddress } from '../controller/address.controller';
import authenticateJWT from '../middleware/jwt';
import { upload } from '../middleware/multerMiddleware';
import { addProduct, getProduct } from '../controller/product.controller';
import { setprofilepic } from '../controller/fileUpload.controller';
import { addBid } from '../controller/product.controller';
import { getCategory } from '../controller/category.controller';
import { EditUserDetails } from '../controller/updateUser.controller';
import { deleteProduct } from '../controller/deleteProduct.controller';
const router = express.Router();



router.post('/signup',signupMiddleware, signup);
router.post('/login',loginMiddleware,login )
router.post('/logout',authenticateJWT,logout)
router.post('/getDetails', authenticateJWT,getUserDetails)
router.post('/deleteUser',authenticateJWT, deleteUser)
router.post('/editUserDetails',authenticateJWT,EditUserDetails)
router.post('/forgetPassword',forgetPassword)
router.post('/password-reset/:id/:token',resetPassword)
router.post('/setpicture',authenticateJWT,upload.single('photo'),setprofilepic);
router.post('/addAddress',addAddress);
router.post('/addProduct',addProduct);
router.get('/getProduct',getProduct)
router.post('/addBid/:pid',addBid)
router.get('/getCategory',getCategory)
router.delete('/deleteProduct',authenticateJWT,deleteProduct)
export default router;
