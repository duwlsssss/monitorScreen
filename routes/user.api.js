const express = require('express')
const router = express.Router();
const userController = require('../controller/userController')

//회원가입 라우터 세팅
router.post('/', userController.createUser)
//로그인 라우터 세팅
router.post('/', userController.loginWithEmail)

module.exports=router