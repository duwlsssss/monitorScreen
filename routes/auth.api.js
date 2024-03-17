const express = require ('express');
const router = express.Router();
const authController = require('../controller/auth.controller');

//프론트 '/auth/google' 에서 토큰 값 넘어옴 (credential)

router.post('/google', authController.loginWithGoogle);


module.exports=router;

