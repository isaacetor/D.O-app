import React, { useState } from "react";
import styled from "styled-components";
import Globalbutton from "../../commons/Globalbutton";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";

const Header = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };
  return (
    <Container>
      <Wrapper>
        <Logo>D.O Ltd</Logo>

        <NavHold>
          <Nav>Home</Nav>
          <Nav>About</Nav>
          <Nav>Pricing</Nav>
          <Nav>Category</Nav>
          <Button>
            <Globalbutton bg="#fff" wd="100px" hgt="40px" col="#7ae582" />
          </Button>
        </NavHold>
        {show ? (
          <ToggleWrapper>
            <Toggle>
              <ToggleNav>Home</ToggleNav>
              <ToggleNav>About</ToggleNav>
              <ToggleNav>Pricing</ToggleNav>
              <ToggleNav>Category</ToggleNav>
            </Toggle>
          </ToggleWrapper>
        ) : null}

        {show ? (
          <Menu onClick={toggle}>
            <ImCancelCircle />
          </Menu>
        ) : (
          <Menu onClick={toggle}>
            <AiOutlineMenu />
          </Menu>
        )}
      </Wrapper>
    </Container>
  );
};

export default Header;
const Menu = styled.div`
  display: none;
  font-size: 20px;
  color: #fff;

  @media screen and (max-width: 770px) {
    display: flex;
  }
`;
const ToggleWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  left: 0;
  display: none;
  position: absolute;
  top: 70px;
  backdrop-filter: blur(5px);

  @media screen and (max-width: 770px) {
    display: flex;
  }
`;
const Toggle = styled.div`
  width: 200px;
  height: 300px;
  background-color: #6e676772;
`;
const ToggleNav = styled.div`
  margin-bottom: 30px;
  /* border-bottom: 1px solid black; */
  margin-top: 20px;
  color: #fff;
  font-weight: bold;
  margin-left: 10px;
`;

const Button = styled.div`
  margin-left: 20px;
`;
const NavHold = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 770px) {
    display: none;
  }
`;
const Nav = styled.div`
  width: 100px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

const Logo = styled.div`
  color: #fff;
  margin: 0;
  font-size: 20px;
  font-weight: bold;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 65%;
  padding: 8px;
  border-radius: 30px;
  border: 1px solid #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: #7ae582;
  display: flex;
  justify-content: center;
  align-items: center;
`;
