import Link from "next/link"
// import Layout from "../../layout"
export default function AboutUs(){
    return(
        // <Layout>
            <div>
                <div className="navbar">
                        <Link href="/">홈</Link>
                        <Link href="/myungham">명함 만들러 가기</Link>
                        <Link href="/aboutUs">About Us</Link>
                </div>
                <h1>김.명.사 제작팀을 소개합니다.</h1>
            </div>
        // {/* </Layout> */}
    )
}