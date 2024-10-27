export default function MiriBogiContainer(){
    return (
        <div className="p-3">
            <h1 className="fw-bold mt-3 mb-5">상세페이지 미리보기</h1>
            <div className="row row-center w-100" style={{margin : 'auto'}}>
                <div className="col-6" style={{maxWidth : 720}}>
                    <img src="/p1.gif" width="80%" style={{borderRadius : 20}} />
                    <div style={{height : '200px'}}>
                        <li className="mt-3">유튜버 정보 (구독자 수, 조회수, 영상 수)</li>
                        <li className="mt-3">영상의 정보 (좋아요, 조회수, 댓글 수)</li>
                    </div>
                </div>
                <div className="col-6" style={{maxWidth : 720}}>
                    <img src="/p2.gif" width="80%" style={{borderRadius : 20}} />
                    <div style={{height : '200px'}}>
                        <li className="mt-3">영상에 달린 댓글을 좋아요 순으로 확인 가능합니다,</li>
                        <li className="mt-3">댓글이 달린 주기성을 분석하여 영상의 화제성 분석 결과를 확인할 수 있습니다.</li>
                    </div>
                </div>
                <div className="col-6" style={{maxWidth : 720}}>
                    <img src="/p3.gif" width="80%" style={{borderRadius : 20}} />
                    <div style={{height : '200px'}}>
                        <li className="mt-3">감정 분석 그래프를 통해 댓글의 긍/부정 댓글의 비율을 알 수 있습니다.</li>
                        <li className="mt-3">키워드 분석 워드 클라우드를 통해 댓글의 키워드를 알 수 있습니다.</li>
                    </div>
                </div>
                <div className="col-6" style={{maxWidth : 720}}>
                    <img src="/p4.gif" width="80%" style={{borderRadius : 20}} />
                    <div style={{height : '200px'}}>
                        <li className="mt-3">좌측 사이드바를 통해 원하는 부분으로 이동 가능합니다.</li>
                    </div>
                </div>
            </div>
        </div>
    )
}