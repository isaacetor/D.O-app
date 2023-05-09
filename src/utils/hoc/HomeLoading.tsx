import React from "react";
import styled from "styled-components";
import loader from "../../assets/images/loader.gif";
import logo from "../../assets/ecobinlogo.png";

const HomeLoading = () => {
  return (
    <div>
      <Container>
        <img src={logo} alt="" />
        <h3>The home page is loading...</h3>
        {/* <img src={loader} alt="" /> */}
      </Container>
    </div>
  );
};

export default HomeLoading;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  /* background-color: #00000028; */
  align-items: center;
  flex-direction: column;
  position: absolute;
  right: 0;
  h3 {
    color: #03b903;
  }
  img {
    height: 100px;
    width: 100px;
    object-fit: contain;
  }
`;
