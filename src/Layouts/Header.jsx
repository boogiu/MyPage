import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { IoMdMenu,IoIosArrowDown ,IoIosArrowUp  } from "react-icons/io";

function Header() {
  const navigate = useNavigate();
  const handleClick = (url) => {
    //세부 메뉴 이동 후 state 초기화
    navigate(url);
    MenuReset();
  };
  // 모바일 판별
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  // 햄버거 오픈 : 모바일
  const [isMenuOpen, setisMenuOpen] = useState(false);
  //세부 메뉴 인덱스 확인 : 모바일
  const [openIndex, setOpenIndex] = useState(null);
  //세부 메뉴 초기화 : 모바일
  const MenuReset = () => {
    setisMenuOpen(false);
    setOpenIndex(null);
  };

  // 후버 확인:데스크탑
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // 모바일 판별 : 화면 창 트래킹
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    return (
      <HeaderDiv>
         {isMobile ? (
          // 모바일네비게이션
          <MobileHeader>
              <HambergerIcon onClick={()=>setisMenuOpen(!isMenuOpen)}/>
            <NavBox isMenuOpen={isMenuOpen}>
              <LogoDiv onClick={() => handleClick('/')}>Aurum</LogoDiv>
              {HeaderList.map((nav, index) => (
                    <MainNavDiv  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    isOpen={openIndex === index}
                    id={`menu-${index}`} // 각 메뉴박스에 고유한 ID 부여
                    key={index}>

                      <MainDiv>
                      <div>{nav.Title}</div>
                      {openIndex === index? 
                      (<div><IoIosArrowUp/></div>):
                      (<div><IoIosArrowDown/></div>)}
                      </MainDiv>

                      {openIndex === index && (        
                      <SubNavDiv>
                        {nav.subMenu.map((subItem, subIndex) => (
                          <SubDiv key={subIndex} onClick={() => handleClick(subItem.url)}>
                            {subItem.title}
                          </SubDiv>
                        ))}
                      </SubNavDiv>
                      )}

                  </MainNavDiv>
                ))}
            </NavBox>
          </MobileHeader>
        ) : (

          // 데스크탑 네비게이션
        <DeskHeader
          isHovered={isHovered}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>

          <LogoDiv onClick={() => handleClick('/')}>Aurum</LogoDiv>
          <HeaderNav>
              {HeaderList.map((nav, index) => (
                <div
                  id={`menu-box-${index}`} // 각 메뉴박스에 고유한 ID 부여
                  key={index}>
                  <HeaderTitle>
                    <div style={{height : "50px"}}>{nav.Title}</div>
                  </HeaderTitle>
                
                  {nav.subMenu.map((subItem, subIndex) => (
                      <SubNav isHovered={isHovered}
                      key={subIndex} onClick={() => handleClick(subItem.url)}>
                      {subItem.title}
                      </SubNav>
                  ))}
                </div>
              ))}
              
          </HeaderNav>
          <LanguageDiv>
              Language
          </LanguageDiv>
        </DeskHeader>
         )}
      </HeaderDiv>
    );
  }
  
  export default Header;

    const HeaderDiv = styled.div`
    overflow-x : hidden;
    height : auto;
  `;

  // 여기부터 모바일
  const MobileHeader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    padding: 25px 50px ;
    display : flex;
    justify-content : flex-end;
    ailgn-items :center;
  `;
  
  const HambergerIcon = styled(IoMdMenu)`
    position: fixed;
    font-size : 10vmin;
    color : white;
    z-index: 1001;
  `
  const NavBox = styled.div`
    position: fixed;
    top: 0;
    background : ${({ theme }) => theme.colors.BoxColor};
    width: 100%;
    height : 100vh;
    transition: 0.5s ease;  
    left: ${({ isMenuOpen }) => (isMenuOpen ? '0' : '100%')};
    color : white;
    padding: 100px 50px 20px 50px;
    display : flex;
    flex-flow : column wrap;
    gap : 10px;

  `
  const MainNavDiv = styled.div`
    display : flex;
    flex-flow : column wrap;
    justify-content: centet;
    align-items: flex-start;
  `
  const MainDiv = styled.div`
    width :100%;
    display : flex;
    flex-flow : row wrap;
    justify-content: space-between;
    align-items: center;
    margin : 10px 0px;
  `
  const SubNavDiv = styled.div`
    display : flex;
    flex-flow : column wrap;
    align-items: flex-start;
  `
  const SubDiv = styled.div`
    margin : 5px 0px;
  `

  // 여기부터 데스크탑
  const DeskHeader = styled.div`
    position : absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    padding: 25px 50px ;
    display : grid;
    grid-template-columns: 1fr 3fr 0.5fr;
    background: rgba(5, 5, 5, 0.20);
    backdrop-filter: blur(50px);
    color : white;
    height: ${({ isHovered }) => (isHovered ? '200px' : '90px')};
  `;

  const LogoDiv = styled.div`
    display: flex;
    cursor: pointer;
  `

  const LanguageDiv = styled.div`
    display: flex;
    justify-self : flex-end;
  `

  const HeaderNav = styled.div`
    display : grid;
    grid-template-columns: repeat(5, 1fr);
    cursor: pointer;
  `;

  const HeaderTitle = styled.div`
    margin-bottom : 10px;
  `;

  const SubNav = styled.div`
    display: ${({ isHovered }) => (isHovered ? 'flex' : 'none')};
    justify-content: flex-start;
    align-items: center;
  `;


  const HeaderList = [
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
