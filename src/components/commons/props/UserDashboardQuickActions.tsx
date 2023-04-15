import React from "react";
import styled from "styled-components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import spiral from "../../../assets/robo.svg";
import two from "../../../assets/two.svg";

import { NavLink } from "react-router-dom";

const UserDashboardQuick = () => {
  const percentage = 3;
  return (
    <InBody>
      <QuickActions>
        <h1>Quick Actions</h1>
        <QuickContain>
          <QuickWrap>
            <QuickImage>
              <CircularProgressbar
                value={percentage}
                maxValue={4}
                text={`${percentage}`}
                styles={{
                  path: {
                    // Path color
                    stroke: `#2f7a2f`,
                    strokeLinecap: "round",
                    width: "10px",
                  },
                  text: {
                    // Text color
                    fill: "#5b3b3b",
                    // Text size
                    fontSize: "16px",
                  },
                }}
              />
              <p>Monthly Request 3/4</p>
            </QuickImage>
            <QuickComponent>
              <HText>Make a Request with just a click</HText>

              <LText style={{ fontSize: "20px" }}>
                Create and sell Gift Cards for your business
              </LText>

              <NavLink
                to="/dashboard/giftcard"
                style={{ textDecoration: "none" }}
              >
                <Button>Make Request</Button>
              </NavLink>
            </QuickComponent>
          </QuickWrap>
        </QuickContain>
      </QuickActions>
    </InBody>
  );
};
export default UserDashboardQuick;
const InBody = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 30px;
`;
const QuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    margin: 0;
    font-weight: 600;
    font-size: 1.5rem;
  }
`;
const QuickContain = styled.div`
  width: 100%;
  /* background-color: #fff; */
  background: rgb(3, 185, 3);
  background: linear-gradient(
    180deg,
    rgba(3, 185, 3, 1) 38%,
    rgba(60, 55, 255, 1) 76%
  );
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px; */
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
`;
const QuickWrap = styled.div`
  width: 100%;
  /* height: 95%; */
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  /* align-items: center; */
  justify-content: space-around;
  /* background-color: yellow; */
  padding: 50px 0;
`;
const QuickComponent = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 10px;

  @media screen and (min-width: 800px) {
    width: 50%;
  }
  @media screen and (max-width: 799px) {
    width: 60%;
    /* background-color: #2c4a72; */
    position: relative;
    top: 50px;
    left: 30px;
  }
`;
const QuickImage = styled.div`
  width: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* position: relative; */
  bottom: -6px;
  /* left: 30px; */
  /* @media screen and (min-width: 800px) {
    width: 50%;
  } */
`;
const Button = styled.button`
  max-width: 200px;
  border-radius: 5px;
  color: white;
  background-color: #03b903;
  border: none;
  outline: none;
  font-weight: bold;
  font-size: 17px;
  padding: 10px 20px;
  transition: all 350ms;
  :hover {
    cursor: pointer;
    /* background-color: #913cf9; */
  }
`;
const HText = styled.div`
  font-size: 28px;
  color: blue;
  font-weight: 600;

  @media screen and (min-width: 800px) {
    /* font-size: 3.5rem; */
  }

  @media screen and (max-width: 799px) {
    font-size: 30px;
  }
`;
const LText = styled.div`
  font-size: 12px;
  color: black;
  @media screen and (min-width: 800px) {
    font-size: 22px;
  }
`;
const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const CardComponent = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  gap: 20px;
  width: calc(100% - 20px);
  padding: 20px;
  background-color: #03b903;
  @media screen and (min-width: 670px) {
    width: calc(45% - 20px);
  }
`;
const CardButton = styled.button`
  max-width: 200px;
  border-radius: 5px;
  background-color: white;
  color: #03b903;
  border: none;
  outline: none;
  font-weight: bold;
  padding: 10px 20px;
  transition: all 350ms;
  :hover {
    cursor: pointer;
    color: #fff;
    border: 2px solid #fff;
    background-color: transparent;
    transform: scale(0.98);
  }
`;
const HText1 = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: #fff;
  @media screen and (min-width: 800px) {
    font-size: 29px;
  }
`;
const LText1 = styled.div`
  font-size: 12px;
  color: #3d3d3d;

  @media screen and (min-width: 800px) {
    font-size: 22px;
  }
`;
const CardImage = styled.div`
  width: 100px;
  img {
    width: 100%;
  }
`;

const CardComponent2 = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  gap: 20px;
  width: calc(100% - 20px);
  padding: 20px;
  background-color: #cecfffad;
  @media screen and (min-width: 670px) {
    width: calc(45% - 20px);
  }
`;
const CardButton2 = styled.button`
  max-width: 200px;
  border-radius: 5px;
  color: white;
  background-color: #2600ff;
  border: none;
  outline: none;
  font-weight: bold;
  padding: 10px 20px;
  transition: all 350ms;
  :hover {
    cursor: pointer;
    background-color: #03b903;
  }
`;
const HText2 = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: #2600ff;
  @media screen and (min-width: 800px) {
    font-size: 29px;
  }
`;
const LText2 = styled.div`
  font-size: 12px;
  color: #3d3d3d;

  @media screen and (min-width: 800px) {
    font-size: 22px;
  }

  @media screen and (max-width: 799px) {
    font-size: 17px;
  }
`;
const CardImage2 = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: white;
  img {
    width: 90%;
    height: 90%;
  }
`;
const Pending = styled.div`
  margin-bottom: 100px;
`;
const PendingActions = styled.div`
  width: calc(100% - 20px);
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  background-color: #ececec;
  margin-bottom: 10px;
`;
const PendSign = styled.div`
  padding: 1px 7px;
  border-radius: 2px;
  color: white;
  font-weight: 600;
  background-color: orange;
  font-size: 14px;
`;
