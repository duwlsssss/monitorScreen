const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cardSchema = Schema({
    name:{
        type: String,
        required: true
    },
    engName: {
        type: String,
        required: true
    },
    school:{
        type: String,
        required: true
    },
    major:{
        type: String,
        required: true
    },
    email:{ //카드 입력 이메일
        type:String,
        required:true
    },
    studentNum:{
        type:Number,
        required: true
    },
    session:{
        type: String,
        required: true
    },
    MBTI:{
        type: String,
        required:true
    },
    ig:{
        type: String,
        required: true
    },
    moto:{
        type: String
    },
    userEmail:{//구글 로그인 이메일
        type:String
    }
    
},{timestamps:true})

const Card = mongoose.model("Card", cardSchema)

module.exports = Card //추출 후 사용