import styled from 'styled-components';

function Home() {
    return (
      <div>
        <HiBtn></HiBtn>
        <HiBtn></HiBtn>
        <HiBtn></HiBtn>
        <HiBtn></HiBtn>
      </div>
    );
  }
  
  export default Home;
  
  const HiBtn = styled.button`
    background : ${({ theme }) => theme.colors.MainColor};
    ${({ theme }) => theme.common.StyledButton};
  `