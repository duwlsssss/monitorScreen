const express = require ('express')
const mongoose = require ('mongoose')
const bodyParser = require('body-parser') //설치한 npm 들 정의
const indexRouter = require("./routes/index")


const app = express()
app.use(bodyParser.json())
app.use("/api",indexRouter)


const mongoURI =`mongodb://localhost:27017/` //DB 주소, DB 이름

mongoose.connect(mongoURI).then(()=>{
    console.log("mongoose connected")
}).catch((err)=>{ //오류가 생긴 경우
    console.log("DB connection FAIL :", err)
}) //몽구스랑 몽고 db 연결 ,useNewUrl : 버전 상관 없이 잘 사용할 수 있도록.



app.listen(8000,()=>{ //모든 요청이 오는 주소, Port number = app listener
    console.log("server is on 8000.")
}) 