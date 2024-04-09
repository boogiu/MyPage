import styled from 'styled-components';

function Home() {
    return (
      <HomeConatainer>

      </HomeConatainer>
    );
  }
  
  export default Home;

  const HomeConatainer = styled.div`
  background : ${({ theme }) => theme.colors.BoxColor};
  ${({ theme }) => theme.common.flexCenterRow};
  width : 100%;
  height : 100vh;
`