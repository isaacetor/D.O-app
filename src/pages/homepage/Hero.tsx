import React from "react";
import styled from "styled-components";
import hero from "../../assets//images/DoHero.png";
import { NavLink } from "react-router-dom";
import { TfiWorld } from "react-icons/tfi";

const Hero = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <TextHold>
              <Title>
                dispose Waste properly & promote recycling, for a greener
                future!
              </Title>
              <p>
                Ready to be an eco-champion? Let's team up to ensure proper
                waste disposal and promote recycling within our communities.
                Small actions can make a big impact on our planet! ♻️🌍
              </p>
              <NavLink to="/user/register" style={{ textDecoration: "none" }}>
                <button>
                  Join Now! <TfiWorld />
                </button>
              </NavLink>
            </TextHold>
          </Left>
          <Right>
            <img src={hero} alt="" />

            <Money>{/* <img src={money} alt="" /> */}</Money>
            {/* <Hundred src={hundred} /> */}
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Hero;

const TextHold = styled.div`
  p {
    margin-top: 30px;
    width: 90%;
    font-size: 1.2rem;
    line-height: 139.6%;
    margin-bottom: 4rem;

    @media screen and (max-width: 768px) {
      font-size: 1.05rem;
    }
  }

  button {
    padding: 15px 35px;
    background-color: #03b903;
    display: flex;
    gap: 10px;
    color: #fff;
    font-size: 16px;
    border-radius: 5px;
    border: 0;
    transition: all 0.2s ease;

    :hover {
      cursor: pointer;
      background-color: #03b903;
    }
  }

  @media screen and (max-width: 768px) {
    margin-left: 20px;
  }
`;

const Money = styled.div`
  position: absolute;
  right: 0px;
  top: 200px;

  img {
    width: 10vw;
  }
`;
const Hundred = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  position: absolute;
`;

const Title = styled.h1`
  width: 90%;
  font-weight: 700;
  margin: 0;
  margin-top: 30px;
  font-size: 3.2rem;
  line-height: 4rem;
  color: #333333;
  text-transform: capitalize;
  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
    width: 95%;
    margin-top: 20px;
    line-height: 2rem;
  }
`;

const Right = styled.div`
  width: 50%;
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: slide-in 1s ease-out;
  animation-fill-mode: forwards;
  opacity: 0;

  @keyframes slide-in {
    0% {
      transform: translateX(-50%);
      opacity: 0;
    }
    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }

  @media screen and (max-width: 768px) {
    height: 60vh;
    width: 100%;
  }

  @media screen and (max-width: 1440px) {
    min-width: 50%;
  }

  img {
    width: 80%;
    height: 80%;
    object-fit: contain;

    @media screen and (max-width: 768px) {
      height: 100%;
      width: 90%;
      /* margin-top: 20px; */
    }
  }
`;

const Left = styled.div`
  width: 50%;
  height: 85vh;
  display: flex;
  align-items: center;
  animation: slide-in-bottom 1s ease-out;
  animation-fill-mode: forwards;
  opacity: 0;

  @keyframes slide-in-bottom {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }

  @media screen and (max-width: 768px) {
    height: 62vh;
    width: 100%;
  }
  @media screen and (max-width: 425px) {
    height: 72vh;
    width: 100%;
  }
  @media screen and (max-width: 1440px) {
    min-width: 50%;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  color: #333333;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 100%;
    border-radius: 2rem;
  }
`;
const Container = styled.div`
  width: 100%;
  color: #00002d;
  margin-top: 110px;
  /* margin-bottom: 20px; */
`;
