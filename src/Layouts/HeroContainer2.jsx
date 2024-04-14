import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { Children, useState } from "react";

function HeroContainer2({imgPath , children}) {
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
            {children}
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

export default HeroContainer2;

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
    height: 100%;
    position : absolute;
    text-align : center;
    color : white;
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
    position : absolute;
    top : 75%;

    `

const ArrowDown = styled(IoIosArrowDown)`
    font-size : 5vmin;
`