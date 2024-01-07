const express = require('express')//express 프레임워크
const cardController = require('../controller/cardController')
const router = express.Router() //express가 제공하는 라우터 함수 사용

router.post('/', cardController.createCard)
router.get('/', (req,res)=>{
    res.send("get success")
})


module.exports=router
