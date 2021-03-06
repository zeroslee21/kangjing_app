import React from 'react';
import "./Detail.css";
import jang from '../components/jang.jpg';

class Detail extends React.Component {
    render() {
        return (
            <div className="Detail--html">
                <img src="https://lh3.googleusercontent.com/KLnk8gEVPMWo52ngZl_z3nsvPUGpKeLUGLMCT8eOqbyo7wQJLypxKNitRhNIUicAqaQMB8_1IQWSzQQK8if5nC-YV3pGFbbqECbHaIg9bguyLFfNjm5ibq4NNQcEzugiHRC3bTcL=w2400" alt="이 앱을 만든 프로그래머" title="이 앱을 만든 프로그래머" />
        <h1>강지웅</h1>
    <ul>
        <li>현재 직업: 학생</li>
         <li>현재 나이: 11살</li>
         <li>취미: 코딩</li>
         <div className="jangdotype">
         친구: <p><img src={jang} title="이 앱을 만든 프로그래머 친구" alt="이 앱을 만든 프로그래머 친구"/></p> <b>장도영</b>
         </div>
    </ul>
        <p>9살 때 '소요' 라는 모임을 시작 했다. 소요는 코딩을 스스로 하게 도와주는 <strong>좋은 모임</strong>이다. 나는 소요로 부터 시작해서 <a href="https://scratch.mit.edu" rel = "noopener" target = "_ blank">스크래치</a>, html, 자바스크립트를 했다. 지금은 react(리액트)를 하고 있다. 리액트로 처음 만든 앱은 <a href="https://jing341.github.io/movie_app_2020" rel = "noopener" target = "_ blank">영화앱</a>이고 이 앱은 2번째로 만든 나를 소개하는 이 앱이다. 리액트를 시작하면서 부터 이영식 선생님이 에러를 잡아주시고 도와주셨는데 이 앱을 만들 때도 도와주셨다.
        나는 <a href="https://lh3.googleusercontent.com/EkeQlbicAXYa1LO9RudtgWggZr4nranpfvAqatPrPujUQftyjt7-NQn9mLqBIgPHBkpIfNeztiB664-0uc9q-ASYEE-B5TbZvcfi5b6D5_LlwuV-I7WFM0m9Rn9S0_kEwfeY852lIQ=w2400" rel = "noopener" target = "_ blank">크레스티드 게코(도마뱀)</a> 2마리, 사슴벌레 5마리 그리고 <a href="https://lh3.googleusercontent.com/ZYGa77GqZJYRok_-_xBVkBVbqhpB0BTdc_bg2lPrtQpNRGBP1DKtPOThkc-yc3pGbB51UvBmYiLjKhG5rP3bvH6GA8XuXx6v_FEbyxzban-zz1LDyVtwPOvuC03ZKpaCgrENbzOM_Q=w2400" rel = "noopener" target = "_ blank">리버쿠터(거북이)</a> 2마리를 키우고 있다. 우리 집에는 사람이 4명 살고 있다. 엄마, 아빠 그리고 나, 남동생. 동생은 아주 고집불통이고 엄마, 아빠는 혼내지 않을 때는 아주 좋다. 그리고 나는 드럼을 좋아하는데, 나중에 크면 드럼 한대를 살 것이다.</p>
        </div>
        )
    }
}

export default Detail;