import Link from "next/link"
export default function AboutUs(){
    return(
            <div>
                <div className="container">
                        <Link className="item" href="/">홈</Link>
                        <Link className="item" href="/myungham">명함 만들러 가기</Link>
                        <Link className="item" href="/aboutUs">About Us</Link>
                </div>
                <h1>김.명.사 제작팀을 소개합니다.</h1>
            </div>
    )
}