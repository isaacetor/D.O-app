import React from "react";
import styled from "styled-components";
// import about from "../../assets/images/"
import about from "../../assets/images/mockUp.png";

const Awareness = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <h2>About ecoBin</h2>
          <h1>
            Years of diligent research and unwavering dedication to
            environmental consciousness
          </h1>
          <p>
            ecoBin, a is a waste management company dedicated to reducing waste,
            promoting recycling, and proper waste disposal. Our team of experts
            provides innovative and eco-friendly solutions for businesses and
            communities. Join us in our mission to create a cleaner and
            healthier environment for current and future generations. 🌍♻️
          </p>
        </Left>
        <Right>
          <img src={about} alt="" />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Awareness;

const Right = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media screen and (max-width: 768px) {
    height: 50vh;
    width: 100%;
    margin-top: 20px;
  }

  @media screen and (max-width: 1440px) {
    min-width: 50%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;

const Left = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    height: 70vh;
    width: 100%;
  }
  @media screen and (max-width: 1440px) {
    min-width: 50%;
  }

  h2 {
    color: #3c37ff;
    font-weight: 500;
    font-size: 2rem;
    margin: 0;
    margin-bottom: 2rem;

    @media screen and (max-width: 768px) {
      font-size: 1.4rem;
      width: 90%;
      margin-left: 20px;
      margin-bottom: 1.5rem;
    }
  }

  h1 {
    font-size: 2.7rem;
    width: 95%;
    margin: 0;
    margin-bottom: 1rem;
    line-height: 3.2rem;
    font-weight: 700;

    @media screen and (max-width: 768px) {
      font-size: 1.8rem;
      line-height: 2.3rem;
      width: 90%;
      margin-left: 20px;
      margin-bottom: 0.4rem;
    }
  }

  p {
    width: 85%;
    font-size: 1.3rem;
    line-height: 160.6%;
    margin-bottom: 2rem;
    opacity: 0.8;

    @media screen and (max-width: 768px) {
      font-size: 1rem;
      line-height: 1.7rem;
      width: 90%;
      margin-left: 20px;
    }
  }
`;

const Wrapper = styled.div`
  width: 90%;
  background-color: #ffffff;
  color: #333333;
  margin: auto;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Container = styled.div`
  width: 100%;
  color: #00002d;
  margin-top: 90px;
  margin-bottom: 20px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;

  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }
`;
