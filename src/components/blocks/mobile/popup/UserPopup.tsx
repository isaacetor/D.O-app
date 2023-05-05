import React from "react";
import styled from "styled-components";
import {
  UseAppDispatch,
  useAppSelector,
} from "../../../../services/statemanagement/Store";
import { upDateRequest } from "../../../../services/statemanagement/ReduxState";
import { CircularProgressbar } from "react-circular-progressbar";
import axios from "axios";

const Popup = () => {
  const dispatch = UseAppDispatch();
  const requestNum = useAppSelector((state) => state.requestNumber);
  const user = useAppSelector((state) => state.userDetails);
  const percentage = requestNum;

  const URL = "https://dirty-online.onrender.com";

  const makeRequest = async () => {
    return await axios
      .patch(`${URL}/api/users/make-request/${user?._id}/${user?.station._id}`)
      .then((res) => {
        //  return res.data;
        dispatch(upDateRequest(res.data.RequestData.numberOfRequests));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Wrapper>
        <Action1>
          <Left1>
            <div style={{ fontWeight: "600", fontSize: "17px" }}>
              Request for trash pickup
            </div>
            <Div>
              <div>{`You can make four(4) requests monthly`}</div>
              <div>
                <CircularProgressbar
                  value={parseInt(percentage!)}
                  maxValue={4}
                  text={`${percentage}`}
                  styles={{
                    root: {
                      height: "35px",
                      width: "35px",
                    },
                    path: {
                      stroke: `#009700`,
                      strokeLinecap: "round",
                    },
                    text: {
                      fill: "#291212",
                      fontSize: "38px",
                    },
                  }}
                />
              </div>
            </Div>
          </Left1>
          <Right1>
            <button onClick={makeRequest}>GO</button>
          </Right1>
        </Action1>
        <Action2>
          <Wrap>
            <Ups>
              <div style={{ fontWeight: "600", fontSize: "17px" }}>
                Request for special trash pickup
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: "gray",
                }}>{`Request for trash pickup at special events around your area`}</div>
            </Ups>
            <Downs>
              <WrapDown>
                <input placeholder="Address" type="text" />
                <button>GO</button>
              </WrapDown>
            </Downs>
          </Wrap>
        </Action2>
        <Action3>
          <br />
          <LastWrap>
            <div>
              <div style={{ fontWeight: "600", fontSize: "17px" }}>
                Request History
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: "gray",
                }}>
                {"Keep track of your request transactions"}
              </div>
            </div>
            <button>GO</button>
          </LastWrap>
        </Action3>
      </Wrapper>
    </Container>
    //02tvseries.com
  );
};

export default Popup;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #292929ac;
  position: absolute;
  bottom: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  height: 50%;
  width: 80%;
  background-color: white;
  color: gray;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Action1 = styled.div`
  margin-top: 5%;
  height: 28%;
  width: 90%;
  display: flex;
  gap: 5%;
  cursor: pointer;
`;
const Action2 = styled.div`
  height: 40%;
  width: 90%;
  border-bottom: 1px solid #a0a0a05a;
  border-top: 1px solid #a0a0a05a;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Action3 = styled.div`
  height: 27%;
  width: 90%;
  cursor: pointer;
`;
const Left1 = styled.div`
  width: 75%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;
const Right1 = styled.div`
  width: 20%;
  height: 90%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  button {
    width: 70%;
    height: 45%;
    border: none;
    border-radius: 5px;
    background-color: #00a078;
    color: white;
    font-weight: 600;
  }
`;
const Div = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  background-color: #d3d3d33d;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 4px;
  padding-bottom: 4px;
`;
const Wrap = styled.div`
  height: 75%;
  width: 100%;
  gap: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* display: flex;
  flex-direction: column;
  gap: 20px; */
`;
const Ups = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  height: 45%;
`;
const Downs = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const WrapDown = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    height: 85%;
    width: 65%;
    border: none;
    outline: none;
    border-radius: 4px;
    padding-left: 10px;
    border: 1px solid #00a078;
    ::placeholder {
      color: #afafaf;
      font-size: 15px;
    }
  }
  button {
    width: 15%;
    height: 100%;
    border: none;
    border-radius: 5px;
    background-color: #00a078;
    color: white;
    font-weight: 600;
  }
`;
const LastWrap = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    width: 15%;
    height: 100%;
    border: none;
    border-radius: 5px;
    background-color: #00a078;
    color: white;
    font-weight: 600;
  }
`;
