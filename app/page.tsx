'use client';

import 'animate.css';
import ColContainer from "./components/ColContainer";

export default function Home() {
  return (
    <>
      <div className="row row-center w-100" style={{margin : 'auto'}}>
        <div 
          className="box-container power-center mb-3" 
          style={{height : '100vh', borderRadius : 20}}
        >
          <div>
            <h1 className="mt-3 animate__animated animate__fadeInUp">유튜브 댓글 분석기</h1>
            <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">추가 발표 자료</p>
          </div>
        </div>
        <ColContainer color="black" type="1" />
        <ColContainer color="black" type="2" />
      </div>
    </>
  );
}
