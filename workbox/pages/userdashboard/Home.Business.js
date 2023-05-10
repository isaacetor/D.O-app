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
const components_1 = require("../../components");
const components_2 = require("../../components");
const components_3 = require("../../components");
const components_4 = require("../../components");
const Globalbutton_1 = __importDefault(require("../../components/commons/props/Globalbutton"));
const Store_1 = require("../../services/statemanagement/Store");
const money_png_1 = __importDefault(require("../../assets/images/money.png"));
const request_png_1 = __importDefault(require("../../assets/images/request.png"));
const recycle_png_1 = __importDefault(require("../../assets/images/recycle.png"));
const sweetalert2_1 = __importDefault(require("sweetalert2"));
const axios_1 = __importDefault(require("axios"));
const BusinessHome = () => {
    const user = (0, Store_1.useAppSelector)((state) => state === null || state === void 0 ? void 0 : state.userDetails);
    const station = (0, Store_1.useAppSelector)((state) => { var _a; return (_a = state === null || state === void 0 ? void 0 : state.userDetails) === null || _a === void 0 ? void 0 : _a.station; });
    return (<Container>
      <components_1.UserDashboardHeader title={`welcome, ${user === null || user === void 0 ? void 0 : user.name}`} amount="₦ 2000" button="Top-up balance" display="flex" height="24vh"/>
      <Body>
        <Top>
          <components_2.UserDashboardQuick />
        </Top>

        <Hold>
          <HoldC bg="#3C37FF">
            <components_3.UserDashboardCards bgcol1="" bigText="Top Up Balance" bigTextCol="#fff" smallText="Credit your ecoBin wallet to keep making trash pick-up request" smallTextCol="#fff" imgPic={money_png_1.default}/>
            <Globalbutton_1.default bg="" col="#3C37FF" padding="18px 30px" text="Top Up" bghovercolor="transparent" bor="1px solid #fff" hovCol="#fff" width="200px"/>
          </HoldC>
          <HoldC bg="#039B03">
            <components_3.UserDashboardCards bgcol1="" bigText="Make a Custom Request" bigTextCol="#fff" smallText="Are u having a party or event? ecoBin staff will be there for your trash needs!" smallTextCol="#fff" imgPic={request_png_1.default}/>
            <Globalbutton_1.default bg="" col="#03B903" padding="18px 30px" text="send us an hello!" bghovercolor="transparent" bor="1px solid #fff" hovCol="#fff" width="210px" onClick={() => __awaiter(void 0, void 0, void 0, function* () {
            sweetalert2_1.default.fire({
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
                    return axios_1.default
                        .patch(`https://dirty-online.onrender.com/api/users/make-special-request/${user === null || user === void 0 ? void 0 : user._id}/${station === null || station === void 0 ? void 0 : station._id}`)
                        .then((response) => {
                        var _a;
                        if (response.status !== 200) {
                            throw new Error(response.statusText);
                        }
                        return (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.message;
                    })
                        .catch((error) => {
                        sweetalert2_1.default.showValidationMessage(`error sending request: ${error}`);
                    });
                },
                allowOutsideClick: () => !sweetalert2_1.default.isLoading(),
            }).then((result) => {
                if (result.isConfirmed) {
                    sweetalert2_1.default.fire({
                        title: `${result.value}`,
                    });
                }
            });
        })}/>
          </HoldC>
          <HoldC bg="#039B03">
            <components_3.UserDashboardCards bgcol1="" bigText="Pay with Recyclables" bigTextCol="#fff" smallText="Don't have cash to pay for your waste bills? not to worry, you can pay with recyclable items" smallTextCol="#fff" imgPic={recycle_png_1.default}/>
            <Globalbutton_1.default bg="" col="#03B903" padding="18px 30px" text="Learn More" bghovercolor="transparent" bor="1px solid #fff" hovCol="#fff" width="210px"/>
          </HoldC>
        </Hold>
        <components_4.UserDashboardHistory />
      </Body>
    </Container>);
};
exports.default = BusinessHome;
const Top = styled_components_1.default.div `
  width: 90%;
  margin-top: 30px;

  @media screen and (max-width: 1050px) {
    width: calc(100% - 20px);
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
const HoldC = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  background-color: ${({ bg }) => bg};
  width: 400px;
  padding: 30px;
  border-radius: 10px;
  gap: 30px;

  @media screen and (max-width: 1024px) {
    width: calc(100vw - 70px);
  }
`;
const Hold = styled_components_1.default.div `
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  gap: 30px;

  @media screen and (max-width: 1024px) {
    width: calc(100vw - 70px);
  }
`;
const Container = styled_components_1.default.div `
  width: calc(100vw - 270px);

  @media screen and (max-width: 1024px) {
    width: calc(100vw - 70px);
  }
  /* @media screen and (max-width: 800px) {
    width: 100%;
    background-color: red;
  } */
`;
const Body = styled_components_1.default.div `
  width: 100%;
  color: #3d3d3d;
  margin-top: 180px;
  margin-left: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 35px;

  @media screen and (max-width: 1050px) {
    /* width: calc(100% - 70px); */
    width: 100%;
    margin-left: 0px;
    align-items: center;
    justify-content: center;
  }
  /* @media screen and (max-width: 1024px) {
    width: calc(100% - 30px);
    margin-left: 0px;
    align-items: center;
    justify-content: center;
  } */
  @media screen and (max-width: 800px) {
    width: 100%;
    margin-top: 130px;
    /* margin-left: 0px; */
    align-items: center;
    justify-content: center;
  }
`;
