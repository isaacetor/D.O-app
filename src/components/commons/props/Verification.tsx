import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import pic from "../../../assets/otp1.svg";
import Globalbutton from "./Globalbutton";
import { BsArrowRightCircle } from "react-icons/bs";

const Verification = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate("/user/login");
  };
  return (
    <Container>
      <Icons>
        <BsArrowRightCircle />
      </Icons>
      <Wrapper>
        <Logoholder>
          <Logo1 src={pic} />
        </Logoholder>
        <Lower>
          <Text1>OTP Verification</Text1>
          <Text2>We will send you a one-time password to this email</Text2>
          <Text3>Enter Email Address</Text3>
          <Text4>Judith@gmail.com</Text4>
          <Globalbutton
            bg=""
            bghovercolor=""
            col=""
            padding="150px"
            text="hello"
            hgt="6vh"
            bor=""
            hovCol=""
            width="200px"
          />
        </Lower>
      </Wrapper>
    </Container>
  );
};

export default Verification;
const Button = styled.button`
  padding: 15px 50px;
  border: none;
  outline: none;
  border-radius: 7px;
  color: black;
  background-color: #03b903;
  font-weight: bold;
  font-size: 15px;

  :hover {
    cursor: pointer;
  }
`;
const Icons = styled.div`
  /* background-color: red; */
  font-size: 20px;
  margin-left: 20px;
`;
const Text4 = styled.input`
  width: 80%;
  height: 30px;
  font-size: 16px;
  border: none;
  outline: 0;
  font-weight: 500;

  margin-bottom: 40px;
  border-bottom: 5px solid #03b903;

  @media screen and (max-width: 500px) {
    width: 250px;
  }

  ::placeholder {
    color: #000;
  }
`;
const Text3 = styled.div`
  font-size: 18px;
  color: #03b903;
  font-weight: bold;
  margin-bottom: 20px;
`;
const Text2 = styled.div`
  font-size: 18px;
  color: lightgray;
  margin-bottom: 30px;
`;
const Text1 = styled.h1`
  margin: 0;
  margin-top: 30px;
`;
const Lower = styled.div`
  margin-left: 20px;
  flex-direction: column;
  /* background-color: red; */

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const Logoholder = styled.div`
  width: 50%;
  height: 500px;
  background-color: #fff;
  object-fit: contain;
  margin-top: 20px;

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 300px;
    display: none;
  }
`;
const Logo1 = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: column;
`;
