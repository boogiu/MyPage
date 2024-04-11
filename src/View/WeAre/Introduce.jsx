import styled from 'styled-components';
import HeroContainer from '../../Layouts/HeroContainer';

function Introduce() {
    return (
      <Container>
         <HeroContainer imgPath={"/ImgSrc/Ex.jpg"} pageName="기업 소개" />
         <FirstDiv  BackGroundImage={"/ImgSrc/BG2.jpg"}>
          {/* 여기는 그리드로 가로 2 */}
            <TxtBox>
              <h3>모두를 행복하게 할 수는 없지만<br/>조금은, 더 행복하게 만들 수 있습니다</h3>
              <p>세상 모두가 <br/>보다 더 따뜻하게 <br/>보다 더 즐겁게</p>
              <p>당신의 꿈에, 항상<br/>오럼이 함께 하겠습니다</p>
            </TxtBox>

            <ImgComponent imagePath={"Ex2.png"} 
            Mheight={"350px"}
            Mwidth={"100px"}
            Dwidth={"800px"}
            Dheight={"905px"}/>

         </FirstDiv>
         <SecondDiv Color={"#5C8AFF"}>
            <h2>
              흐르는 강물처럼
            </h2>
         </SecondDiv>
         <ThirdDiv BackGroundImage={"/ImgSrc/Ex.jpg"}>
            <h3>모두의 삶에 도움이 되는 기능들</h3>
            <h3>언제나 항상 있어야 하는 그러한 서비스를 만듭니다</h3>
         </ThirdDiv>
         <FourthDiv Color={"#FFF"}>
            {/* 여기는 위아래 칼럼 플렉스로 */}
            <OneLineTxt>
              <h2>
                공부해서 남주냐?
              </h2>
            </OneLineTxt>
              <ImgComponent imagePath={"Weare2.png"}
              Mheight={"300px"}
              Mwidth={"200px"}
              Dwidth={"423px"}
              Dheight={"694px"}/>
         </FourthDiv>

         <SecondDiv Color={"#070707"}>
            <PointLine>
              <h3>네.</h3>
              <h3>오럼은, <PointSpan>남 주려고 공부했습니다</PointSpan></h3>
            </PointLine>
         </SecondDiv>

         <ThirdDiv BackGroundImage={"/ImgSrc/Ex.jpg"}>
            <PointLine>
              <p>세상 모두가, 이전의 그 어떤 것보다</p>
              <p>행복하고, 즐거운 라이프를 만들 수 있는 경험.</p>
              <h1>오럼은, 멈추지 않겠습니다</h1>
            </PointLine>
         </ThirdDiv> 
      </Container>
    );
  }
  
export default Introduce;

const Container = styled.div`
    background : ${({ theme }) => theme.colors.BoxColor};
    ${({ theme }) => theme.common.flexCenterColumn};
    width : 100%;
    height : auto;
    color : white;
    overflow-x : hidden;
`
const FirstDiv = styled.div`
  background : ${({ theme }) => theme.colors.BoxColor};
  width : 100%;

  color : white;
  @media screen and (min-width: 901px) {
    display : grid;
    grid-template-columns:  1fr 1fr;
    align-items : center;
    justify-items : center;
    height : 100vh;
  }
  @media screen and (max-width: 900px) {
    display : grid;
    grid-template-rows:  1fr 1fr;
    align-items : center;
    justify-items : center;

  }
  
  background-image: url(${({ BackGroundImage }) => `${process.env.PUBLIC_URL}${BackGroundImage}`});
  background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

const TxtBox = styled.div`
  display : grid;
  grid-template-rows:  1fr 1fr 1fr;
  gap : 20px;
  
`
const OneLineTxt = styled.div`
  color: #363636;
  width : 100%;
  text-align : center;
  margin : 130px 0px 80px 0px;
`

const PointLine = styled.div`
  width : 100%;
  text-align : center;
  margin : 200px 0px 200px 0px;
`

const PointSpan = styled.span`
  color : ${({ theme }) => theme.colors.HashColor};
`

const SecondDiv = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
  width : 100%;
  background : ${({ Color }) => Color};
  @media screen and (min-width: 501px) {
    height : 300px;
  }
  @media screen and (max-width: 500px) {
    height : 180px;
  }
`

const ThirdDiv = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
  width : 100%;

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
const FourthDiv = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
  width : 100%;
  height : auto;
  background : ${({ Color }) => Color};

`
// imgpath={"${process.env.PUBLIC_URL}/ImgSrc/Ex.jpg"} 

const ImageContainer = styled.div`
height : auto;
object-fit: ;
background-color: transparent;
  @media screen and (min-width: 501px) {
    width : ${({ Dwidth }) => Dwidth};
    height : ${({ Dheight }) => Dheight};
  }
  @media screen and (max-width: 500px) {
    width : ${({ Mwidth }) => Mwidth};
    height : ${({ Mheight }) => Mheight};
  }
`;
const ImgComponent = ({ imagePath, rotate, Dwidth,Dheight, Mheight, Mwidth }) => {
  return (
      <ImageContainer 
        rotate={rotate}
        Mwith= {Mwidth}
        Dwidth={Dwidth}
        Mheight= {Mheight}
        Dheight={Dheight}
      >
          <img src={`${process.env.PUBLIC_URL }/ImgSrc/${imagePath}`} 
          alt="페이지 이미지" 
          style={{ 
            maxWidth: '100%', maxHeight: '100%' ,
          }}/>
      </ImageContainer>
      
  );
};