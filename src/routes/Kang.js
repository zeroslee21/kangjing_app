import React from "react";
import { Link } from "react-router-dom";
import "./Kang.css";

function Kang({ title, job, years_old, cnlal }) {
  return (
    <div className="kangme">
      <Link
        to={{
          pathname: "/detail",
        }}
      >
        <img
          src={
            "https://lh3.googleusercontent.com/KLnk8gEVPMWo52ngZl_z3nsvPUGpKeLUGLMCT8eOqbyo7wQJLypxKNitRhNIUicAqaQMB8_1IQWSzQQK8if5nC-YV3pGFbbqECbHaIg9bguyLFfNjm5ibq4NNQcEzugiHRC3bTcL=w2400"
          }
          alt="이 앱을 만든 프로그래머 사진"
          title="이 앱을 만든 프로그래머"
        />
        <div className="movie__data">
          <h3 className="movie__title">{(title = "강지웅")}</h3>
          <ul>
            <li>
              <span>현재 나이: {(years_old = "11")}세</span>
            </li>
            <li>
              <span>현재 직업: {(job = "프로그래머")}</span>
            </li>
            <li>
              <span>취미: {(cnlal = "프로그래밍")}</span>
            </li>
          </ul>
          <p className="movie__summary">
            9살 때 '소요' 라는 모임을 시작 했다. 소요는 '코딩이 미래다!' 라는
            것을 알려주고 코딩을 스스로 하게 도와주는 좋은 모임이다. 나는 소요로
            부터 시작해서 <a href="https://scratch.mit.edu">스크래치</a>, html,
            자바스크립트를 했다. 지금은 react(리액트)를 하고 있다. 리액트로 처음
            만든 앱은{" "}
            <a href={"https://jing341.github.io/movie_app_2020"}>영화앱</a>
            이고 이 앱은 2번째로 만든 나를 소개하는 앱이다.
            <a
              href={
                "https://lh3.googleusercontent.com/EkeQlbicAXYa1LO9RudtgWggZr4nranpfvAqatPrPujUQftyjt7-NQn9mLqBIgPHBkpIfNeztiB664-0uc9q-ASYEE-B5TbZvcfi5b6D5_LlwuV-I7WFM0m9Rn9S0_kEwfeY852lIQ=w2400"
              }
            >
              나는 크레스티드 게코(도마뱀)
            </a>{" "}
            2마리, 사슴벌레 5마리 그리고{" "}
            <a
              href={
                "https://cdn.crowdpic.net/detail-thumb/thumb_d_96287DAC2FA0AB4AF87452A536524CEC.jpg"
              }
            >
              리버쿠터(거북이)
            </a>{" "}
            2마리를 키우고 있다. 우리 집에는 사람이 4명 살고 있다. 엄마, 아빠
            그리고 나, 남동생. 동생은 아주 고집불통이고 엄마, 아빠는 혼내지 않을
            때는 아주 좋다. 그리고 나는 드럼을 좋아하는데, 나중에 크면 드럼
            한대를 살 것이다.
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Kang;
