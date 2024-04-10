import styled from 'styled-components';
import HeroContainer from '../../Layouts/HeroContainer';

function Introduce() {
    return (
      <Container>
         <HeroContainer imgPath={"/ImgSrc/Ex.jpg"} pageName="기업 소개" />
      </Container>
    );
  }
  
export default Introduce;

const Container = styled.div`
  background : ${({ theme }) => theme.colors.BoxColor};
  ${({ theme }) => theme.common.flexCenterRow};
  width : 100%;
  height : auto;
`

// imgpath={"${process.env.PUBLIC_URL}/ImgSrc/Ex.jpg"} 