import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BiErrorCircle } from "react-icons/bi";
import Globalbutton from "../../components/commons/props/Globalbutton";

const ErrorBoundary = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  return (
    <Container>
      <Wrapper>
        <Oopsy>
          <Texting>
            <BiErrorCircle />
          </Texting>
          <Texting2>Sorry,Something went wrong</Texting2>
          <Texting3>That didnt work.Please have another go</Texting3>
        </Oopsy>
        <Button onClick={back}>
          <Globalbutton
            padding="20px "
            bg="#03b903"
            col="#fff"
            text="Back to Homepage"
            bghovercolor=""
            bor=""
            hovCol=""
            width="100px"
          />
        </Button>
      </Wrapper>
    </Container>
  );
};

export default ErrorBoundary;

const Texting3 = styled.div`
  color: #000;
  width: 300px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
`;
const Texting2 = styled.div`
  color: #000;
  margin: 0;
  margin-bottom: 20px;
  font-size: 25px;
  font-style: italic;
  font-weight: bold;

  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`;
const Texting = styled.div`
  margin: 0;
  font-weight: bolder;
  font-size: 200px;
  margin-top: 50px;
  margin-bottom: 30px;
  font-style: italic;
  color: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #03b903;

  @media screen and (max-width: 500px) {
    font-size: 100px;
  }
`;
const Button = styled.div``;
const Oopsy = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #fff;
`;
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #fff;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
