const {OAuth2Client} = require('google-auth-library');
const User = require('../model/User');
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const bcrypt = require('bcrypt');
const authController ={}

authController.loginWithGoogle = async(req, res)=>{
    try{
        
        const {token} = req.body //토큰값 받아오기 

        const googleClient = new OAuth2Client(GOOGLE_CLIENT_ID) //토큰 해석 라이브러리 , google-auth-library 

        const ticket = await googleClient.verifyIdToken({
            idToken: token,
            audience: GOOGLE_CLIENT_ID, //무엇을 해석할 것인가
        });

        const {email, name} = ticket.getPayload()
        console.log("ee", email, name);
        console.log("qqq" , User)

        let user = await User.findOne({email})
       
        if(!user){
            const randomPassword = "" + Math.floor(Math.random()*10000000)
            const salt = await bcrypt.genSalt(10)
            //랜덤한 임시 비밀번호 생성
            const newPassword = await bcrypt.hash(randomPassword,salt)

            user = new User({ //기존에 이메일이 일치하는 유저가 없으므로 새로 생성(가입)
                name,
                email,
                password: newPassword,
            });

            await user.save();
        }

        const sessionToken = await user.generateToken()//프론트에 토큰값 전달(로그인)
        res.status(200).json({status:"login success", user, token: sessionToken});
    }
    catch(error){

        res.status(400).json({status:"실패", error: error.message});
    }
}

module.exports = authController;