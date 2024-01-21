import Link from "next/link"
// import Layout from "../../layout"
export default function Myungham(){
    return(
        // <Layout>    
            <div>
                <div className="container">
                        <Link className="item" href="/">홈</Link>
                        <Link className="item" href="/myungham">명함 만들러 가기</Link>
                        <Link className="item" href="/aboutUs">About Us</Link>
                </div>
                <h1>대학생 명함 문화 주도, 김명사</h1>
                <h3>대학생도 명함이 필요합니다.</h3>
                <main>
                    <form>
                        <input type="text" placeholder="이름"/><br/>
                        <input type="text" placeholder="학교"/><br/>
                        <input type="text" placeholder="분야"/><br/>
                        <input type="text" placeholder="MBTI"/><br/>
                        <input type="text" placeholder="경력"/><br/>
                        <br/>
                        <button>인쇄</button>
                    </form>
                </main>
            </div>
        // </Layout>
    )
}