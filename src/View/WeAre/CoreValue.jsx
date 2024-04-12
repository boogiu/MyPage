import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import HeroContainer from '../../Layouts/HeroContainer';
import ImgComponent from '../../Layouts/ImgComponent';

function CoreValue() {
  // 모바일 판별
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  // 카드 플립 판별
  const [flippedCards, setFlippedCards] = useState([]);
  // 카드 플립 핸들러
  const handleCardClick = (index) => {
    setFlippedCards((prevFlippedCards) => {
      const newFlippedCards = [...prevFlippedCards];
      newFlippedCards[index] = !newFlippedCards[index];
      return newFlippedCards;
    });
  };

  useEffect(() => {
    // 모바일 판별 : 화면 창 트래킹
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    return (
      <div>
        <HeroContainer imgPath={"/ImgSrc/CoreValueHero.jpg"} pageName={"으랏차차"}/>
        <Container>
          <WhiteDiv>
            <Message >
              <Title>
                <h3><b>인문학</b></h3>
                <h3>人文學</h3>
                <h3>Humanities</h3>
              </Title>
              <div>
                <p>
                  인간과 인간의 근원문제, 
                  인간의 문화에 관심을 갖거나<br/>
                  인간의 가치와 인간만이 지닌 
                  자기표현 능력을 바르게 이해하기 위한 <br/>
                  과학적인 연구 방법에 관심을 갖는 학문 분야로서 
                  인간의 사상과 <br/>문화에 관해 탐구하는 학문
                </p>
              </div>
            </Message>
            <ImgDiv>
            <ImgComponent imagePath={"CoreValue2.png"} 
                Mheight={"250px"}
                Mwidth={"200px"}
                Dwidth={"644px"}
                Dheight={"750px"}/>
            </ImgDiv>
          </WhiteDiv>
          <HumanDiv>
            <Paragraph>
              <p>이제 우리는, AI를 만들고, 가상 세상을 만듭니다<br/>
                그리고, 오럼은 다시 인간을 만들겠습니다</p>
            </Paragraph>
            <SVGDiv  isMobile={isMobile}>
            {isMobile ? (
                <svg xmlns="http://www.w3.org/2000/svg" 
                width="12" height="900" viewBox="0 0 12 2682" fill="none">
                <path d="M0.666605 6C0.666606 8.94552 3.05442 11.3333 5.99994 11.3333C8.94546 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94546 0.666666 5.99994 0.666667C3.05442 0.666667 0.666605 3.05448 0.666605 6ZM0.666722 2676C0.666722 2678.95 3.05454 2681.33 6.00006 2681.33C8.94557 2681.33 11.3334 2678.95 11.3334 2676C11.3334 2673.05 8.94557 2670.67 6.00006 2670.67C3.05454 2670.67 0.666722 2673.05 0.666722 2676ZM4.99994 6L5.00006 2676L7.00006 2676L6.99994 6L4.99994 6Z" fill="url(#paint0_linear_114_459)"/>
                <defs>
                <linearGradient id="paint0_linear_114_459" x1="6.49994" y1="6" x2="6.50006" y2="2676" gradientUnits="userSpaceOnUse">
                <stop offset="0.0645538" stop-color="white"/>
                <stop offset="0.992079"/>
                </linearGradient> 
                </defs>
                </svg>
                ) : (
                <svg xmlns="http://www.w3.org/2000/svg" 
                width="12" height="2682" viewBox="0 0 12 2682" fill="none">
                <path d="M0.666605 6C0.666606 8.94552 3.05442 11.3333 5.99994 11.3333C8.94546 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94546 0.666666 5.99994 0.666667C3.05442 0.666667 0.666605 3.05448 0.666605 6ZM0.666722 2676C0.666722 2678.95 3.05454 2681.33 6.00006 2681.33C8.94557 2681.33 11.3334 2678.95 11.3334 2676C11.3334 2673.05 8.94557 2670.67 6.00006 2670.67C3.05454 2670.67 0.666722 2673.05 0.666722 2676ZM4.99994 6L5.00006 2676L7.00006 2676L6.99994 6L4.99994 6Z" fill="url(#paint0_linear_114_459)"/>
                <defs>
                <linearGradient id="paint0_linear_114_459" x1="6.49994" y1="6" x2="6.50006" y2="2676" gradientUnits="userSpaceOnUse">
                <stop offset="0.0645538" stop-color="white"/>
                <stop offset="0.992079"/>
                </linearGradient> 
                </defs>
                </svg>
                )}
            </SVGDiv>

            <Core BackGroundImage={"/ImgSrc/CoreValue3.png"}>
              <h1>사람을 더 사람답게</h1>
              <p>
                사람이 행복한, 라이프 스타일을 만듭니다<br/>
                안녕하세요, 오럼입니다
              </p>
            </Core>
          </HumanDiv>
          
          <CardConatiner>
            {/* 누르면 회전되어야 함 */}
            <CoreValueDiv>
              <h2>CORE VALUE</h2>
            </CoreValueDiv>
            <CardDiv>
            <Card
              className={flippedCards[0] ? 'flipped' : ''}
              onClick={() => handleCardClick(0)}
              BackGroundImage={"/ImgSrc/Ex.jpg"}
              Pos={"left"}
            >
              <div className="flipProfile__front">
                <SwithchDiv Pos= {flippedCards[0] ? 'flex-end' : 'flex-start'}
                ><SwithchDot/></SwithchDiv>
                <p>TRUSTABLE</p>
                <p># 가장 신뢰할 수 있는</p>
                <p>매번 급변하는 상황 속에서도 항상 신뢰할 수 있는 사회의 구성원이 되고자 합니다.</p>
              </div>
              <div className="flipProfile__back">
                <SwithchDiv Pos= {flippedCards[0] ? 'flex-end' : 'flex-start'}
                ><SwithchDot/></SwithchDiv>
                <p>뒷면</p>
              </div>
            </Card>
            <Card
              className={flippedCards[1] ? 'flipped' : ''}
              onClick={() => handleCardClick(1)}
              BackGroundImage={"/ImgSrc/Ex.jpg"}
              Pos={"center"}
            >
              <div className="flipProfile__front">
                <SwithchDiv Pos= {flippedCards[1] ? 'flex-end' : 'flex-start'}
                ><SwithchDot/></SwithchDiv>
                <p>CONVERTABLE</p>
                <p># 가장 얽매이지 않는</p>
                <p>어떤 관습과 틀에 얽매이지 않고, 지금, 이 순간 우리가 세상을 위해 취해야 하는 모습을 띕니다.</p>
              </div>
              <div className="flipProfile__back">
                <SwithchDiv Pos= {flippedCards[1] ? 'flex-end' : 'flex-start'}
                ><SwithchDot/></SwithchDiv>
                <p>뒷면</p>
              </div>
            </Card>
            <Card
              className={flippedCards[2] ? 'flipped' : ''}
              onClick={() => handleCardClick(2)}
              BackGroundImage={"/ImgSrc/Ex.jpg"}
              Pos={"right"}
            >
              <div className="flipProfile__front">
                <SwithchDiv Pos= {flippedCards[2] ? 'flex-end' : 'flex-start'}
                ><SwithchDot/></SwithchDiv>
                <p>ESSENTIAL</p>
                <p># 가장 필수적인</p>
                <p>다양한 니즈와 시장의 기능들 중에서도, 가장 사용자에게 필수적이고 ‘필요한’ 서비스를 제공하고자 합니다.</p>
              </div>
              <div className="flipProfile__back">
                <SwithchDiv Pos= {flippedCards[2] ? 'flex-end' : 'flex-start'}
                ><SwithchDot/></SwithchDiv>
                <p>뒷면</p>
              </div>
            </Card>
            </CardDiv>
            
          </CardConatiner>
          <TxtDiv Color={"#5C8AFF"}>
            <h2>'오럼'스럽다는 것</h2>
          </TxtDiv>
          <TxtDiv BackGroundImage={"/ImgSrc/CoreValue4.png"} Dheight={"642px"} Mheight={"300px"}>
            <p>지구상의 화폐, 금융 제도가 무너졌을 때,<br/>
            전쟁이 발생하거나 질병 등의 재난이 닥쳤을 때, <br/>
            사회가 무너졌을 때,</p>
          </TxtDiv>
          <TxtDiv Color={"#070707"} Dheight={"326px"} Mheight={"150px"}>
            <p>우리 인류는 ‘황금'을 가치로 사용해왔습니다</p>
          </TxtDiv>
          <LastDiv BackGroundImage={"/ImgSrc/Ex.jpg"}>
            <p>오럼은, ‘황금’처럼..<br/>
            누구에게나 가장 최후까지 가치있는 인프라로 선택받겠습니다</p>
            <h1>황금같은 가치를, AURUM</h1>
          </LastDiv>
        </Container>
      </div>
    );
  }
  
export default CoreValue;

const Container = styled.div`
  background: ${({ theme }) => theme.colors.BoxColor};
  ${({ theme }) => theme.common.flexCenterColumn};
  width: 100%;
  height: auto;
  color: white;
`;
const WhiteDiv = styled.div`
  background: white;
  color : black;
  height : auto;
  width: 100%;
  display : grid;
  @media screen and (min-width: 901px) {
    display : grid;
    grid-template-columns:  1fr 1fr;
  }
  @media screen and (max-width: 900px) {
    display : grid;
    grid-template-rows:  1fr 1fr;
  }
`;
const Message = styled.div`
  padding : 30% 10% 30% 30%;
  display : flex;
  flex-flow : row wrap;
  justify-content : start;
  gap : 10px;
  @media screen and (max-width: 900px) {
    padding : 10% 20% 0% 20%;
  }
`;
const Title = styled.div`
  width : auto;
  height : auto;
  display : grid;
  grid-template-columns : 1fr 1fr 1fr;
  gap : 0;
`;
const ImgDiv = styled.div`
  display:flex;
  justify-content : center;
  align-items : flex-end;
  padding : 10% 30% 0% 10%;
  @media screen and (max-width: 900px) {
    padding : 5% 20% 0% 20%;
  }
`;

const HumanDiv=styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
    background: linear-gradient(to bottom, #141414 0%, #fff 50%, #fff 100%);
    height : auto;
    width: 100%;
    color : white;
`
const Paragraph=styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
  padding : 20% 0% 5% 0%;
  text-align : center;
`
const SVGDiv = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
`;
const Core=styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
  width: 100%;
  padding : 8% 0% 35% 0%;
  color : black;
  text-align : center;
  background-image: url(${({ BackGroundImage }) => `${process.env.PUBLIC_URL}${BackGroundImage}`});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const CardConatiner = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
  background: ${({ theme }) => theme.colors.BoxColor};
  height : auto;
  width: 100%;
  padding : 20% 10%;
  perspective: 1000px; /* 3D 효과를 위한 perspective 설정 */
`;

const CardDiv = styled.div`
  height : auto;
  width:100%;
  display : grid;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 901px) {
    grid-template-columns : 1fr 1fr 1fr;
  }
  @media screen and (max-width: 900px) {
    grid-template-rows : 1fr 1fr 1fr;
    gap : 20px;
  }
`;

const Card = styled.div`
  justify-self:${({ Pos }) => Pos};
  color : black;
  border-radius: 20px;
  background: white;
  transform-style: preserve-3d;
  transition: transform 0.5s; /* transform 속성에 대한 transition 설정 */
  @media screen and (min-width: 901px) {
    height: 430px;
    width: 400px;
  }
  @media screen and (max-width: 900px) {
    height: 280px;
    width: 250px;
  }
  &.flipped {
    transform: rotateY(180deg);
  }

  .flipProfile__front,
  .flipProfile__back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    flex-direction : column;
    align-items: flex-start;
    justify-content: center;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding : 5% 5% 10% 5%;
    
  }

  .flipProfile__back {
    transform: rotateY(180deg);
    background-image: url(${({ BackGroundImage }) => `${process.env.PUBLIC_URL}${BackGroundImage}`});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  
  }
`;
const SwithchDiv = styled.div`
  width: 60px;
  height: 30px;
  background : #EDEDED;
  border-radius : 25px;
  display : flex;
  justify-content : ${({Pos})=>Pos};
  outline: none;
  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
    7px 7px 20px 0px rgba(0,0,0,.1),
    4px 4px 5px 0px rgba(0,0,0,.1);

  position : absolute;
  top : 10%;
`
const SwithchDot = styled.div`
  width: 30px;
  height: 30px;
  background : #FF7A00;
  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
    7px 7px 20px 0px rgba(0,0,0,.1),
    4px 4px 5px 0px rgba(0,0,0,.1);
  border-radius : 50%;
  
`
const CoreValueDiv = styled.div`
  width : 100%;
  text-align : left;
  padding : 5% 0%;
`

const TxtDiv = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
  width : 100%;
  
  background : ${({ Color }) => Color};
  padding : 10%;
  text-align : center;
  @media screen and (min-width: 501px) {
    height : ${({ Dheight }) => Dheight};
  }
  @media screen and (max-width: 500px) {
    height : ${({ Mheight }) => Mheight};
  }
  
  background-image: url(${({ BackGroundImage }) => `${process.env.PUBLIC_URL}${BackGroundImage}`});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  `

const LastDiv = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
  width : 100%;

  text-align : center;
  background-image: url(${({ BackGroundImage }) => `${process.env.PUBLIC_URL}${BackGroundImage}`});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

    @media screen and (min-width: 501px) {
      height : 100vh;
  
    }
    @media screen and (max-width: 500px) {
      height : 60vh;
   
    }
`