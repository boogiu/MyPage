import styled from 'styled-components';

const ImageContainer = styled.div`
  object-fit: contain;
  background-color: transparent;
  @media screen and (min-width: 501px) {
    width: ${({ Dwidth }) => Dwidth};
    height: ${({ Dheight }) => Dheight};
  }
  @media screen and (max-width: 500px) {
    width: ${({ Mwidth }) => Mwidth};
    height: ${({ Mheight }) => Mheight};
  }
  border : 1px solid red;
`;

const ImgComponent = ({ imagePath, rotate, Dwidth, Dheight, Mheight, Mwidth }) => {
  return (
    <ImageContainer
      rotate={rotate}
      Mwidth={Mwidth}
      Dwidth={Dwidth}
      Mheight={Mheight}
      Dheight={Dheight}
    >
      <img
        src={`${process.env.PUBLIC_URL}/ImgSrc/${imagePath}`}
        alt="페이지 이미지"
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
        }}
      />
    </ImageContainer>
  );
};

export default ImgComponent;
