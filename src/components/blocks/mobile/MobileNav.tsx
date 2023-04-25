import React from "react";
import styled from "styled-components";
import { mobileNav } from "../../../types";
import { NavLink, useNavigate } from "react-router-dom";

const MobileNav: React.FC<mobileNav> = ({
  firstIcon,
  firstText,
  firstLink,
  secondIcon,
  secondText,
  secondLink,
  thirdIcon,
  fourthIcon,
  fourthText,
  fourthLink,
  fifthIcon,
  fifthText,
  fifthLink,
  colours,
  thirdLink,
}) => {
  const navigate = useNavigate();
  const [home, setHome] = React.useState(false);
  const [pay, setPay] = React.useState(false);
  const [support, setSupport] = React.useState(false);
  const [profile, setProfile] = React.useState(false);
  const [toggle, setToggle] = React.useState(false);
  return (
    <Container>
      <Contents>
        <WrapContents>
          <Pairs>
            <Nav
              to={firstLink}
              onClick={() => {
                setHome(true);
                setPay(false);
                setSupport(false);
                setProfile(false);
              }}
              cl={home ? colours : "grey"}>
              <Icon>{firstIcon}</Icon>
              <Text>{firstText}</Text>
            </Nav>
            <Nav
              to={secondLink}
              onClick={() => {
                setPay(true);
                setHome(false);
                setSupport(false);
                setProfile(false);
              }}
              cl={pay ? colours : "grey"}>
              <Icon>{secondIcon}</Icon>
              <Text>{secondText}</Text>
            </Nav>
          </Pairs>
          <NavLink style={{ textDecoration: "none" }} to={thirdLink}>
            <Pair
              onClick={() => {
                setToggle(!toggle);
              }}>
              {toggle ? (
                <Single cl={colours}>x</Single>
              ) : (
                <Single cl={colours}>{thirdIcon}</Single>
              )}
            </Pair>
          </NavLink>
          <Pairs>
            <Nav
              to={fourthLink}
              onClick={() => {
                setSupport(true);
                setHome(false);
                setPay(false);
                setProfile(false);
              }}
              cl={support ? colours : "grey"}>
              <Icon>{fourthIcon}</Icon>
              <Text>{fourthText}</Text>
            </Nav>
            <Nav
              to={fifthLink}
              onClick={() => {
                setProfile(true);
                setPay(false);
                setHome(false);
                setSupport(false);
              }}
              cl={profile ? colours : "grey"}>
              <Icon>{fifthIcon}</Icon>
              <Text>{fifthText}</Text>
            </Nav>
          </Pairs>
        </WrapContents>
      </Contents>
      <PopUp dp={toggle ? "flex" : "none"}>
        <Wrap>
          <First>
            <div style={{ marginLeft: "20px" }}>
              <Big>Request for special trash pickup</Big>
              <Small>{"( order for trash pickup at special events )"}</Small>
            </div>
          </First>
          <Middle>
            <div style={{ marginLeft: "20px" }}>
              <Big>Make request for your home</Big>
              <Small>{`( four requests per month )`}</Small>
            </div>
          </Middle>
          <Third
            onClick={() => {
              navigate("makerequest");
              setToggle(false);
            }}>
            <div style={{ marginLeft: "20px" }}>
              <Big>History</Big>
              <Small>{"( view all your requests so far )"}</Small>
            </div>
          </Third>
        </Wrap>
      </PopUp>
    </Container>
  );
};

export default MobileNav;

const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  margin: auto;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
`;
const Contents = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  /* border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px; */
`;
const Pair = styled.div`
  text-decoration: none;
  height: 100%;
  cursor: pointer;
`;
const Pairs = styled.div`
  display: flex;
  gap: 30px;
  z-index: 2;
  @media screen and (min-width: 420px) {
    gap: 50px;
    font-size: 13px;
  }
  @media screen and (min-width: 550px) {
    gap: 70px;
    font-size: 13px;
  }
  @media screen and (min-width: 610px) {
    gap: 110px;
    font-size: 13px;
  }
  font-size: 10px;
`;
const Single = styled.div<{ cl: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 10px;
  background-color: ${({ cl }) => cl};
  color: white;
  height: 35px;
  width: 35px;
  font-size: 30px;
  margin-top: -25px;
  border: 3px solid white;
`;
const WrapContents = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const Nav = styled(NavLink)<{ cl: string }>`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1px;
  color: ${(props) => props.cl};
`;
const Icon = styled.div`
  font-size: 25px;
  display: flex;
  align-items: flex-end;
`;
const Text = styled.div`
  font-weight: 500;
`;

const PopUp = styled.div<{ dp: string }>`
  display: ${({ dp }) => dp};
  width: 100vw;
  height: 100vh;
  background-color: #000000ae;
  position: fixed;
  bottom: 70px;
  z-index: -1;
  transition: all 350ms;
`;
const Wrap = styled.div`
  width: 70%;
  height: 40%;
  margin: auto;
  background-color: white;
  border-radius: 20px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
`;
const First = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  transition: all 350ms;
  cursor: pointer;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  :hover {
    background-color: #e7e7e750;
  }
`;
const Middle = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  border-top: 1px solid #e6e6e6d5;
  border-bottom: 1px solid #e6e6e6d5;
  transition: all 350ms;
  cursor: pointer;
  :hover {
    background-color: #e7e7e750;
  }
`;
const Big = styled.div`
  font-size: 11px;
  @media screen and (min-width: 450px) {
    font-size: 15px;
  }
  @media screen and (min-width: 600px) {
    font-size: 20px;
  }
`;
const Small = styled.div`
  font-size: 10px;
  @media screen and (min-width: 450px) {
    font-size: 10px;
  }
  @media screen and (min-width: 600px) {
    font-size: 13px;
  }
`;
const Third = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  transition: all 350ms;
  cursor: pointer;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  :hover {
    background-color: #e7e7e750;
  }
`;
