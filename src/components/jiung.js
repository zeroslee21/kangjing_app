import React from "react";
import './jiung.css';
import { Link } from 'react-router-dom';

function Movie({ title, summary, job, years_old, cnlal }){
    return(
        <div className="movie">
            <Link
            to={{
                pathname: '/detail'
            }}
            >
            <img src="https://lh3.googleusercontent.com/KLnk8gEVPMWo52ngZl_z3nsvPUGpKeLUGLMCT8eOqbyo7wQJLypxKNitRhNIUicAqaQMB8_1IQWSzQQK8if5nC-YV3pGFbbqECbHaIg9bguyLFfNjm5ibq4NNQcEzugiHRC3bTcL=w2400" alt="이 앱을 만든 프로그래머 사진" title="이 앱을 만든 프로그래머"/>
    <div className="movie__data">
    <h3 className="movie__title">{title="강지웅"}</h3>
    <ul>
        <li><span>현재 직업: {job="프로그래머"}</span></li>
        <li><span>현재 나이: {years_old="11"}살</span></li>
        <li><span>{cnlal="프로그래밍"}</span></li>
        </ul>
        <p className="movie__summary">{summary="9살 때 부터 스크래치를 시작해서 스크래치 다음에 html을 하고 책을 보며 react를 배워 영화 앱과 이 앱을..."}</p>
    </div>
    </Link>
    </div>
    );
}

export default Movie;