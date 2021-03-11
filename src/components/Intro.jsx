import React, { useEffect } from 'react';
import './Intro.css';
// import Nav from './Nav';

const Intro = () => {
  useEffect(() => {
    let i = 0;
    function typeWriter() {
      const txt = '프론트엔드 개발자 한동원의 포트폴리오입니다.';
      if (i < txt.length) {
        document.getElementById('header-h1').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    }
    typeWriter();
  }, []);
  return (
    <div id="intro-container">
      <div className="intro">
        <div className="profile-section">
          <img
            src={process.env.PUBLIC_URL + '/img/favicon.png'}
            className="profile-image"
            alt="profile"
          />
          <b>Han Dongwon</b>
          <div
            id="header"
            //   style={{
            //     height: 400,
            //     background: `url('${process.env.PUBLIC_URL}/img/FrontEnd.jpg')`,
            //   }}
          >
            <h1 id="header-h1"></h1>
            {/* <Nav /> */}
          </div>
          <p>끊임없이 변화하는 웹 세상 속 여러분과 함께 성장하고 싶습니다.</p>
        </div>
        <hr />
        <div className="intro-flex">
          <div className="intro-left">
            <h3>경력</h3>
            <ul className="skill">
              <li>신입</li>
            </ul>
            <h3>스킬</h3>
            <ul className="skill">
              <li>HTML/CSS</li>
              <li>MarkDown</li>
              <li>JavaScript</li>
              <li>React.js</li>
            </ul>
            <h3>경험</h3>
            <ul className="skill">
              <li>Restfull API</li>
              <li>Node.js(express, nodemonm, cors 등)</li>
              <li>AWS</li>
              <li>travis</li>
              <li>Docker</li>
              <li>Postman</li>
            </ul>
          </div>
          <ul className="intro-right">
            <li>1994.09.03</li>
            <li>010-4944-1412</li>
            <li>hdw0903@naver.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Intro;
