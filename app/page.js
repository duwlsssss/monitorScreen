import Link from "next/link"
import Image from "next/image"
import logoImg from '/public/images/임시로고.png'
import { useContext } from 'react';
// import Layout from "../layout"

export default function MonitorScreen(){

    return(
            <div>
                <h1><strong>KimMyungsa.com</strong> 에 오신 것을 환영합니다.</h1>
                <div className="container">
                        <Link className="item" href="/">홈</Link>
                        <Link className="item" href="/myungham">명함 만들러 가기</Link>
                        <Link className="item" href="/aboutUs">About Us</Link>
                </div>
                <main>
                    <div className="logo">
                        <Image src={logoImg} className="logo-img"/>
                    </div>
                </main>
                <footer>
                    네트워크관리사 : 12.07~12.31
                    웹 프로그래머 : kim soo hyun, kim yeo jin
                    웹 디자이너 : kim da seul <br/><br/>
                    데이터관리사 : 1.22.3
                    제작 기간: 2023.12 ~ 2024.04<br/><br/>
                    all copyright @ global Media - BLOOM 2024 graduation gallery
                </footer>
            </div>
    )
}