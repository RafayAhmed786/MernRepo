import express from 'express';
import { loginUser, adminLogin, registerUser } from '../controllers/userController.js';

const userRouter = express.Router();
console.log("User Routes Loaded!");

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.post('/admin', adminLogin)

export default userRouter