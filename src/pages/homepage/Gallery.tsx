import React from "react";
import styled from "styled-components";
import pic1 from "../../assets/images/landingPic1.jpg";
import pic2 from "../../assets/images/landingPic2.jpg";
import pic3 from "../../assets/images/landingPic3.jpg";
import pic4 from "../../assets/images/landingPic4.jpg";

const Gallery = () => {
  return (
    <Container>
      <Wrapper>
        <One>
          <img src={pic4} alt="" />
        </One>
        <One>
          <img src={pic3} alt="" />
        </One>
        <One>
          <img src={pic2} alt="" />
        </One>
        <One>
          <img src={pic1} alt="" />
        </One>
      </Wrapper>
    </Container>
  );
};

export default Gallery;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    width: 0;
  }
`;
const One = styled.div`
  width: 500px;
  height: 55vh;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: #03b90326;
    z-index: 4;
    position: absolute;
  }
`;

const Container = styled.div`
  width: 100%;
`;
