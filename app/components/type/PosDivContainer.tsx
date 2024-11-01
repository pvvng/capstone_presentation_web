'use client';

import { useState } from "react";

export default function PostDivContainer(){

    const [highlight, setHighlight] = useState('black');
    const [nineBgColor, setNineBgColor] = useState([
        'none','none','none','none','none','none','none','none','none','none','none',
    ])
    return (
        <div className="p-3 container">
            <h2 className="fw-bold mt-3 mb-5">형태소 분석의 후처리</h2>
            <div className="bg-white p-3 c-black rounded text-start">
                <div className="row row-center w-100" style={{margin : 'auto'}}>
                    <div className="col-md-3 col-12 text-center">
                        <img src="konlpy.png" width="100%" style={{maxWidth : 280}} />
                    </div>
                    <div className="col-md-9 col-12 text-start">
                        <li className="mb-2">형태소 분석을 위해 <b className="fs-5">Konlpy</b> 형태소 분석 파이썬 패키지 사용합니다.</li>
                        <li className="mb-2">확실한 키워드를 추출하기 위해 다양한 분석기 테스트를 시행했습니다.</li>
                        <li className="mb-2">그 어떤 분석기도 저희가 제작 중인 유튜브 키워드 추출 분석기로는 <b>적합하지 않다</b>는 결론을 얻었습니다.</li>
                        <li className="mb-2">유튜브 댓글에 비문과 <b>예측 불가능한 변수</b>가 많기 때문입니다.</li>
                    </div>
                </div>
            </div>

            <h4 className="mt-3 mb-3 fw-bold text-start">형태소 분석 실패 예시</h4>
            <div className="bg-white p-3 c-black rounded text-start">
                <h5>침착맨 =&gt; 침착(관형사) + 맨(명사)</h5>
                <h5>이나영 =&gt; 이(수사) + 나영(명사)</h5>
                <h5>미라클베리 =&gt; 미라클(명사) + 베리(명사)</h5>
                <p>이외에도 수많은 경우가 존재</p>
            </div>

            <h4 className="mt-3 mb-3 fw-bold text-start">
                조금의 정확도를 포기하고
                <br />
                확실한 키워드를 얻어내는 후처리 로직을 고안
            </h4>
            <div className="w-100 bg-white rounded p-4">
                <p className="fw-bold" style={{color : 'black'}}>
                    이 로직은 
                    <br/>
                    <span className="fs-5" style={{background : highlight, transition : 'all 1s'}} onClick={() => {
                        setHighlight('#FF6666');
                    }}>“댓글을 작성할 때 일반적으로 고유명사(키워드)에는 띄어쓰기를 사용하지 않는다.”</span> 
                    <br/>
                    라는 관찰 결과로부터 시작합니다.
                </p>
                <div>
                    <img src="/그림1.png" width="100%" style={{maxWidth : 485}} />
                    <br/>
                    <img src="/그림2.png" width="100%" style={{maxWidth : 485}} />
                    <br/>
                    <img src="/그림3.png" width="100%" style={{maxWidth : 485}} />
                    <br/>
                    <img src="/그림4.png" width="100%" style={{maxWidth : 485}} />
                    <p className="mt-4" style={{color : 'black'}}>정형화된 띄어쓰기가 이루어지지 않은 <b>원본 댓글</b>와 <b>형태소 분석 결과</b>를 비교하면 의도한 바에 근접한 키워드 값을 얻어낼 수 있습니다.</p>
                </div>
            </div>

            <h4 className="mt-3 mb-3 fw-bold text-start">특이 패턴</h4>
            <div className="bg-white p-3 c-black rounded text-start">
                <h5 className="mb-3">Any Pos + <span style={{background : '#FF6666'}}>Noun</span></h5>
                <h5 className="mb-3"><span style={{background : '#FF6666'}}>Noun</span> + Any Pos</h5> 
                <h5 className="mb-3">Any Pos + <span style={{background : '#FF6666'}}>Noun</span> + Any Pos</h5>
                <h5 className="mb-3"><span style={{background : '#FF6666'}}>Noun</span> + Any Pos + Noun</h5>
                <h5 className="mb-3"><span style={{background : '#FF6666'}}>Noun</span> + <span style={{background : '#FF6666'}}>Noun</span> </h5>
                <p className="m-0">* 여기서 Any Pos는 Josa, Verb를 제외한 모든 품사입니다.</p>
            </div>
            
            <h4 className="mt-3 mb-3 fw-bold text-start">예시 댓글</h4>
            <div className="bg-white p-3 c-black rounded text-start" onDoubleClick={() => {
                setNineBgColor(["black", "#FF6666"])
            }}>
                <h5 className="fw-bold">“안녕하세요 디바제시카님 저는 선플달기 활동을 하고 있는 학생입니다.”</h5>
                <div style={{transition : 'all 1s'}}>
                    <p><span style={{background : nineBgColor[0]}}>(안녕하세요, Adjective)</span></p>
                    <p><span style={{background : nineBgColor[1]}}>(디바, Noun), (제시카, Noun),</span> <span style={{background : nineBgColor[0]}}>(님, Suffix)</span></p>
                    <p><span style={{background : nineBgColor[1]}}>(저, Noun)</span>, <span style={{background : nineBgColor[0]}}>(는, Josa)</span></p>
                    <p><span style={{background : nineBgColor[1]}}>(선, Noun), (플, Exclamation), (달기, Noun)</span></p>
                    <p><span style={{background : nineBgColor[1]}}>(활동, Noun)</span>, <span style={{background : nineBgColor[0]}}>(을, Josa)</span></p>
                    <p><span style={{background : nineBgColor[0]}}>(하고, Verb)</span></p>
                    <p><span style={{background : nineBgColor[0]}}>(있는, Adjective)</span></p>
                    <p><span style={{background : nineBgColor[1]}}>(학생, Noun), (입니다, Adjective)</span></p>
                    <p><span style={{background : nineBgColor[0]}}>(., Punctuation)</span></p>
                </div>
                <p className="fst-italic" style={{color : 'grey'}}>(더블클릭하시면 키워드가 어떻게 추출되는지 알 수 있습니다.)</p>
                <div className="c-black mb-3">
                    <h5>최종적으로 추출된 키워드</h5>
                    <p className="mt-3 fw-bold">디바제시카, 저, 선플달기, 활동, 학생입니다</p>
                </div>
            </div>

            <h4 className="mt-3 mb-3 fw-bold text-start">추가 후처리</h4>
            <div className="bg-white p-3 c-black rounded text-start">
                <p><b className="fs-5">저</b> 와 같은 불용어는 불용어 사전을 통해 제거합니다.</p>
                <p><b className="fs-5">학생입니다</b> 와 같은 오류가 발생한 키워드는 출현 빈도에 따라 순위가 높아지는 키워드의 특성 상 빈도가 진짜 키워드에 비해 상대적으로 낮기 때문에 최종 키워드에 반영될 확률이 낮습니다.</p>
                <p>즉, 후처리 과정을 거친 후에 원하는 데이터를 얻을 확률이 비교적 높아집니다.</p>
                <p>요약하자면, 원본 텍스트 데이터의 띄어쓰기를 참조하여 키워드를 추출한다면 키워드의 정확도가 높아집니다.</p>
            </div>
        </div>
    )
}