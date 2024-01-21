const Card=require("../model/BuisnessCard")
const cardController={}

cardController.createCard= async(req,res)=>{
    try{
        const {name, school, age, session, mbTi} = req.body

        const newCard=new Card({name, school, age, session, mbTi})

        await newCard.save()
        res.status(200).json({status:'ok', data: newCard})

    }catch(err){
        res.status(400).json({status:'error', error: err})

    }

}

cardController.getCard=async(req,res)=>{
    try{
        const cardList = await Card.find({})
        res.status(200).json({status:'ok', data: cardList})
    }catch(err){
        res.status(400).json({status:'fail', error: err})
    }
}




module.exports= cardController