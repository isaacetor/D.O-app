import React from "react";
import styled from "styled-components";
import wave from "../../assets/images/wave.png";
import wave1 from "../../assets/images/wave2.png";
import p1 from "../../assets/svgs/draw.svg";

const StationDashboardCard = () => {
  return (
    <One>
      <Detail>
        <Pop>
          <h3>
            Wants some extra <br />
            cash?
          </h3>
          <p>
            so what you have to do is to
            <br />
            just copy the url and paste it here
            <br />
            cause this is rubbish
          </p>
          <Hold1>
            <p>Send</p>
          </Hold1>
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
  background-color: #2e53da;
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
  h3 {
    color: white;
    font-size: 30px;
  }
  p {
    color: white;
    font-size: 14px;
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
  background-color: #14329e;
  width: 800px;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
  margin-bottom: 20px;
  /* gap: 10px; */
`;

const Hold1 = styled.div`
  display: flex;
  width: 80px;
  height: 25px;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 8px 12px;
  /* margin-right: 20px; */
  border-radius: 10px;
  p {
    width: 100%;
    color: #2e53da;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
