import React, { FC } from "react";
import { aBout } from "../../../types";
import styled from "styled-components";

const AboutCard: FC<aBout> = ({ logo, par, heading }) => {
  return (
    <Container>
      <Wrapper>
        <Picture src={logo} />
        <H>{heading}</H>
        <P>{par}</P>
      </Wrapper>
    </Container>
  );
};

export default AboutCard;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  @media screen and (min-width: 1000px) {
    width: 47%;
  }
  /* @media screen and (min-width: 1200px) {
    width: 100%;
  } */
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const H = styled.div`
  font-size: 23px;
  @media screen and (min-width: 1000px) {
    font-size: 31px;
    font-weight: 500;
  }
  color: #03b903;
`;
const P = styled.div`
  margin-top: 10px;
  font-weight: 400;
  font-size: 15px;
  @media screen and (min-width: 1000px) {
    font-size: 20px;
  }
  color: #636262;
`;
const Picture = styled.img`
  width: 50px;
  height: 50px;

  @media screen and (max-width: 425px) {
    width: 40px;
    height: 40px;
  }
`;
