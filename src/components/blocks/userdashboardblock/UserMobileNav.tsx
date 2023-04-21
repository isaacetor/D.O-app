import React from "react";
import styled from "styled-components";
import { HiHome } from "react-icons/hi";
import { GiCardPickup } from "react-icons/gi";
import { FaWallet } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
import { BsPersonFill } from "react-icons/bs";

const UserMobileNav = () => {
  return (
    <Container>
      <GreyTop />
      <Contents>
        <WrapContents>
          <Pairs>
            <Nav>
              <Icon>
                <HiHome />
              </Icon>
              <Text>Home</Text>
            </Nav>
            <Nav>
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
            <Nav>
              <Icon>
                <AiFillMessage />
              </Icon>
              <Text>Support</Text>
            </Nav>
            <Nav>
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
  width: 90%;
  height: 90%;
  color: #009700;
  border-radius: 20px;
  margin: auto;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
const GreyTop = styled.div`
  height: 30%;
  background-color: #eeeeee;
  border-top: 1px solid #e7e7e7;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
const Contents = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;
const Pair = styled.div`
  height: 100%;
`;
const Pairs = styled.div`
  display: flex;
  gap: 50px;
  font-size: 12px;
`;
const Single = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 10px;
  background-color: #009700;
  color: white;
  height: 25px;
  width: 25px;
  font-size: 17px;
  margin-top: -14px;
  border: 3px solid white;
`;
const WrapContents = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1px;
`;
const Icon = styled.div`
  font-size: 21px;
`;
const Text = styled.div`
  font-weight: 500;
  color: grey;
`;
