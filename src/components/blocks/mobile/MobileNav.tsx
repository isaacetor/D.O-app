import React from "react";
import styled from "styled-components";
import { mobileNav } from "../../../types";
import { NavLink } from "react-router-dom";

const MobileNav: React.FC<mobileNav> = ({
  firstIcon,
  firstText,
  firstLink,
  secondIcon,
  secondText,
  secondLink,
  thirdIcon,
  thirdLink,
  fourthIcon,
  fourthText,
  fourthLink,
  fifthIcon,
  fifthText,
  fifthLink,
}) => {
  const [home, setHome] = React.useState(false);
  const [pay, setPay] = React.useState(false);
  const [support, setSupport] = React.useState(false);
  const [profile, setProfile] = React.useState(false);
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
              cl={home ? "#009700" : "grey"}>
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
              cl={pay ? "#009700" : "grey"}>
              <Icon>{secondIcon}</Icon>
              <Text>{secondText}</Text>
            </Nav>
          </Pairs>
          <Pair to={thirdLink}>
            <Single>{thirdIcon}</Single>
          </Pair>
          <Pairs>
            <Nav
              to={fourthLink}
              onClick={() => {
                setSupport(true);
                setHome(false);
                setPay(false);
                setProfile(false);
              }}
              cl={support ? "#009700 " : "grey"}>
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
              cl={profile ? "#009700" : "grey"}>
              <Icon>{fifthIcon}</Icon>
              <Text>{fifthText}</Text>
            </Nav>
          </Pairs>
        </WrapContents>
      </Contents>
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
const Pair = styled(NavLink)`
  text-decoration: none;
  height: 100%;
`;
const Pairs = styled.div`
  display: flex;
  gap: 30px;
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
const Single = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 10px;
  background-color: #009700;
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