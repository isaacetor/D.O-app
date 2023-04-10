import React from "react";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import pic from "../../assets/4042.jpg";
import Globalbutton from "../../components/commons/Globalbutton";

const NotFound = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  return (
    <Container>
      <Wrapper>
        <Oopsy>
          <Texting>Oops!</Texting>
          <Texting2>404 - PAGE NOT FOUND</Texting2>
          <Texting3>
            The page you are looking for might have been removed or its
            temporaily unavailable.
          </Texting3>
        </Oopsy>
        <Button onClick={back}>
          <Globalbutton
            padding="20px "
            bg="#03b903"
            col="#fff"
            text="Back to Homepage"
          />
        </Button>
      </Wrapper>
    </Container>
  );
};

export default NotFound;

const Texting3 = styled.div`
  color: #000;
  width: 300px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
`;
const Texting2 = styled.h3`
  color: #000;
  margin: 0;
  margin-bottom: 20px;
`;
const Texting = styled.div`
  margin: 0;
  font-weight: bolder;
  font-size: 200px;
  margin-top: 30px;
  font-style: italic;
  color: #03b903;

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
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
