import React from "react";
import styled from "styled-components";
import wave from "../../../assets/picture1.svg";
import wave1 from "../../../assets/picture1.svg";
import p1 from "../../../assets/images/dash1.png";
import { Link, NavLink } from "react-router-dom";

const StationDashboardCard = () => {
  return (
    <Container>
      <Detail>
        <Pop>
          <h2>Maximum Productivity.</h2>
          <p>track all today's requests with our intuitive system</p>
          <Link style={{ textDecoration: "none" }} to="/station/assign">
            <Hold1>View Request</Hold1>
          </Link>
        </Pop>
        <Pip>
          <img src={p1} alt="" />
        </Pip>
      </Detail>
    </Container>
  );
};

export default StationDashboardCard;

const Container = styled.div`
  display: flex;
  width: 100%;
  /* margin-left: 20px; */
  flex-wrap: wrap;

  /* 
  @media screen and (max-width: 800px) {
    width: 100%;
  } */
`;

const Pop = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  h2 {
    color: white;
    font-size: 30px;
    margin: 0;
    margin-top: 20px;
    /* line-height: 35px; */

    @media screen and (max-width: 800px) {
      font-size: 16px;
    }
    @media screen and (max-width: 500px) {
      font-size: 13px;
    }
  }
  p {
    color: white;
    font-size: 16px;

    @media screen and (max-width: 800px) {
      font-size: 11px;
    }
    @media screen and (max-width: 500px) {
      font-size: 10px;
    }
  }

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const Pip = styled.div`
  /* width: 50%; */
  img {
    width: 100%;
  }
`;
const Infos = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  /* background-color: red; */
  flex-wrap: wrap;

  @media screen and (max-width: 800px) {
    gap: 20px;
    align-items: center;
    justify-content: center;
  }
`;

const Detail = styled.div`
  background-color: #03b903;
  background: linear-gradient(
    163deg,
    rgba(3, 185, 3, 1) 30%,
    rgba(0, 0, 0, 1) 100%
  );
  width: 100%;
  height: fit-content;
  border-radius: 10px;
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  padding: 15px;
  margin-bottom: 20px;
  /* gap: 10px; */
`;

const Hold1 = styled.button`
  display: flex;
  width: 150px;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: white;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  color: #03b903;
  font-weight: 600;
  :hover {
    background-color: transparent;
    border: 1px solid #fff;
    cursor: pointer;
    color: #fff;
  }

  @media screen and (max-width: 800px) {
    width: 100px;
    font-size: 14px;
  }

  @media screen and (max-width: 800px) {
    width: 80px;
    font-size: 11px;
  }
`;
