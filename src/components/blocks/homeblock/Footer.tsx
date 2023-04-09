import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GlobalButton } from "../../commons";

const Footer = () => {
  return (
    <div>
      <Container>
        {/* <LogoPart>
          <Logo>MAVERICKS</Logo>
          <Text>
            A Unique giftcard purchasing business perfectly built for you.
          </Text>
          <NavLink to="/get-started" style={{ textDecoration: "none" }}>
            <GlobalButton
              text="Create an account"
              bg="#03B903"
              col="#fff"
              padding="10px 20px"
            />
          </NavLink>
        </LogoPart>
        <Connect>
          <Heading>Company</Heading>
          <Trailing>About us</Trailing>
          <Trailing>Terms</Trailing>
          <Trailing>Privacy Policy</Trailing>
          <Trailing>FAQs</Trailing>
        </Connect>
        <Company>
          <Heading>Connect with Us</Heading>
          <Trailing>
            <FaFacebook style={{ fontSize: "20px" }} /> Facebook
          </Trailing>
          <Trailing>
            <FaTwitter style={{ fontSize: "20px" }} /> Twitter
          </Trailing>
          <Trailing>
            <FaInstagram style={{ fontSize: "20px" }} /> Instagram
          </Trailing>
          <Trailing>
            <FaLinkedin style={{ fontSize: "20px" }} /> LinkedIn
          </Trailing>
        </Company> */}
      </Container>
    </div>
  );
};

export default Footer;

const Container = styled.div`
  font-size: 12px;

  @media screen and (min-width: 1000px) {
    font-size: 18px;
    width: 100%;
    height: 30vh;
    margin-top: 50px;
    /* padding: 50px; */
    /* margin: auto; */
    margin-bottom: 20px;
  }
  /* border-radius: 10px; */
  /* margin: 10px; */
  /* padding: 15px; */
  background-color: #f5d4d4;
  color: #525151;
  display: flex;

  flex-wrap: wrap;
  gap: 100px;
`;
// const LogoPart = styled.div``;
// const Company = styled.div``;
// const Heading = styled.div`
//   font-size: 14px;
//   @media screen and (min-width: 1000px) {
//     font-size: 18px;
//   }
//   font-weight: 600;
// `;
// const Trailing = styled.div`
//   margin-top: 10px;
//   margin-bottom: 10px;
//   font-size: 14px;
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   cursor: pointer;
//   :hover {
//     color: #03b903;
//   }
// `;
// const Connect = styled.div``;
// const Logo = styled.div`
//   font-weight: 600;
//   color: #03b903;
// `;
// const Text = styled.div`
//   margin-top: 20px;
//   margin-bottom: 20px;
//   width: 70%;
//   font-size: 15px;
//   line-height: 1.2rem;
// `;
