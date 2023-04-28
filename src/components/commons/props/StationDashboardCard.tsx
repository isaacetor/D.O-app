import React from "react";
import styled from "styled-components";
import wave from "../../../assets/images/wave.png";
import wave1 from "../../../assets/images/wave.png";
import p1 from "../../../assets/images/dash1.png";

const StationDashboardCard = () => {
  return (
    <One>
      <Detail>
        <Pop>
          <h2>Maximum Productivity.</h2>
          <p>track all today's requests with our intuitive system</p>
          <Hold1>View Request</Hold1>
        </Pop>
        <Pip>
          <img src={p1} alt="" />
        </Pip>
      </Detail>
      <Infos>
        <Users>
          <Box>
            <Box1></Box1>
            <Lef>Number of Users</Lef>
          </Box>
          <Num>
            <Ptext>234</Ptext>
            <Span>users</Span>
          </Num>
          <Log src={wave} />
        </Users>
        <Users>
          <Box>
            <Box1 style={{ backgroundColor: "green" }}></Box1>
            <Lef>Total Amount</Lef>
          </Box>
          <Num>
            <Ptext>#4,453,510</Ptext>
            <Span></Span>
          </Num>
          <Log src={wave1} style={{ width: "400px", bottom: "80" }} />
        </Users>
        {/* <Amounts></Amounts> */}
      </Infos>
    </One>
  );
};

export default StationDashboardCard;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  margin-top: 20px;
`;
const Box1 = styled.div`
  width: 30px;
  height: 30px;
  /* background-color: f3f4f5" */
  background-color: #03b903;
  margin-right: 10px;
  border-radius: 8px;
`;
const Lef = styled.div`
  font-weight: bold;
`;
const Ptext = styled.div``;
const Span = styled.div``;

const Num = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  margin-left: 20px;
  margin-top: -20px;

  p {
    font-size: 35px;
    font-weight: bold;
    margin-right: 5px;
  }
  h5 {
    margin: 0;
  }

  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`;
const Log = styled.img`
  position: absolute;
  bottom: 50;
  right: 0;
  width: 350px;
`;

const One = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const Pop = styled.div`
  /* width: 50%; */
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
const Users = styled.div`
  width: 400px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: relative;

  @media screen and (max-width: 800px) {
    width: 500px;
  }
  @media screen and (max-width: 500px) {
    width: 350px;
  }
`;

const Detail = styled.div`
  background-color: #03b903;
  background: linear-gradient(
    163deg,
    rgba(3, 185, 3, 1) 30%,
    rgba(0, 0, 0, 1) 100%
  );
  width: 800px;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
  margin-bottom: 20px;
  /* gap: 10px; */

  @media screen and (max-width: 800px) {
    width: 450px;
  }
  @media screen and (max-width: 500px) {
    width: 370px;
  }
  @media screen and (max-width: 350px) {
    width: 300px;
  }
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
