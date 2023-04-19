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
          <h2>Streamlining operations for maximum Productivity.</h2>
          <p>
            Maximize productivity: track all today's requests with our intuitive
            system
          </p>
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
            <Lef>
              <p>Number of Users</p>
            </Lef>
          </Box>
          <Num>
            <p>234</p>
            <small>users</small>
          </Num>
          <Log src={wave} />
        </Users>
        <Users>
          <Box>
            <Box1 style={{ backgroundColor: "green" }}></Box1>
            <Lef>
              <p>Total Amount</p>
            </Lef>
          </Box>
          <Num>
            <p>#4,453,510</p>
            <small></small>
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
  p {
    font-weight: bold;
  }
`;
const Num = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  margin-left: 20px;
  margin-top: -20px;

  p {
    font-size: 35px;
    /* font-weight: bold; */
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
`;

const Pop = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    color: white;
    font-size: 30px;
    margin: 0;
    margin-top: 20px;
    /* line-height: 35px; */
  }
  p {
    color: white;
    font-size: 16px;
  }
`;
const Pip = styled.div`
  img {
    width: 300px;
  }
`;
const Infos = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;
const Users = styled.div`
  width: 400px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  /* justify-content:left; */
  align-items: flex-start;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: relative;
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
  }
`;
