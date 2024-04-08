import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const Footer = () => {
    const navigate = useNavigate();
    const handleClick = (url) => {navigate(url);};

    return (
        <FooterContainer>
            <ContainerGrid>
                <MenuGrid>
                {FooterNav.map((nav, index) => (
                        <MenuDiv  
                        id={`menu-box-${index}`} // 각 메뉴박스에 고유한 ID 부여
                        key={index}>
                            <p>{nav.Title}</p>
                            {nav.subMenu.map((subItem, subIndex) => (
                                <p key={subIndex} onClick={() => handleClick(subItem.url)}>
                                {subItem.title}
                                </p>
                            ))}
                        </MenuDiv>
                    ))}
                </MenuGrid>
                
            </ContainerGrid>
        </FooterContainer>
    );
};

export default Footer;

const FooterContainer = styled.div`
    display: flex;
    width : 100%;
    height : 300px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border : 2px solid red;
`

const ContainerGrid = styled.div`
    display: grid;
    width : 100%;
    height : 100%;
    grid-template-rows:3fr 1fr;
    border : 2px solid red;
`
const MenuGrid = styled.div`
    display: grid;
    width : 100%;
    height : 80%;
    grid-template-columns: repeat(5, 1fr);
    border : 2px solid green;
`
const MenuDiv = styled.div`
    border : 2px solid red;
`


const FooterNav = [
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