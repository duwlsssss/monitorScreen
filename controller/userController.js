const User = require('../model/User')
const userController = {}
const bcrypt = require('bcrypt') //암호화 라이브러리
const saltRounds = 10 //암호화 횟수 지정

//회원가입

userController.createUser=async(req,res)=>{
    try{
        const {name, email, password} = req.body
        const user = await User.findOne({email})
            if(user){
                throw new Error("이미 가입이 된 유저입니다.")
            }
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = new User({name, email, password:hash})
        await newUser.save()
        res.status(200).json({status: "success"})
       
            }catch(error){
                res.status(400).json({status:"fail", error})
            }
}


//로그인

userController.loginWithEmail= async (req,res)=>{
    try{

        const {email, password} = req.body //1. 이메일 및 비밀번호 정보 읽어오기
        const user = await User.findOne({email}) //2. 이메일과 일치하는 유저정보 찾기
        if(user){ //3. 일치하는 유저가 있다면, 비밀번호 비교.
            const isMatch = bcrypt.compareSync(password, user.password);
            if(isMatch){ //3-1. 비밀번호까지 일치한다면, 토큰 발행.

            }
        }
    }catch(error){

    }
}

module.exports=userController