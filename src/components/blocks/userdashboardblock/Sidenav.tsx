import React from "react";
import { RxDashboard } from "react-icons/rx";
import { BiSupport, BiLogOut } from "react-icons/bi";
import { BsPerson, BsWallet2 } from "react-icons/bs";
import { RiBillLine } from "react-icons/ri";
import styled from "styled-components";

import { NavLink, useNavigate } from "react-router-dom";
// import { logOut } from "../../Global/ReduxState";
// import { UseAppDispatch } from "../../Global/Store";

const UserDashboardHeader = () => {
  // const dispatch = UseAppDispatch();
  const navigate = useNavigate();

  return (
    <div>
      {/* <MobileWrapper> */}
      <Container>
        <Wrapper>
          <LogoNav>
            <Logo>
              <h1>Continental</h1>
            </Logo>
            <Navigation>
              <Nav to="/user">
                <RxDashboard style={{ fontSize: "20px" }} /> Dashboard
              </Nav>
              <Nav to="/user/makerequest">
                <RiBillLine style={{ fontSize: "20px" }} /> View Bill
              </Nav>
              <Nav to="/payment">
                <BsWallet2 style={{ fontSize: "20px" }} />
                Make Payment
              </Nav>
              <Nav to="/profile">
                <BsPerson style={{ fontSize: "20px" }} />
                Profile
              </Nav>
            </Navigation>
          </LogoNav>

          <LogOut
            onClick={() => {
              // dispatch(logOut());
              navigate("/");
            }}
          >
            <BiLogOut style={{ fontSize: "20px" }} />
            logout
          </LogOut>
        </Wrapper>
        <MobileWrapper></MobileWrapper>
      </Container>
      {/* </MobileWrapper> */}
    </div>
  );
};

export default UserDashboardHeader;

const LogoNav = styled.div``;

const LogOut = styled.a`
  /* padding: 10px 20px; */
  display: flex;
  align-items: center;
  font-size: 13px;
  gap: 13px;
  color: #fff;
  font-weight: 300;

  :hover {
    cursor: pointer;
  }
`;

const Nav = styled(NavLink)`
  margin-bottom: 20px;
  width: 100%;
  height: 5vh;
  text-decoration: none;
  color: #fff;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 13px;
  font-weight: 300;
  transition: all ease;

  :hover {
    border-right: 3px solid #ff4500;
  }
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  border-bottom: 1px solid #ffffff1c;
`;

const Logo = styled.div`
  color: #fff;

  h1 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

const Wrapper = styled.div`
  height: 90%;
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const MobileWrapper = styled.div`
  display: block;

  @media screen and (max-width: 800px) {
    display: block;
    width: 100vw;
    height: 10vh;
    background-color: #03001c;
    position: absolute;
    overflow: hidden;
    bottom: 0;
    z-index: 9990px;
  }
`;

const Container = styled.div`
  width: 270px;
  height: 100vh;

  background: rgb(226, 24, 24);
  background: linear-gradient(
    159deg,
     #03b903,#038f03
  );
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  overflow: hidden;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;
