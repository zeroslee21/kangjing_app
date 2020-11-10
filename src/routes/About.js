import React from 'react';
import './About.css';
import qlgodrl from '../components/qlgodrl.png';
import dlsrks from '../components/dlsrks.png';

function About() {
    return (
        <div className="gif">
            <h1>내가 만든 이미지, gif 모음집</h1>
            <p><img src="https://lh3.googleusercontent.com/VRhksOIe6DH7iI6MfTxIJ5qRGiJXjNw2_m_EoN6UNejz6AxwKAWOjMGeSPgIl_gL5Rt0mZJV8F49ifxmEkqr5FJhwmEtD1ay414eL1f8Rb8Cyy0CXMyfgIJmZ2mXAmR4r7RDKjVnKQ=w2400" alt="Jiung" title="Jiung"/></p>
            <p>
                <li>이름: jiung</li>
                <li>만든 날짜: 2020년 10월 25일</li>
                <li>그림 종류: gif</li>
                <li>만든 도구: <a href="https://scratch.mit.edu">스크래치</a>, <a href="https://ezgif.com/video-to-gif">동영상 gif 변환기</a>, 네이버 캡처</li>
            </p>
            <p><img src={qlgodrl} title="특수 비행원" alt="특수 비행원"/></p>
            <p>
                <ul>
                <li>이름: 특수 비행원</li>
                <li>만든 날짜: 2020년 11월 O일</li>
                <li>그림 종류: 손그림</li>
                <li>만든 도구: 연필, 종이 그리고 색연필</li>
                </ul>
            </p>
            <p><img src={dlsrks} title="잉간" alt="잉간"/></p>
            <p>
            <ul>
                <li>이름: 잉간의 얼굴</li>
                <li>만든 날짜: 2020년 11월 5일</li>
                <li>그림 종류: 컴퓨터 그림</li>
                <li>만든 도구: <a href='https://scratch.mit.edu'>스크래치</a> 그림판</li>
                </ul>
            </p>
                </div>
    );
}

export default About;