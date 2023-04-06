import React from "react";
import styled from "styled-components";
import Globalbutton from "../../commons/Globalbutton";

const Header = () => {
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
            <Globalbutton bg="yellow" wd="100px" hgt="40px" />
          </Button>
        </NavHold>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Button = styled.div``;
const NavHold = styled.div`
  display: flex;
  align-items: center;
`;
const Nav = styled.div`
  width: 150px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

const Logo = styled.h2`
  color: #fff;
`;
const Wrapper = styled.div`
  width: 95%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: red;
`;
const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: #7ae582;
  display: flex;
  justify-content: center;
  align-items: center;
`;
