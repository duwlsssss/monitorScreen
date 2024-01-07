const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cardSchema = Schema({
    name:{
        type: String,
        required: true
    },
    school:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    session:{
        type: String,
        required: true
    },
    mbTi:{
        type: String,
        required:true
    }
})

const Card = mongoose.model("Card", cardSchema)

module.exports = Card //추출 후 사용