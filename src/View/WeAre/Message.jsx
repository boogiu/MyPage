import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import HeroContainer from '../../Layouts/HeroContainer';
import { IoIosArrowForward,IoIosArrowBack  } from "react-icons/io";
import ImgComponent from '../../Layouts/ImgComponent';

function Messages() {
  const [slideIndex, setSlideIndex] = useState(0);
 
  const nextIndex = () => {
    setSlideIndex(prevIndex => (prevIndex + 1) % 3); // 순환하여 다음 슬라이드로 이동
  };

  const prevIndex = () => {
    setSlideIndex(prevIndex => (prevIndex === 0 ? 2 : prevIndex - 1)); // 순환하여 이전 슬라이드로 이동
  };

  return (
    <Container>
      <HeroContainer imgPath={"/ImgSrc/MessageHero.png"} pageName="메시지" />
      <SlideContainer  BackGroundImage={"/ImgSrc/Ex.jpg"}>
      <Wrapper>
        <SlideBox1 slideIndex={slideIndex}>
          <ColorBox>
            {/* 여기가 3번 슬라이드 */}
            <h1>막내‘s Comment</h1>
            <p>저는 인턴인데, 갑자기 회사의 대표자로서, 
              비전 코멘트를 하라고 하셔서 사실 매우 당황스럽습니다. 
              힝 이런거 안 시켰으면 좋겠어요 차라리 일을 더 시켜주세요ㅠㅠ 
              열심히 배워서 성장하겠습니다..
              이렇게 하면 되나요
            </p>
            <p>인턴 김예닮</p>
          </ColorBox>
          <ColorBox>
            {/* 여기가 2번 슬라이드 */}
             <h1>실세‘s Comment</h1>
            <p>오럼 파이팅..! 열심히 하는게 중요한 게 아닙니다. 잘’ 해야죠. 
              잘’ 해서 우리를 믿어주신 분들께 결과로 보여드리겠습니다.
              가즈아
            </p>
            <p>과장 안수현</p>
          </ColorBox>
          <ColorBox>
            {/* 여기가 1번 슬라이드 */}
            <h1>將‘s Comment</h1>
            <p>빠르기 보다는, 올바른 방향인가를 보겠습니다. 
              더 많은 사람들이더 이(利)로운 라이프 스타일을 누리는 
              그 날까지, 끊임없이 꿈꾸고, 정진하고 보답하겠습니다.</p>
            <p>대표 박동근</p>
          </ColorBox>
        </SlideBox1>
      </Wrapper>

      <Wrapper>
        <SlideBox2 slideIndex={slideIndex}>
        <ColorBox>
            <ImgComponent imagePath={"Weare2.png"}
                Mheight={"200px"}
                Mwidth={"200px"}
                Dwidth={"200px"}
                Dheight={"694px"}/>
          </ColorBox>
          <ColorBox>
          {/* 여기가 2번 슬라이드 */}
          <ImgComponent imagePath={"Weare2.png"}
                Mheight={"200px"}
                Mwidth={"200px"}
                Dwidth={"200px"}
                Dheight={"694px"}/>
          </ColorBox>
          <ColorBox>
           {/* 여기가 3번 슬라이드 */}
           <ImgComponent imagePath={"Weare2.png"}
                Mheight={"200px"}
                Mwidth={"200px"}
                Dwidth={"200px"}
                Dheight={"694px"}/>
          </ColorBox>
          
        </SlideBox2>
      </Wrapper>
      <BtnDiv>
        <Button onClick={prevIndex}><IoIosArrowBack /></Button>
        <Button onClick={nextIndex}><IoIosArrowForward/></Button>
      </BtnDiv>
      <DotDiv>
        <Dot slideIndex={slideIndex} Index={0}/>
        <Dot  slideIndex={slideIndex} Index={1}/>
        <Dot slideIndex={slideIndex} Index={2}/>
      </DotDiv>
      </SlideContainer>
      
    </Container>
  );
}

export default Messages;

const Container = styled.div`
  background: ${({ theme }) => theme.colors.BoxColor};
  ${({ theme }) => theme.common.flexCenterColumn};
  width: 100%;
  height: auto;
  color: white;
`;
const SlideContainer = styled.div`
  width: 100%;
  height: 60vh;
  display : flex;
  flex-flow : row;
  position : relative;
  background-image: url(${({ BackGroundImage }) => `${process.env.PUBLIC_URL}${BackGroundImage}`});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  `;

const Wrapper = styled.div`
  width:  50vw;
  height: 100%;
  overflow : hidden;
`;
const SlideBox1 = styled.div`
  width: 150vw;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  transform: translateX(calc(-${props => (2 - props.slideIndex) * 50}vw)); /* SlideBox1은 3번 박스에서 시작해서 2번 박스, 1번 박스로 이동 */
  transition: transform 0.5s ease-in-out;
`;

const SlideBox2 = styled.div`
  width: 150vw;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  transform: translateX(calc(-${props => props.slideIndex * 50}vw)); /* SlideBox2는 1번 박스에서 시작해서 2번 박스, 3번 박스로 이동 */
  transition: transform 0.5s ease-in-out;
`;

const ColorBox = styled.div`
  width: 50vw;
  height: 100%;
  padding : 30% 10%;
  background: transparent;
`;
const Button = styled.button`
  background: ${({ theme }) => theme.colors.HashColor};
  ${({ theme }) => theme.common.StyledButton};
  padding: 5px 5px;
  width : 40px;
`;
const BtnDiv = styled.div`
  position : absolute;
  z-index : 5;
  width : 100px;
  height : 20px;
  top : 90%;
  left : 5%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const DotDiv = styled.div`
  position : absolute;
  z-index : 5;
  width : 100px;
  height : 20px;
  top : 80%;
  left : 5%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items:center;
  justify-content:center;
`;
const Dot = styled.div`
  width: 20px;
  height: 20px;
  border-radius : 50%;
  background: ${({ theme, slideIndex, Index }) =>
    slideIndex === Index ? theme.colors.HashColor : 'grey'};
`;
