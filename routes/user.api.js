const express = require('express')
const router = express.Router();
const userController = require('../controller/userController')

//회원가입

router.post('/', userController.createUser)

module.exports=router