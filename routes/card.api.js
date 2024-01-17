const express = require ('express')
const router = express.Router();





router.post('/', cardController.createCard)

router.get('/', (req,res)=>{
    res.send("성공했습니다 !!")
})

router.put('/:id',(req,res)=>{
    res.send('update task')
})

router.delete('/:id',(req,res)=>{
    res.send('delete task')
})
