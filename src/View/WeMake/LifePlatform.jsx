import styled from 'styled-components';
import HeroContainer2 from '../../Layouts/HeroContainer2';
import ImgComponent from '../../Layouts/ImgComponent';
import { IoIosArrowForward   } from "react-icons/io";

function LifePlatform() {
    return (
      <Container>
        <HeroContainer2 imgPath={"/ImgSrc/BrandHero.png"}>
          <HeroMessage>
            <ParaDiv>
              <p>나 어릴 때,</p>
              <p>충북 옥천 우리 할아버지는</p>
              <p>스마트폰은 안쓰시는데, 에어컨은 쓰셔</p>
            </ParaDiv>
            <ParaDiv>
              <p>우리의 행동이 바뀌고, 문화가 바뀌는 것.</p>
            </ParaDiv>
            <ParaDiv>
              <p>그리고 삶이 바뀌는 것. 때로는 느리더라도,</p>
              <h1>더 나은 방식으로 바꾸게 하는 것.</h1>
            </ParaDiv>
            <ParaDiv>
              <p>그래, 그거 할 꺼야</p>
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
              <StyledBox width={"5px"} color={'#2EFEF7'}/>
              <StyledBox width={"20px"} color={'#2EFEF7'}/>
              <StyledBox width={"80px"} color={'#2EFEF7'}/>
              <StyledBox width={"180px"} color={'#2EFEF7'}/>
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
            <ProductCard>
              <div>
                <h2>돈키호테</h2>
                <p>
                돈키호테 유닛은, 불특정 다수 대중들의 보편적인 레저 형태에서 벗어나, 그동안 내가 겪어보지 않아서, 생소했던 새로운 경험들과 재미들을 찾고, 내 삶의 일부분으로 융합할 수 있는 라이프 서비스입니다.
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
            <ProductCard2>
              <div>
                <ImgComponent imagePath={"Weare2.png"}
                  Mheight={"100px"}
                  Mwidth={"100px"}
                  Dwidth={"200px"}
                  Dheight={"200px"}/>
              </div>
              <div>
                <h2>알렉산드리아</h2>
                <p>
                알렉산드리아 유닛은, 그 순간이 지나면 그대로 흘러가 주어담을 수 없는, 실제 삶 속의 나의 말과 행동, 흔적과 기록 중 내가 원하는 것들을 아카이빙하여, 나의 라이프의 가치를 올려줍니다.
                </p>
              </div>    
            </ProductCard2>
            <ProductCard>
              <div>
                <h2>사트라프</h2>
                <p>
                샤프라트 유닛은, 나의 삶을 세상과 가장 밀접한 형태로 연결하여, 같이, 함께 하는 사회 속에서 나의 위치와 정체성을 공고히 하고 더 나아가 그 다음의 방향을 정확하게 탐색하는 라이프 서비스입니다.</p>
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
  
export default LifePlatform;


const Container = styled.div`
    background : ${({ theme }) => theme.colors.BoxColor};
    ${({ theme }) => theme.common.flexCenterColumn};
    width : 100%;
    height : auto;
    color : white;
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
  line-height : 200%;

  @media screen and (max-width: 900px) {
    margin : 0 0 20px 0;
    line-height : 200%;
    
  }
`
const ProductContainer = styled.div`
    ${({ theme }) => theme.common.flexCenterColumn};
    width : 100%;
    height : auto;
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
  background: #1B1B1B;
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
  padding : 10%;
  gap : 200px;
  @media screen and (max-width: 900px) {
    gap : 150px;
  }
`
const ProductCard = styled.div`
  width : 100%;
  height : auto;
  display : grid;
  
  align-items : center;

  @media screen and (min-width: 901px) {
    gap : 100px;
    grid-template-columns : 2fr 1fr;
  }
  @media screen and (max-width: 900px) {
    gap : 20px;
    grid-template-rows : 1fr 1fr;
  }
`
const ProductCard2 = styled.div`
  width : 100%;
  height : auto;
  display : grid; 
 
  align-items : center;
  @media screen and (min-width: 901px) {
    gap : 100px;
    grid-template-columns : 1fr 2fr;
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