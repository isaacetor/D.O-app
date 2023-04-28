import React from "react";
import styled from "styled-components";
// import hero from "../../Assets/hero.webp";
import { NavLink } from "react-router-dom";
import { AboutCard } from "../../components";

import one from "../../assets/svgs/one.svg";
import two from "../../assets/svgs/two.svg";
import three from "../../assets/svgs/three.svg";
import four from "../../assets/svgs/four.svg";
import pic from "../../assets/images/tour.png";

const Hero = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Head>
            <div>
              <H>Joining us is very easy!</H>
              <P>Get Started in few easy steps</P>
              <Picture src={pic} />
            </div>
          </Head>
          <Cards>
            <AboutCard
              logo={one}
              heading="Create account"
              par="Create an account with your valid details"
            />
            <AboutCard
              logo={two}
              heading="Fund account "
              par="Credit your account to be able to make trash pick up rrequest right in the app"
            />{" "}
            <AboutCard
              logo={three}
              heading="Make a request"
              par="Request for your trash pick up at a time convenient for you."
            />{" "}
            <AboutCard
              logo={four}
              heading="Close a request"
              par="After trash pick up, you can close the request to show that your trash has been picked up"
            />
            {/* <Picture2 src={pic} /> */}
          </Cards>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Hero;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 95%;
  margin-top: 120px;
  @media screen and (min-width: 1200px) {
    display: flex;
    gap: 60px;
  }
`;
const H = styled.div`
  font-size: 31px;
  font-weight: bold;
  color: #333333;
  text-transform: capitalize;
  @media screen and (min-width: 1000px) {
    font-size: 40px;
  }
`;
const P = styled.div`
  margin-top: 20px;
  font-weight: 400;
  font-size: 14px;
  @media screen and (min-width: 1000px) {
    font-size: 20px;
  }
`;
const Head = styled.div`
  color: #383838;
  @media screen and (min-width: 1200px) {
    width: 25%;
  }
`;
const Picture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 20px;
  display: none;
  margin-top: 40px;
  @media screen and (min-width: 1200px) {
    display: block;
  }
`;
const Picture2 = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  object-position: center;
  border-radius: 20px;
  margin-top: 40px;
  @media screen and (min-width: 1200px) {
    display: none;
  }
  @media screen and (min-width: 1000px) {
    width: 40%;
  }
`;
const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
  @media screen and (min-width: 1200px) {
    width: calc(80% - 40px);
  }
`;
