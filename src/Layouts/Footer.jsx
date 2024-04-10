import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { IoLogoTwitter,IoLogoYoutube ,IoLogoInstagram,IoIosText  } from "react-icons/io";

const Footer = () => {
    const navigate = useNavigate();
    const handleClick = (url) => {navigate(url);};

    return (
        <FooterContainer>
            <ContainerGrid>
                <LinkGrid>
                    <MenuGrid>
                    {FooterNav.map((nav, index) => (
                            <MenuDiv  
                            id={`menu-box-${index}`} // 각 메뉴박스에 고유한 ID 부여
                            key={index}>
                                <FooterMain>{nav.Title}</FooterMain>
                                {nav.subMenu.map((subItem, subIndex) => (
                                    <FooterSub key={subIndex} onClick={() => handleClick(subItem.url)}>
                                    {subItem.title}
                                    </FooterSub>
                                ))}
                            </MenuDiv>
                        ))}
                    </MenuGrid>
                    <SNSBox>
                        <SNSFooter>Social Media</SNSFooter>
                        <SNSFooter><IoLogoYoutube/>YOUTUBE</SNSFooter>
                        <SNSFooter><IoLogoInstagram/>INSTAGRAM</SNSFooter>
                        <SNSFooter><IoIosText/>NAVER BLOG</SNSFooter>
                        <SNSFooter><IoLogoTwitter/>TWITTER</SNSFooter>
                    </SNSBox>
                </LinkGrid>
                <InfoGrid>
                    <div>
                        <FooterMain>(주)오럼 Aurum.inc</FooterMain>
                        <InfoDiv>
                            <FooterlighrGrey>사업자 등록번호: 538-86-01639 |</FooterlighrGrey>
                            <FooterlighrGrey>대표: 박동근 |</FooterlighrGrey>
                            <FooterlighrGrey>대표 메일: ask@aurum.me |</FooterlighrGrey>
                            <FooterlighrGrey>대표 번호: 02-922-0094 |</FooterlighrGrey>
                            <FooterlighrGrey>주소:서울시 성북구 고려대로 26길 49, 태종빌딩 2층 |</FooterlighrGrey> 
                            <FooterlighrGrey>Post: 02856</FooterlighrGrey>
                        </InfoDiv>
                    </div>
                    <SiteBox>
                        관련 사이트
                    </SiteBox>
                </InfoGrid> 
            </ContainerGrid>
        </FooterContainer>
    );
};

export default Footer;



//   이게 아니라, 미디어 쿼리로 푸터 네비게이션이 없어지고
//   좀더 깔끔한 SNS 푸터 형태가 맞겠다
const FooterContainer = styled.div`
    display: flex;
    width : 100%;
    height : auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color : #F2F2F2;
    overflow:hidden;
    @media screen and (max-width: 500px) {
        padding : 15px 20px;
    }
    @media screen and (min-width: 501px) {
        padding : 10% 15%;
    }
    font-family : '수트';
`

const ContainerGrid = styled.div`
    display: grid;
    width : 100%;
    height : 100%;

    gap : 30px;
    @media screen and (max-width: 500px) {
        grid-template-rows: 0.5fr 1fr;
    }
    @media screen and (min-width: 501px) {
        grid-template-rows: 1.5fr 1fr;
    }
`

const LinkGrid = styled.div`
    display: grid;
    width : 100%;    
    @media screen and (min-width: 501px) {
        grid-template-columns:  5fr 1fr;
        gap : 15px;
    }
`

const MenuGrid = styled.div`
    display: grid;
    width : 100%;
    @media screen and (max-width: 500px) {
        display:none;
    }
    @media screen and (min-width: 501px) {
        grid-template-columns: repeat(5, 1fr);
        gap : 5px;
    }
`
const MenuDiv = styled.div`
`
const SNSBox = styled.div`
    display : flex;
    flex-direction: column;
    
`
const InfoGrid = styled.div`
    display: grid;
    justify-content: flex-start;
    align-items: center;
    @media screen and (max-width: 500px) {
        grid-template-rows: 3fr 1fr;
    }
    @media screen and (min-width: 501px) {
        grid-template-columns: 3fr 1fr;
    }
`
const InfoDiv = styled.div`
    display: flex;
    flex-flow : row wrap;
    gap : 10px;
    justify-content: flex-start;
    align-items: center;
`
const SiteBox = styled.div`
    min-width: 160px;
    padding: 10px;
    gap: 10px;
    border-radius: 12px;
    border: 1px solid #838383;
    background: #FFF;
    font-weight: 500;
`
const  FooterMain = styled.p`
    color : ${({ theme }) => theme.colors.BlackTxt};
    font-weight: 600;
    line-height: 200%; /* 20px */
`
const  FooterSub = styled.p`
    color : ${({ theme }) => theme.colors.GreyTxt};
    font-family : '수트';
    line-height: 150%; /* 20px */
    font-weight: 500;
`
const  FooterlighrGrey = styled.p`
    color : #454545;
    font-family : '수트';
`
const  SNSFooter = styled.p`
    color : ${({ theme }) => theme.colors.GreyTxt};
    font-family : '수트';
    font-weight: 600;
    line-height: 200%; /* 20px */
    display: flex;
    justify-content: flex-start;
    align-items: center;
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
