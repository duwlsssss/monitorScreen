const mongoose = require('mongoose')
const Schema = mongoose.Schema
const jwt = require('jsonwebtoken');
require('dotenv').config()
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

const userSchema = Schema({
    name:{ //닉네임
        type: String,
        required :true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})

userSchema.methods.generateToken = function(){
    const token = jwt.sign({_id: this._id}, JWT_SECRET_KEY);
    return token;
}

const User = mongoose.model("User",userSchema) //몽구스 model 생성 함수

module.exports = User
