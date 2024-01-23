'use client'
import { ApiError } from "next/dist/server/api-utils"
import Link from "next/link"
import { useEffect, useState } from "react"
import api from "../api/axios"


// import Layout from "../../layout"
export default function Myungham(){
   
    const [name, setName] = useState('');
    const [school, setSchool] = useState('');
    const [age, setAge] = useState('');
    const [session, setSession] = useState('');
    const [MBTi, setMBTi] = useState('');
    const [cardList, setCardList] = useState([]);

    const getCards=async()=>{
        const response = await api.get('/cards')
        console.log("rrrrrrrrr",response)
    }
    
    useEffect(()=>{
        getCards();
    },[])
   
    const addCard=async(event)=>{
        
        event.preventDefault(); //기본 제출 방지
        try{
            const response = await api.post('/cards',{
                name: name,
                school: school,
                age: age,
                session: session,
                MBTi: MBTi
            });
          
            console.log('API 응답:', response);
            const { status } = response;

            if (status === 200) {
                console.log('성공');
            } else {
                throw new Error('카드를 추가할 수 없습니다.');
            }
        } catch (err) {
            console.error('에러', err);
        }
    }
    
    return(
        // <Layout>    
            <div>
                <div className="navbar">
                        <Link href="/">홈</Link>
                        <Link href="/myungham">명함 만들러 가기</Link>
                        <Link href="/aboutUs">About Us</Link>
                </div>
                <h1>대학생 명함 문화 주도, 김명사</h1>
                <h3>대학생도 명함이 필요합니다.</h3>
                <main>
                    <form>
                        <input type="text" placeholder="이름" 
                        name="name"
                        autoComplete="off"
                        id="name"
                        value={name}
                        onChange={(event)=>setName(event.target.value)}/><br/>
                        <input type="text" placeholder="학교" name="school" id="school" value={school}
                        onChange={(event)=>setSchool(event.target.value)}/><br/>
                        <input type="text" placeholder="나이" name="age"
                        id="age"
                        value={age}
                        onChange={(event)=>setAge(event.target.value)}/><br/>
                        <input type="text" placeholder="분야" name="session" id="session"
                        value={session}
                        onChange={(event)=>setSession(event.target.value)}/><br/>
                        <input type="text" placeholder="MBTi" name="MBTi" id="MBTi"
                        value={MBTi}
                        onChange={(event)=>setMBTi(event.target.value)}/><br/>
                        <br/>
                        <button onClick={addCard}>인쇄</button>
                    </form>
                </main>
            </div>
        // </Layout>
    )
}