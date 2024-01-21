const express = require ('express')
const router = express.Router();
const cardController = require('../controller/cardController')


router.get('/', cardController.getCard);

router.post('/', cardController.createCard);

// router.put('/:id',(req,res)=>{
//     res.send('update task')
// })

// router.delete('/:id',(req,res)=>{
//     res.send('delete task')
// })

module.exports=router