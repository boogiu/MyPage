import styled from 'styled-components';
import HeroContainer2 from '../../Layouts/HeroContainer2';
import ImgComponent from '../../Layouts/ImgComponent';
import { IoIosArrowForward   } from "react-icons/io";

function Marketing() {
    return (
      <Container>
        <HeroContainer2 imgPath={"/ImgSrc/BrandHero.png"}>
          <HeroMessage>
            <ParaDiv>
              <p>마케팅은, 다가가는 것이 아니에요</p>
            </ParaDiv>
            <ParaDiv>
              <p>다가'오는' 것</p>
            </ParaDiv>
            <ParaDiv>
              <h1>“스며드는 것”</h1>
              <p>아니, 마케팅이 아니야.<br/>
                고객과 함께 살게 되는 것</p>
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
                <h2>HExar [헥사르, 115]</h2>
                <p>
                  [헥사르 115] 프로그램은 핵심 타겟의 심장에 각인되어,가장 필요한 가치를 느끼는 브랜딩 마케팅을, 누구나 접할 수 있는 일상에서 구현합니다.
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
                <h2>Leaf [리프, 032]</h2>
                <p>
                [리프 032] 프로그램은 광범위한 미디어 분야의 셀럽, 아트워킹 등 모두를 즐겁게 하는 새로운 이슈들, 가장 빠르고 강하게 대중들에게 선보입니다.
                </p>
              </div>    
            </ProductCard2>
            <ProductCard>
              <div>
                <h2>Ainess [아이네스, 030]</h2>
                <p>
                [아이네스 030] 프로그램은 매력적인 셀럽들을 브랜딩하고, 아티스트가 
                추구하는 유니버스 확장을 통해, 더 큰 세계 시장으로서의 진출을 
                서포트합니다</p>
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

export default Marketing;

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
  margin : 0 0 68px 0;
  line-height : 200%;

  @media screen and (max-width: 900px) {
    margin : 0 0 38px 0;
    line-height : 250%;
    
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