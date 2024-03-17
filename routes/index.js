const express = require('express')//express 프레임워크
const router = express.Router() //express가 제공하는 라우터 함수 사용
const cardApi = require('./card.api')
const authApi = require('./auth.api')
const userApi = require('./user.api')


router.use('/cards', cardApi) 
router.use('/auth', authApi)
router.use('/user',userApi)


module.exports=router
