import React from 'react';
import './About2.css';

function About2(props) {
    console.log(props);
    return (
        <div className="kang_about__container">
            <img src="https://lh3.googleusercontent.com/KLnk8gEVPMWo52ngZl_z3nsvPUGpKeLUGLMCT8eOqbyo7wQJLypxKNitRhNIUicAqaQMB8_1IQWSzQQK8if5nC-YV3pGFbbqECbHaIg9bguyLFfNjm5ibq4NNQcEzugiHRC3bTcL=w2400" alt="이 앱을 만든 프로그래머 사진" title="이 앱을 만든 프로그래머"/>
            <p><span className="about__container2">
            이 앱은 저를 소개하는 앱 입니다.
            </span>
            </p>
            <p><span className="about__Lizard">-강지웅-</span></p>
                </div>
    );
}

export default About2;