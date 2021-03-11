import React, { useEffect } from 'react';
import './Header.css';
import Nav from './Nav';

const Header = () => {
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
    <div
      id="header"
      //   style={{
      //     height: 400,
      //     background: `url('${process.env.PUBLIC_URL}/img/FrontEnd.jpg')`,
      //   }}
    >
      <h1 id="header-h1"></h1>
      <Nav />
    </div>
  );
};

export default Header;
