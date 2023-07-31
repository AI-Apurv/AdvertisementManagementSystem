
import express from 'express';
import { signup } from '../controller/user.controller';
import { login } from '../controller/login.controller';
import { logout } from '../controller/logout.controller';
import { deleteUser } from '../controller/deleteUser.controller';
import { getUserDetails } from '../controller/get.details.controller';
import { forgetPassword, resetPassword } from '../controller/forgetpassword.controller';
import { loginMiddleware, signupMiddleware } from '../middleware/joiValidation';
import authenticateJWT from '../middleware/jwt';
import { upload } from '../middleware/multerMiddleware';
import { setprofilepic } from '../controller/fileUpload.controller';


const router = express.Router();

router.post('/signup',signupMiddleware, signup);
router.post('/login',loginMiddleware,login )
router.post('/logout',authenticateJWT,logout)
router.post('/getDetails', authenticateJWT,getUserDetails)
router.post('/deleteUser',authenticateJWT, deleteUser)
router.post('/forgetPassword',forgetPassword)
router.post('/password-reset/:id/:token',resetPassword)
router.post('/setpicture',authenticateJWT,upload.single('photo'),setprofilepic);

export default router;
