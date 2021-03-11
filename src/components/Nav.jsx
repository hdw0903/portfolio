import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <div id="Nav_flexbox">
      <ul>
        <a href="#">
          <li>Home</li>
        </a>
        <a href="#">
          <li>Intro</li>
        </a>
        <a href="#">
          <li>Portfolio</li>
        </a>
        <a href="#">
          <li>Contact</li>
        </a>
      </ul>
    </div>
  );
};

export default Nav;
