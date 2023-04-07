import React from "react";
import styled from "styled-components";
import { GoPrimitiveDot } from "react-icons/go";
import UserDashboardSidebar from "./UserDashboardSidebar";

const WasteBill = () => {
  return (
    <div>
      <Container>
        <Container>
          <Wrapper>
            <Text>Make A Request</Text>
            <Main>
              <First>
                <Bill>
                  <p>Your Payment</p>
                  <h3>#13,000</h3>
                  <span>Applied Gold Account</span>
                </Bill>
                <Request>

                </Request>
                {/* <UserNotification />
                <TransactionHistory /> */}
              </First>
              <Second>
                <UserDashboardSidebar />
              </Second>
            </Main>
          </Wrapper>
        </Container>
      </Container>
    </div>
  );
};

export default WasteBill;

const Request = styled.div`
  width: 350px;
  /* height: 100px; */
  background-color:white;
  border-radius: 10px;
  display:flex;
  flex-direction:column;
  padding:10px;
  margin-top:20px;
  p{
    color:#9b4508;
  }
  h3{
     font-size:30px;
     margin-top:-10px;
    color:#9b4508;
    margin-bottom:-0.1px;
  }
  span{
    color:gray;
    margin-top:10px;

  }
`;
const Bill = styled.div`
  width: 350px;
  /* height: 100px; */
  background-color:white;
  border-radius: 10px;
  display:flex;
  flex-direction:column;
  padding:10px;
  p{
    color:#9b4508;
  }
  h3{
     font-size:30px;
     margin-top:-10px;
    color:#9b4508;
    margin-bottom:-0.1px;
  }
  span{
    color:gray;
    margin-top:10px;

  }
`;

const Second = styled.div`
  width: 35%;
  height: 100%;
`;

const First = styled.div`
  width: 70%;
  height: 100%;
  display:flex;
  flex-direction:column;

  display: flex;
  /* justify-content: space-between; */
  flex-direction: column;
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Text = styled.div`
  width: 100%;
  /* height: 10%; */
  /* background-color: #9b4508; */
  color: #1d1d41;
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 10px;
  margin-top: 20px;
  margin-left: 15px;
`;

const Wrapper = styled.div`
  width: 95%;
  /* height: 95%; */
  /* background: brown; */

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Container = styled.div`
  width: calc(100vw - 270px);
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff2ec92;
`;
