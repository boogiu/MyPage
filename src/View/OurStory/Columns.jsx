import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HeroContainer from '../../Layouts/HeroContainer';
import ColumnItem from '../../Layouts/ColumnItem'

function Columns() {
  const [selectedTag, setSelectedTag] = useState(''); // 선택된 태그를 추적합니다.

  const handleTag = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <Container>
      <HeroContainer imgPath={"/ImgSrc/BrandHero.png"} pageName={"안내드립니다"} />
      <TagDiv>
        <StyleBtn onClick={() => handleTag("")} selected={selectedTag === ""}>전체</StyleBtn>
        <StyleBtn onClick={() => handleTag("정치")} selected={selectedTag === "정치"}>정치</StyleBtn>
        <StyleBtn onClick={() => handleTag("경제")} selected={selectedTag === "경제"}>경제</StyleBtn>
        <StyleBtn onClick={() => handleTag("사회")} selected={selectedTag === "사회"}>사회</StyleBtn>
        <StyleBtn onClick={() => handleTag("생활/문화")} selected={selectedTag === "생활/문화"}>생활/문화</StyleBtn>
        <StyleBtn onClick={() => handleTag("IT/과학")} selected={selectedTag === "IT/과학"}>IT/과학</StyleBtn>
        <StyleBtn onClick={() => handleTag("세계")} selected={selectedTag === "세계"}>세계</StyleBtn>
      </TagDiv>

      <ColumnItem selectedTag={selectedTag} />
    </Container>
  );
}

export default Columns;

const Container = styled.div`
background: ${({ theme }) => theme.colors.BoxColor};
${({ theme }) => theme.common.flexCenterColumn};
width: 100%;
height: auto;
color: white;
`;
const TagDiv = styled.div`
background: ${({ theme }) => theme.colors.BoxColor};
${({ theme }) => theme.common.flexCenterRow};
justify-content : space-between;
height: auto;
width : 100%;
color: white;
padding : 2% 2%; 
border : 1px solid red; 
@media screen and (max-width: 900px) {
  display : grid;
  grid-template-columns: repeat(3, 1fr);
}
`;

const StyleBtn = styled.button`
  flex: 1;
  background: transparent;
  color: ${({ selected }) => selected ? '#5C8AFF' : 'white'}; // 선택된 상태일 때 파란색, 아니면 흰색
  padding: 14px;
  justify-content: center;
  align-items: center;
  border: none;
  font-family: "수트";
  font-style: normal;
  font-weight: 500;
  margin: 0px 15px;
  border-bottom: ${({ selected }) => selected ? '2px solid #5C8AFF' : 'none'}; // 선택된 상태일 때 밑줄 추가
`;