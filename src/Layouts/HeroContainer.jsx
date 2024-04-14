import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

function HeroContainer({imgPath , pageName}) {
    // 후버 확인
    const [isHovered, setIsHovered] = useState(false);

    //스크롤 위치 체킹
    const [scrollPosition, setScrollPosition] = useState(0);
    const ScrollDown=()=>{
        console.log("내려!");
        window.scrollTo({
            top: scrollPosition + window.innerHeight,
            behavior: 'smooth'
          });
          setScrollPosition(scrollPosition + window.innerHeight);
        // 여기에 스크롤 다운 구현
    }
    

    return (  
        <HeroBox BackGroundImage={imgPath}>
            <PageDiv>
            <PageTitle>{pageName}</PageTitle>
            <PageBtn
                isHovered={isHovered}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={()=>ScrollDown()}
                >
                
                <ArrowDown/>
            </PageBtn>
            </PageDiv>
        </HeroBox>
    );
}

export default HeroContainer;

const HeroBox = styled.div`
  ${({ theme }) => theme.common.HeroContainer};
  background-image: url(${({ BackGroundImage }) => `${process.env.PUBLIC_URL}${BackGroundImage}`});
`
const PageDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    position : absolute;
    top : 70%;
`
const PageTitle = styled.h1`
  color : white;
  margin-bottom : 15px; 
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const PageBtn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 8vmin;
    height: 8vmin;
    backdrop-filter: blur(4px);
    border-radius : 50%;
    color : white;
    background: ${({ isHovered }) => (isHovered ? 'rgba(18, 18, 18, 0.40);' : 'rgba(18, 18, 18, 0.20);')};
`

const ArrowDown = styled(IoIosArrowDown)`
    font-size : 5vmin;
`