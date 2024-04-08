import styled from "styled-components";

// font size를 객체로 반환
const fontSizes = {
  title: 60,
  subtitle: 30,
  paragraph: 18,
};

// 자주 사용하는 색을 객체
const colors = {
  BoxColor: "#141414",
  TxtColor: "#ffffff",
  MainColor: "#999999",
  PointColor: "#27FF97", 
  HashColor : "#F0BB00"
};

// 자주 사용하는 스타일 속성
const common = {
  flexCenterRow: `
    display: flex;
    justify-contents: center;
    align-items: center;
  `,
  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
  `,
  StyledButton: `
    border : none;
    border-radius: 5px;
    padding: 10px 25px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
    7px 7px 20px 0px rgba(0,0,0,.1),
    4px 4px 5px 0px rgba(0,0,0,.1);
    outline: none;
  `,


};

// theme 객체에 감싸서 반환한다.
const theme = {
  fontSizes,
  colors,
  common,
};

export default theme;