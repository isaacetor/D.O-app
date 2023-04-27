import styled from "styled-components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { GlobalButton } from ".";
import {
  UseAppDispatch,
  useAppSelector,
} from "../../../services/statemanagement/Store";
import Swal from "sweetalert2";
import axios from "axios";
import { upDateRequest } from "../../../services/statemanagement/ReduxState";

const UserDashboardQuick = () => {
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
    <InBody>
      <QuickActions>
        <h1>Quick Actions</h1>
        <QuickContain>
          <QuickWrap>
            <QuickImage>
              <CircularProgressbar
                value={parseInt(percentage!)}
                maxValue={4}
                text={`${percentage}`}
                styles={{
                  path: {
                    stroke: `#000000`,
                    strokeLinecap: "round",
                    width: "10px",
                  },
                  text: {
                    fill: "#fff",

                    fontSize: "20px",
                  },
                }}
              />
              <p>Monthly Request {`${percentage}`}/4</p>
            </QuickImage>
            <QuickComponent>
              <HText>Make a Request with just a click</HText>

              <LText style={{ fontSize: "20px" }}>
                Is your waste full? request for trash pick up now!
              </LText>

              {parseInt(percentage!) === 0 ? (
                <p style={{ color: "red" }}>
                  You have exhausted your request for the month <br /> Make a
                  custom request instead?
                </p>
              ) : (
                <GlobalButton
                  bg=""
                  col="#03b903"
                  padding="18px 30px"
                  text="Make Request"
                  bghovercolor="transparent"
                  hgt="6vh"
                  bor="1px solid #fff"
                  hovCol="#fff"
                  width="200px"
                  onClick={async () => {
                    await Swal.fire({
                      title: "Please Confirm Request?",
                      showCancelButton: true,
                      cancelButtonColor: "#d33",
                      confirmButtonText: "confirm",
                      confirmButtonColor: "#009700",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        makeRequest();
                        Swal.fire("Request sent!", "", "success");
                      } else if (result.isDenied) {
                        Swal.fire("Error sending request", "", "info");
                      }
                    });
                  }}
                />
              )}
            </QuickComponent>
          </QuickWrap>
        </QuickContain>
      </QuickActions>
    </InBody>
  );
};
export default UserDashboardQuick;
const InBody = styled.div`
  width: 93%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
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
  /* width: 100vw; */
  background: rgb(3, 185, 3);
  background: linear-gradient(
    163deg,
    rgba(3, 185, 3, 1) 30%,
    rgba(0, 0, 0, 1) 100%
  );
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media screen and (max-width: 800px) {
    /* width: 100%; */
    background: #80004f;
    padding: 50px 0;
  }
`;
const QuickWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;

  padding: 55px 0;

  /* @media screen and (max-width: 800px) {

    background: #80004f;
    padding: 50px 0;
  } */
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
  /* bottom: -6px; */

  p {
    color: #fff;
    font-size: 16px;
  }
`;
const HText = styled.div`
  font-size: 2.7rem;
  line-height: 3rem;
  width: 83%;
  color: #fff;
  font-weight: 700;

  @media screen and (min-width: 800px) {
    /* font-size: 3.5rem; */
  }

  @media screen and (max-width: 799px) {
    font-size: 30px;
  }
`;
const LText = styled.div`
  font-size: 12px;
  color: #fdfdfddd;
  @media screen and (min-width: 800px) {
    font-size: 22px;
  }
`;
