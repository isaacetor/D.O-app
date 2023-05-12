import React from "react";
import styled from "styled-components";
import verified from "../../../assets/gifs/verified.gif";
import logo from "../../../assets/images/ecobinLogoWithText.png";
import { NavLink } from "react-router-dom";

const Verified = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <img src={verified} alt="" />
          <h2>Your account has been Verified!</h2>
          <p>
            You have successfully verifed your account. You can now proceeed to{" "}
            <NavLink to="/user/login">
              <button>sign in</button>
            </NavLink>
          </p>
          <NavLink to="/">
            <Logo src={logo} alt="" />
          </NavLink>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Verified;

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
    width: 50%;
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
