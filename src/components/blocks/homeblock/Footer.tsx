import React from "react";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <Container>
        <LogoPart>
          <Logo>Dumpsters</Logo>
          <Text>
            reduce waste, promote recycling, and proper waste disposal.
          </Text>
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
        </Company>
      </Container>
      <Copyright>
        <p>copyright © {new Date().getFullYear()} Dumpsters ♻️🌍</p>
      </Copyright>
    </div>
  );
};

export default Footer;

const Copyright = styled.div`
  width: 100%;
  height: 7vh;
  border-top: 2px solid #ffffff;
  background-color: #f9f9fb;
  display: flex;
  align-items: center;

  p {
    width: 95%;

    margin: auto;

    font-size: 13px;
  }
`;

const Container = styled.div`
  font-size: 12px;

  @media screen and (min-width: 1000px) {
    font-size: 18px;
    width: 100%;
    /* height: 30vh; */
    background-color: #f9f9fb;
  }

  background-color: #f9f9fb;
  color: #525151;
  display: flex;

  flex-wrap: wrap;
  gap: 100px;
`;
const LogoPart = styled.div`
  margin: 40px;
`;
const Company = styled.div`
  margin: 40px;
`;
const Heading = styled.div`
  font-size: 14px;
  @media screen and (min-width: 1000px) {
    font-size: 18px;
  }
  font-weight: 600;
`;
const Trailing = styled.div`
  margin-top: 10px;
  margin-bottom: 15px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  :hover {
    color: #03b903;
  }
`;
const Connect = styled.div`
  margin: 40px;
`;
const Logo = styled.div`
  font-weight: 600;
  color: #03b903;
`;
const Text = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 70%;
  font-size: 15px;
  line-height: 1.2rem;
  text-transform: capitalize;
`;
