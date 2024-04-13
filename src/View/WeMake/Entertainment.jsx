import styled from 'styled-components';
import HeroContainer2 from '../../Layouts/HeroContainer2';
import ImgComponent from '../../Layouts/ImgComponent';
import { IoIosArrowForward   } from "react-icons/io";

function Entertainment() {
    return (
      <Container>
        <HeroContainer2 imgPath={"/ImgSrc/BrandHero.png"}>
          <HeroMessage>
            <ParaDiv>
              <p>너무 재미있는,</p>
              <p>페인 킬러가 아닌 비타민?</p>
            </ParaDiv>
            <ParaDiv>
              <p>아니아니..</p>
              <h3>우리는, 캔디와 초콜렛</h3>
            </ParaDiv>
            <ParaDiv>
              <p>계속 맛보고 싶은,<br/>
              우리의 엔터테인먼트</p>   
            </ParaDiv>
            
            <ParaDiv>
              <h1>“심지어 눈물도 즐거운”</h1>
            </ParaDiv>
            <ParaDiv>
              <p>Aurum, <br/>
                -marketing department representative, cheif-</p>
            </ParaDiv>
          </HeroMessage>
        </HeroContainer2>
        <ProductContainer>
          <AskToDiv>
            <AskFor>
              <h1>ASK FOR <br/>MARKETING</h1>
            </AskFor>
            
            <StyledContainer>
              <StyledBox width={"5px"} color={'#00FF00'}/>
              <StyledBox width={"20px"} color={'#00FF00'}/>
              <StyledBox width={"80px"} color={'#00FF00'}/>
              <StyledBox width={"180px"} color={'#00FF00'}/>
            </StyledContainer>
            <ContactDiv>
              <h1>CONTACT US</h1>
              <ContactArrow />
            </ContactDiv>
          </AskToDiv>
          <CodeContainer>
              <CodeDiv>
                <p>***</p>
                <p>
                  오럼 고유 코드가 있으신 고객사 분들은 본 창구가 아닌 사전에 안내된 창구를 활용해주시기 바랍니다
                </p>
              </CodeDiv>
          </CodeContainer>
          <ProductDiv>
            <ProductCard color={'#FFFEF8'}>
              <div>
                <h2>시즈닝 [Seasoning]</h2>
                <p>
                시즈닝은, 엔터테인먼트 분야와 스타일 라인을 결합하여, 트렌디한 패션 제품들을 고객들에게 선보이는, 마케팅 서비스입니다.
                </p>
              </div>
              <div>
                <ImgComponent imagePath={"Weare2.png"}
                  Mheight={"100px"}
                  Mwidth={"100px"}
                  Dwidth={"200px"}
                  Dheight={"200px"}/>
              </div>
            </ProductCard>
            <ProductCard color={'#FFF8F8'}>
              <div>
                <h2>달콤 [dalkomm]</h2>
                <p>
                달콤은, 엔터테인먼트 분야와 코스메틱 라인을 결합하여 신뢰성 있는 뷰티 제품을 고객들에게 선보이는, 마케팅 서비스 입니다.
                </p>
              </div>
              <div>
                <ImgComponent imagePath={"Weare2.png"}
                  Mheight={"100px"}
                  Mwidth={"100px"}
                  Dwidth={"200px"}
                  Dheight={"200px"}/>
              </div>    
            </ProductCard>
            <ProductCard color={"#F8FCFF"}>
              <div>
                <h2>다즐링 [dhazzling]</h2>
                <p>
                다즐링은, 엔터테인먼트 분야와 이벤트 라인을 결합하여 매력적인 
                신상품들을 고객들에게 선보이는, 마케팅 서비스 입니다.</p>
              </div>
              <div>
                <ImgComponent imagePath={"Weare2.png"}
                  Mheight={"100px"}
                  Mwidth={"100px"}
                  Dwidth={"200px"}
                  Dheight={"200px"}/>
              </div>
            </ProductCard>
          </ProductDiv>
          <Empty/>
        </ProductContainer>
      </Container>
    );
  }
  
export default Entertainment;

const Container = styled.div`
    background : ${({ theme }) => theme.colors.BoxColor};
    ${({ theme }) => theme.common.flexCenterColumn};
    width : 100%;
    height : auto;
    color : black;
    overflow-x : hidden;
`
const HeroMessage = styled.div`
${({ theme }) => theme.common.flexCenterColumn};
  width : 100%;
`
const ParaDiv = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
  width : 100%;
  margin : 0 0 50px 0;
  line-height : 150%;

  @media screen and (max-width: 900px) {
    margin : 0 0 20px 0;
    line-height : 200%;
    
  }
`
const ProductContainer = styled.div`
    ${({ theme }) => theme.common.flexCenterColumn};
    width : 100%;
    height : auto;
    background : #fff;
`
const AskToDiv = styled.div`
    width : 100%;
    height : auto;
    display : flex;
    align-items : center;
    padding : 10%;
    text-align : left;
    @media screen and (max-width: 900px) {
      flex-direction : column;
      align-items : flex-start;
      background : #fff;
    }
`
const AskFor = styled.div`
    margin : 0 20% 0 0;
    @media screen and (max-width: 900px) {
      margin : 0;
      color : black;
    }
   
`

const StyledContainer = styled.div`
    display : flex;
    gap : 20px;
    @media screen and (max-width: 900px) {
      display : none;
    }
`
const StyledBox = styled.div`
    width :   ${({ width }) => width};
    height : 164px;
    background :   ${({ color }) => color};
`

const ContactDiv = styled.div`
  margin : 0 0 0 -3%;
  @media screen and (max-width: 900px) {
    width : 90%;
    margin : 5% 0 0 0%;
    color : #fff;
    background : #000;
    border-radius:15px;
    padding : 15px;
    display : flex;
    justify-content : space-between;
    align-items : center;
  }
`

const ContactArrow = styled(IoIosArrowForward)`
  display:none;
  color : #fff;
  @media screen and (max-width: 900px) {
    display:flex;
    font-size : 6vmin;
  }
`
const CodeContainer = styled.div`
  width : 100%;
  height : auto;
  display : flex;
  justify-content : center;
  padding : 10%;
  background : #FBFBFB;
`
const CodeDiv = styled.div`
  width : 80%;
  height : auto;
  display : flex;
  flex-direction : column;
  align-items : center;
  text-align : center;
`
const ProductDiv = styled.div`
  width : 100%;
  height : auto;
  display : flex;
  flex-direction : column;
  align-items : center;
  gap : 0;

  @media screen and (max-width: 900px) {
    gap : 0;
  }
`
const ProductCard = styled.div`
  width : 100%;
  height : auto;
  display : grid;
  background :  ${({ color }) => color};
  align-items : center;
  padding : 10%;
  @media screen and (min-width: 901px) {
    gap : 250px;
    grid-template-columns : 2fr 1fr;
  }
  @media screen and (max-width: 900px) {
    gap : 20px;
    grid-template-rows : 1fr 1fr;
  }
`

const Empty = styled.div`
width : 100%;
height : 300px;
`