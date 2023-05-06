import React from "react";
import styled from "styled-components";
import pic from "../../assets/images/img2.png";
import { GlobalButton } from "../../components";
import { NavLink } from "react-router-dom";

const Block = () => {
  return (
    <div>
      <Container>
        <Right>
          <img src={pic} alt="" />
        </Right>
        <Left>
          <h1>
            together we can! <br /> encourage proper waste disposal & Promote
            Recycling, For A Greener Future! ♻️🌍
          </h1>
          <NavLink to="/user/register" style={{ textDecoration: "none" }}>
            <GlobalButton width="140px" padding="15px 30px" text="Join Now!" />
          </NavLink>
        </Left>
      </Container>
    </div>
  );
};

export default Block;

const Left = styled.div`
  width: 60%;
  height: 70vh;
  color: #ffffffe1;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 2.3rem;
    margin: 0;
    /* width: 75%; */
    text-transform: capitalize;
    margin-bottom: 30px;
    font-weight: 300;

    @media screen and (max-width: 468px) {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 60vh;
    align-items: center;
    text-align: center;
  }
`;
const Right = styled.div`
  width: 40%;
  height: 70vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Container = styled.div`
  width: 95%;
  margin: auto;
  border-radius: 1.5rem;
  margin-bottom: 4.5rem;
  margin-top: 4.5rem;
  /* background: linear-gradient(99.62deg, #ffffff 2.97%, #03b903 94.08%); */
  background: linear-gradient(99.62deg, #3c37ff 2.97%, #14329e 94.08%);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  margin-top: 40px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;

  @media screen and (max-width: 767px) {
    border-radius: 0px;
  }
`;
