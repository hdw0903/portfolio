import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const portfolioInfo = [
    {
      href: 'https://hdw0903.github.io',
      src: 'https://hdw0903.github.io/images/blog_logo.png',
      Onelineexplanation: '공부 내용을 정리하는 블로그입니다.',
      description: [
        'Hexo Icarus테마와 GithubPages를 이용한 블로그',
        '기존 테마에서 간단하게 꾸며보고 광고도 달아봤습니다.',
      ],
    },
    {
      href: 'https://hdw0903.github.io/search-weather/',
      src:
        'https://raw.githubusercontent.com/hdw0903/search-weather/master/search-weather.png',
      Onelineexplanation:
        '구글 위치정보 API를 이용한 도시검색으로 날씨 확인 사이트.',
      description: [
        '도시명 검색으로 5일간의 날씨 정보를 알려줍니다.',
        'Google Map Geocoding API를 기반으로 검색한 도시의 위, 경도 값을 가져옵니다.',
        '받아온 위, 경도값을 open-weather API에 전달하여 해당 하는 도시의 날씨 정보를 받아옵니다.',
      ],
      readme: 'https://github.com/hdw0903/search-weather',
    },
    {
      href: 'https://hdw0903.github.io/papago/',
      src:
        'https://raw.githubusercontent.com/hdw0903/papago/master/public/img/intro_img.png',
      Onelineexplanation: '네이버 Papago API를 이용한 언어번역 사이트.',
      description: ['Hexo Icarus테마와 GithubPages를 이용한 블로그'],
      readme: 'https://github.com/hdw0903/papago',
    },
  ];
  const portfolioElement = portfolioInfo.map((el) => {
    const readmeLink = (el) => {
      return (
        <a href={el.readme} className="readme" target="_blank" rel="noreferrer">
          README
        </a>
      );
    };
    return (
      <ul key={el.index}>
        <li className="portfolio-imgLink">
          <a href={el.href} target="_blank" rel="noreferrer">
            <img src={el.src} alt={el.alt} />
          </a>
        </li>
        <p>
          {el.Onelineexplanation}
          {el.readme && readmeLink(el)}
        </p>
        {el.description.map((list) => {
          return (
            <li
              key={list.index}
              style={{
                listStyle: 'circle',
              }}
            >
              {list}
            </li>
          );
        })}
      </ul>
    );
  });
  return (
    <div id="Portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-list">
        <div className="portfolio-list-item">{portfolioElement}</div>
      </div>
    </div>
  );
};

export default Portfolio;
