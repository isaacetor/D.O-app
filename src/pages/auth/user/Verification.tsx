import React from "react";
import styled from "styled-components";
import mail from "../../../assets/images/mail-sent.png";
import logo from "../../../assets/images/ecobinLogoWithText.png";
import { NavLink } from "react-router-dom";

const Verification = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <img src={mail} alt="" />
          <h2>Verify your email!</h2>
          <p>
            Almost There. We've sent a verification email to you. you need to
            verify your email address to login to ecoBIN.
          </p>

          <NavLink to="/">
            <button>Back home</button>
          </NavLink>

          <NavLink to="/">
            <Logo src={logo} alt="" />
          </NavLink>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Verification;

const Logo = styled.img`
  width: 20px;
  height: 20px;
  /* object-fit: contain; */
  opacity: 0.8;
`;

const Wrapper = styled.div`
  width: 50%;
  height: 70%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 150px;
    height: 150px;
    object-fit: contain;
  }

  h2 {
    color: #03b903;
    font-weight: 400;
    margin: 0;
  }

  p {
    width: 65%;
    text-align: center;

    @media screen and (max-width: 768px) {
      width: 90%;
    }
  }

  button {
    padding: 5px 5px;
    border: none;
    border-bottom: 1px solid green;
    background-color: transparent;
    transition: all 350ms ease;

    :hover {
      cursor: pointer;
      border-bottom: 1px solid #03b903;
    }
  }

  @media screen and (max-width: 768px) {
    width: 85%;
    height: 90%;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
