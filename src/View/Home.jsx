import styled from 'styled-components';

function Home() {
    return (
      <HomeConatainer>
        <VideoPlayer muted autoPlay loop playsinlinesrc={process.env.PUBLIC_URL + '/VideoSrc/Example.mp4'} >
        </VideoPlayer>
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
const VideoPlayer = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width : 100%;
  height : 100%;
  object-fit: cover;
`