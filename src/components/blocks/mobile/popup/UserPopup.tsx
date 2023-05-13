import React from "react";
import styled from "styled-components";
import {
  UseAppDispatch,
  useAppSelector,
} from "../../../../services/statemanagement/Store";
import {
  logout,
  upDateRequest,
} from "../../../../services/statemanagement/ReduxState";
import { CircularProgressbar } from "react-circular-progressbar";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Popup = () => {
  const user = useAppSelector((state) => state?.userDetails);
  const station = useAppSelector((state) => state?.userDetails?.station);
  const dispatch = UseAppDispatch();
  const requestNum = useAppSelector((state) => state.requestNumber);
  const percentage = requestNum;
  const navigate = useNavigate();

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
                  fontSize: "13px",
                  color: "gray",
                }}>{`Request for trash pickup at special events around your area`}</div>
            </Ups>
            <br />
            <Downs>
              <WrapDown>
                <input placeholder="Address" type="text" />
                <button
                  onClick={async () => {
                    Swal.fire({
                      title: "Send Us A Message",
                      text: "used up your request or having a party? let's help you with your trash needs",
                      input: "text",
                      inputAttributes: {
                        autocapitalize: "true",
                        placeholder: "please enter location address here",
                      },
                      showCancelButton: true,
                      cancelButtonColor: "#d33",
                      confirmButtonText: "Make Custom Request",
                      confirmButtonColor: "#009700",
                      showLoaderOnConfirm: true,
                      preConfirm: (message) => {
                        return axios
                          .patch(
                            `https://dirty-online.onrender.com/api/users/make-special-request/${user?._id}/${station?._id}`
                          )
                          .then((response) => {
                            if (response.status !== 200) {
                              throw new Error(response.statusText);
                            }

                            return response?.data?.message;
                          })
                          .catch((error) => {
                            Swal.showValidationMessage(
                              `error sending request: ${error}`
                            );
                          });
                      },
                      allowOutsideClick: () => !Swal.isLoading(),
                    }).then((result) => {
                      if (result.isConfirmed) {
                        Swal.fire({
                          title: `${result.value}`,
                        });
                      }
                    });
                  }}>
                  GO
                </button>
              </WrapDown>
            </Downs>
          </Wrap>
        </Action2>
        <Action3>
          <LastWrap>
            <div>
              <div style={{ fontWeight: "600", fontSize: "17px" }}>
                Request History
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "gray",
                }}>
                {"Keep track of your request transactions"}
              </div>
            </div>
            <button
              onClick={() => {
                navigate("/user/home/makerequest");
              }}>
              GO
            </button>
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
  /* height: 60%; */
  width: 80%;
  background-color: white;
  color: gray;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 15px;
  padding-bottom: 25px;
  z-index: 5;
`;
const Action1 = styled.div`
  margin-top: 2%;
  height: fit-content;
  width: 90%;
  display: flex;
  gap: 5%;
  cursor: pointer;
`;
const Action2 = styled.div`
  height: fit-content;
  width: 90%;
  border-bottom: 1px solid #a0a0a05a;
  border-top: 1px solid #a0a0a05a;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
`;
const Action3 = styled.div`
  height: fit-content;
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
    width: 50px;
    height: 40px;
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
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    height: 39px;
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
    width: 50px;
    height: 40px;
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
    width: 50px;
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: #00a078;
    color: white;
    font-weight: 600;
  }
`;
