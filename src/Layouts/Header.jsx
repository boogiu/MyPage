import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const handleClick = (url) => {navigate(url);};
  
    return (
      <HeaderContainer>
         <div>1</div>
         <div>2</div>
         <div>3</div>
         <div>4</div>
         <div>5</div>
         <div>6</div>
         <div>7</div>
      </HeaderContainer>
    );
  }
  
  export default Header;

  const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  z-index: 1000;
  transition: top 0.7s; /* 이 부분을 추가합니다. */
  color : white;
  padding: 20px 235px;
  grid-template-columns: 1fr 5fr 1fr;
  border : 1px solid red;
  `;

  const HeaderNAv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  z-index: 1000;
  transition: top 0.7s; /* 이 부분을 추가합니다. */
  color : white;
  padding: 20px 235px;
  grid-template-columns: repeat(5, 1fr);
  border : 1px solid red;
  `;

  const HeaderNav = [
    {   index: "1",
        Title: "WE ARE",
        subMenu: [
          { title: "기업 소개", url: "/Introduce" },
          { title: "메시지", url: "/Messages" },
          { title: "으랏차차", url: "/CoreValue" },
          { title: "브랜드", url: "/Brand" }
        ]
    },
    {   index: "2",
    Title: "WE MAKE",
    subMenu: [
      { title: "마케팅", url: "/Marketing" },
      { title: "엔터테인먼트", url: "/Entertainment" },
      { title: "라이프 플랫폼", url: "/LifePlatform" }
    ]
    },
    {   index: "3",
    Title: "OUR STORY",
    subMenu: [
      { title: "안내드립니다", url: "/Columns" },
      { title: "MEMBERS", url: "/Members" },
      { title: "발자국", url: "/FootPrint" },
      { title: "우리입니다", url: "/AboutUs" }
    ]
    },
    {   index: "4 ",
    Title: "WITH US",
    subMenu: [
      { title: "회사 INFO", url: "/CoopInfo" },
      { title: "인재영입", url: "/Recruitment" },
      { title: "Careers", url: "/Careers" },
      { title: "문의사항", url: "/QnA" }
    ]
    },
    {   index: "5",
    Title: "AURUM REPORT",
    subMenu: [
      { title: "오럼 갤러리", url: "/Gallery" },
      { title: "흔적들", url: "/Legacy" },
      { title: "사내게시판", url: "/Community" }
    ]
    },
  ];
