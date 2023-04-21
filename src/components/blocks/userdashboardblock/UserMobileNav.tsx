import React from "react";
import styled from "styled-components";
import { HiHome } from "react-icons/hi";
import { GiCardPickup } from "react-icons/gi";
import { FaWallet } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
import { BsPersonFill } from "react-icons/bs";

const UserMobileNav = () => {
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
              onClick={() => {
                setHome(true);
                setPay(false);
                setSupport(false);
                setProfile(false);
              }}
              cl={home ? "#009700" : "grey"}>
              <Icon>
                <HiHome />
              </Icon>
              <Text>Home</Text>
            </Nav>
            <Nav
              onClick={() => {
                setPay(true);
                setHome(false);
                setSupport(false);
                setProfile(false);
              }}
              cl={pay ? "#009700" : "grey"}>
              <Icon>
                <FaWallet />
              </Icon>
              <Text>Payment</Text>
            </Nav>
          </Pairs>
          <Pair>
            <Single>
              <GiCardPickup />
            </Single>
          </Pair>
          <Pairs>
            <Nav
              onClick={() => {
                setSupport(true);
                setHome(false);
                setPay(false);
                setProfile(false);
              }}
              cl={support ? "#009700 " : "grey"}>
              <Icon>
                <AiFillMessage />
              </Icon>
              <Text>Support</Text>
            </Nav>
            <Nav
              onClick={() => {
                setProfile(true);
                setPay(false);
                setHome(false);
                setSupport(false);
              }}
              cl={profile ? "#009700" : "grey"}>
              <Icon>
                <BsPersonFill />
              </Icon>
              <Text>Profile</Text>
            </Nav>
          </Pairs>
        </WrapContents>
      </Contents>
    </Container>
  );
};

export default UserMobileNav;

const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  margin: auto;
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
  height: 100%;
`;
const Pairs = styled.div`
  display: flex;
  gap: 20px;
  /* @media screen and (min-width: ) {
    
  } */
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
const Nav = styled.div<{ cl: string }>`
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
