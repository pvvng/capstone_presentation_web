export default function PWAcontainer(){
    return (
        <div className="p-3 container">
            <div className="row row-center w-100 mt-5" style={{margin : 'auto'}}>
                <div className="col-4">
                    <img src="PWA.svg" width="100%" style={{maxWidth : 360}} />
                </div>
                <div className="col-8">
                    <h2 className="fw-bold">PWA(프로그레시브 웹 앱)</h2>
                    <p>웹 앱과 네이티브 앱의 장점을 모두 제공하는 진보된 형태의 웹 애플리케이션 개발</p>
                </div>
            </div>
            <div className="mt-5">
                <h4 className="mb-3 fw-bold text-start">웹앱의 장점</h4>
                <div className="bg-white p-3 c-black rounded text-start">
                    <h5 className="mb-3 fw-bold">뛰어난 접근성</h5>
                    <li className="mb-2">앱을 설치하는 것보다 웹사이트에 방문하는 것이 훨씬 쉽고 빠르며, 브라우저가 설치된 어떠한 장치에서도 접근가능하며, 새로운 컨텐츠를 빠르게 배포할 수 있고, 링크로 손쉽게 공유할 수도 있습니다.</li>
                    <li>모바일 사용자의 월간 앱 다운로드 수를 보여주는 통계를 보면 50% 이상의 사용자는 앱을 전혀 다운로드 하지 않습니다. 모바일 사용자들은 한 달에 평균 100개 이상의 웹사이트를 방문한다고 합니다.</li>
                </div>  
                <h4 className="mt-3 mb-3 fw-bold text-start">네이티브 앱의 장점</h4>
                <div className="bg-white p-3 c-black rounded text-start">
                    <h5 className="mb-3 fw-bold">뛰어난 사용자 경험</h5>
                    <li className="mb-2">운영체제와 보다 잘 통합되므로 더 부드러운 사용자 경험을 제공한다는 장점이 있다. 네이티브 앱은 설치할 수 있으므로 오프라인에서 동작하며, 사용자는 홈 화면의 아이콘을 탭하여 브라우저를 사용하는 것보다 더 쉽게 앱에 접근할 수 있습니다.</li>
                    <li>모바일 환경의 사용자의 87%는 네이티브 앱을 주로 이용한다고 합니다.</li>
                </div>      
                <h4 className="mt-3 mb-3 fw-bold text-start">PWA를 사용중인 기업 및 단체</h4>
                <div className="bg-white p-3 c-black rounded text-start">
                    <div className="row row-center" style={{margin : 'auto'}}>
                        <div className="col-3">
                            <img src="PWAEX.png" width="100%" style={{maxWidth : 720}} />
                        </div>
                        <div className="col-9">
                            <ul className="text-start">
                                <li>오프라인에서 동작</li>
                                <li>설치가 가능</li>
                                <li>쉬운 동기화</li>
                                <li>푸시 알림, 등.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h4 className="mt-3 mb-3 fw-bold text-start">구현</h4>
                <div className="bg-white p-3 c-black rounded">
                    <img src="/nextPWA.png" width="100%" style={{maxWidth : 480}} />
                    <p>Next.js에서는 next-pwa를 통해 간단하게 PWA 구현이 가능합니다.</p>
                </div>
            </div>
        </div>
    )
}