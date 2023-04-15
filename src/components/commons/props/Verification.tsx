import React from "react";
import styled from "styled-components";
import pic from "../../../assets/otp1.svg";
import Globalbutton from "./Globalbutton";

const Verification = () => {
  return (
    <Container>
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
          />
        </Lower>
      </Wrapper>
    </Container>
  );
};

export default Verification;
const Text4 = styled.div``;
const Text3 = styled.div``;
const Text2 = styled.div``;
const Text1 = styled.div``;
const Lower = styled.div``;
const Logoholder = styled.div`
  width: 50%;
  height: 500px;
  background: #bdbbbb;
`;
const Logo1 = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const Wrapper = styled.div`
  width: 90%;
  background-color: yellow;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
