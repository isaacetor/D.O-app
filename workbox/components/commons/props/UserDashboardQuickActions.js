"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const react_circular_progressbar_1 = require("react-circular-progressbar");
require("react-circular-progressbar/dist/styles.css");
const _1 = require(".");
const Store_1 = require("../../../services/statemanagement/Store");
const sweetalert2_1 = __importDefault(require("sweetalert2"));
const axios_1 = __importDefault(require("axios"));
const ReduxState_1 = require("../../../services/statemanagement/ReduxState");
const UserDashboardQuick = () => {
    const dispatch = (0, Store_1.UseAppDispatch)();
    const requestNum = (0, Store_1.useAppSelector)((state) => state.requestNumber);
    const user = (0, Store_1.useAppSelector)((state) => state.userDetails);
    const percentage = requestNum;
    const URL = "https://dirty-online.onrender.com";
    const makeRequest = () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        return yield axios_1.default
            .patch(`${URL}/api/users/make-request/${user === null || user === void 0 ? void 0 : user._id}/${(_a = user === null || user === void 0 ? void 0 : user.station) === null || _a === void 0 ? void 0 : _a._id}`)
            .then((res) => {
            //  return res.data;
            dispatch((0, ReduxState_1.upDateRequest)(res.data.RequestData.numberOfRequests));
        })
            .catch((err) => {
            console.log(err);
        });
    });
    return (<InBody>
      <QuickActions>
        <h1>Quick Actions</h1>
        <QuickContain>
          <QuickWrap>
            <QuickImage>
              <react_circular_progressbar_1.CircularProgressbar value={parseInt(percentage)} maxValue={4} text={`${percentage}`} styles={{
            path: {
                stroke: `#000000`,
                strokeLinecap: "round",
                width: "10px",
            },
            text: {
                fill: "#fff",
                fontSize: "20px",
            },
        }}/>
              <p>Monthly Request {`${percentage}`}/4</p>
            </QuickImage>
            <QuickComponent>
              <HText>Make a Request with just a click</HText>

              <LText style={{ fontSize: "19px" }}>
                Is your waste full? request for trash pick up now!
              </LText>

              {parseInt(percentage) === 0 ? (<p style={{ color: "red" }}>
                  You have exhausted your request for the month <br /> Make a
                  custom request instead?
                </p>) : (<_1.GlobalButton bg="" col="#03b903" padding="18px 30px" text="Make Request" bghovercolor="transparent" hgt="6vh" bor="1px solid #fff" hovCol="#fff" width="200px" onClick={() => __awaiter(void 0, void 0, void 0, function* () {
                yield sweetalert2_1.default.fire({
                    title: "Please Confirm Request?",
                    showCancelButton: true,
                    cancelButtonColor: "#d33",
                    confirmButtonText: "confirm",
                    confirmButtonColor: "#009700",
                }).then((result) => {
                    if (result.isConfirmed) {
                        makeRequest();
                        sweetalert2_1.default.fire("Request sent!", "", "success");
                    }
                    else if (result.isDenied) {
                        sweetalert2_1.default.fire("Error sending request", "", "info");
                    }
                });
            })}/>)}
            </QuickComponent>
          </QuickWrap>
        </QuickContain>
      </QuickActions>
    </InBody>);
};
exports.default = UserDashboardQuick;
const InBody = styled_components_1.default.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
const QuickActions = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    margin: 0;
    font-weight: 600;
    font-size: 1.5rem;
  }
`;
const QuickContain = styled_components_1.default.div `
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
    width: 100%;
    /* padding: 50px 0; */
  }
`;
const QuickWrap = styled_components_1.default.div `
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 90px 0;

`;
const QuickComponent = styled_components_1.default.div `
  color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 10px;

  @media screen and (min-width: 800px) {
    width: 50%;
  }
  @media screen and (max-width: 750px) {
    width: 100%;
    position: relative;
    top: 50px;
    left: 30px;
  }
`;
const QuickImage = styled_components_1.default.div `
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
const HText = styled_components_1.default.div `
  font-size: 2.7rem;
  line-height: 3rem;
  width: 83%;
  color: #fff;
  font-weight: 700;

  @media screen and (max-width: 799px) {
    font-size: 30px;
  }
  @media screen and (max-width: 410px) {
    line-height: 40px;
  }
`;
const LText = styled_components_1.default.div `
  font-size: 12px;
  color: #fdfdfddd;
  @media screen and (min-width: 800px) {
    font-size: 22px;
  }
  @media screen and (min-width: 400px) {
    font-size: 18px;
    width: 80%;
  }
`;
