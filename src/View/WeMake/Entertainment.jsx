import styled from 'styled-components';
import HeroContainer2 from '../../Layouts/HeroContainer2';
import ImgComponent from '../../Layouts/ImgComponent';

function Entertainment() {
    return (
      <Container>
        <HeroContainer2 imgPath={"/ImgSrc/BrandHero.png"}>
          <p>나 어릴 때,</p>
          <p>스마트폰은 안쓰시는데, 에어컨은 쓰셔</p>
          <p>우리의 행동이 바뀌고, 문화가 바뀌는 것.</p>
          <p>그리고 삶이 바뀌는 것. 때로는 느리더라도,</p>
          <p>더 나은 방식으로 바꾸게 하는 것.</p>
          <p>그래, 그거 할 꺼야</p>
          <p>Aurum, <br/>
            -marketing department representative, cheif-</p>
        </HeroContainer2>
        <div>
          <div>Ask</div>
          <div>고유 코드</div>
          <div>
            <div>헥사르</div>
            <div>리프</div>
            <div>아이네스</div>
          </div>
          <div>
            빈 공간
          </div>
        </div>
      </Container>
    );
  }
  
export default Entertainment;

const Container = styled.div`
    background : ${({ theme }) => theme.colors.BoxColor};
    ${({ theme }) => theme.common.flexCenterColumn};
    width : 100%;
    height : auto;
    color : white;
    overflow-x : hidden;
`