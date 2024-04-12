import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import HeroContainer from '../../Layouts/HeroContainer';
import ImgComponent from '../../Layouts/ImgComponent';


function Brand() {
    return (
      <Container>
        <HeroContainer imgPath={"/ImgSrc/BrandHero.png"} pageName={"브랜드"}/>
        <BrandDiv BackGroundImage={"/ImgSrc/Brand2.png"}>
          <LineDiv>
            <Line Color={"#FFEE53"}>
              
            </Line>
            <BrandTag Color={"#FFEE53"}>
              01. DalGona
            </BrandTag>
          </LineDiv>
          <BrandCard>
              <div>
                <ImgComponent imagePath={"Brand3.png"} 
                Dheight={"100%"}  Dwidth={""}
                Mheight={"360"} Mwidth={"360"}/>
              </div>
              <CardParagraph>
                <h1>
                  DalGona
                </h1>
                <p>
                  엔터테인먼트 플랫폼 달고나는,우리의 별들이 뛰노는 경쟁 리그에서, 마음껏 열광하며, 모두가 함께 즐기는, 온라인 서비스입니다. 

                  내가 꿈꾸는 셀럽의 치열하고 숭고한 경쟁을 
                  느껴보세요
                </p>
              </CardParagraph>
          </BrandCard>
        </BrandDiv>
        <TxtDiv Color={"#FFEE53"} Mheight={""} Dheight={""}>
          <p>우리의 땀과 열정이, 호흡이</p>
          <p>더 나은 세상으로, 그리고 즐거움으로</p>
          <h1>#별들의 리그,  무슨 말이 필요해..!</h1>
        </TxtDiv>
        <BrandDiv BackGroundImage={"/ImgSrc/Brand2.png"}>
          <LineDiv>
            <Line Color={"#27FF97"}>
              
            </Line>
            <BrandTag Color={"#27FF97"}>
              02. CLuv
            </BrandTag>
          </LineDiv>
          <BrandCard>
              <div>
                <ImgComponent imagePath={"Brand3.png"} 
                Dheight={"100%"}  Dwidth={""}
                Mheight={"360"} Mwidth={"360"}/>
              </div>
              <CardParagraph>
                <h1>
                  DalGona
                </h1>
                <p>
                  엔터테인먼트 플랫폼 달고나는,우리의 별들이 뛰노는 경쟁 리그에서, 마음껏 열광하며, 모두가 함께 즐기는, 온라인 서비스입니다. 

                  내가 꿈꾸는 셀럽의 치열하고 숭고한 경쟁을 
                  느껴보세요
                </p>
              </CardParagraph>
          </BrandCard>
        </BrandDiv>
        <TxtDiv Color={"#27FF97"} Mheight={""} Dheight={""}>
          <p>나의 노력과 뚝심으로,</p>
          <p>꿈은 이루어진다. 세상 무엇보다 값진 젊음</p>
          <h1>#개천에서 용 나는데, 우선 이무기부터..?</h1>
        </TxtDiv>
        
        <TxtDiv Color={"#070707"}
        Mheight={"100vh"} Dheight={"100vh"}>
          <ImgComponent
            imagePath={"CommingSoon.png"}
            Dheight={"100%"}  Dwidth={""}
            Mheight={"360"} Mwidth={"360"}
          />
        </TxtDiv>
      </Container>
    );
  }
  
export default Brand;

const Container = styled.div`
  background: ${({ theme }) => theme.colors.BoxColor};
  ${({ theme }) => theme.common.flexCenterColumn};
  width: 100%;
  height: auto;
  color: white;
`;

const BrandDiv=styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
  width: 100%;
  height : auto;
  padding : 55% 10% 30% 10%;
  color : black;
  text-align : center;
  background-image: url(${({ BackGroundImage }) => `${process.env.PUBLIC_URL}${BackGroundImage}`});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position : relative;
 
`

const LineDiv=styled.div`
  width: 100%;
  position : absolute;
  height : 8%;
  top : 0;
`
const Line=styled.div` 
  width: 100%;
  border : 1px solid ${({ Color }) => Color};
  position : absolute;
  top : 50%;
  transform: translateY(-50%);
`
const BrandTag=styled.div`
  width: 130px;
  color :${({ Color }) => Color};
  border-radius: 20px;
  border: 1px solid #FFEE53;
  background: #000;
  position : absolute;
  top : 50%;
  left : 10%;
  transform: translateY(-50%);
`

const BrandCard=styled.div`
  width : 100%;
  color : white;
  justify-content : center;
  align-items :center;
  @media screen and (min-width: 901px) {
    display : grid;
    grid-template-columns:  1fr 1fr;
    height : 680px;
  }
  @media screen and (max-width: 900px) {
    display : grid;
    grid-template-rows:  1fr 1fr;
    height : 680px;
  }
`
const CardParagraph=styled.div`
  width : 50%;
  text-align : left;
  @media screen and (min-width: 901px) {
    margin : 5% 10% 0% 40%;
  }
  @media screen and (max-width: 900px) {
    margin : 5% 5% 0% 5%;
  }
`


const TxtDiv = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
  width : 100%;
  color : black;
  background : ${({ Color }) => Color};
  padding : 10%;
  text-align : center;
  @media screen and (min-width: 501px) {
    height : ${({ Dheight }) => Dheight};
  }
  @media screen and (max-width: 500px) {
    height : ${({ Mheight }) => Mheight};
  }
  `