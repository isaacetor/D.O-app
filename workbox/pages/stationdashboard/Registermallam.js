"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const Store_1 = require("../../services/statemanagement/Store");
const yup_1 = require("@hookform/resolvers/yup");
const yup = __importStar(require("yup"));
const react_hook_form_1 = require("react-hook-form");
const react_query_1 = require("@tanstack/react-query");
const sweetalert2_1 = __importDefault(require("sweetalert2"));
const Globalbutton_1 = __importDefault(require("../../components/commons/props/Globalbutton"));
const utils_1 = require("../../utils");
const react_router_dom_1 = require("react-router-dom");
//for the station name
const Registermallam = () => {
    const stationame = (0, Store_1.useAppSelector)((state) => state.stationdetail);
    // console.log(stationame?._id.toString());
    //Peristing the data of our  carrier
    const navigate = (0, react_router_dom_1.useNavigate)();
    const dispatch = (0, Store_1.UseAppDispatch)();
    const carrierSchema = yup
        .object({
        name: yup.string().required("please enter a name"),
        address: yup.string().required("please enter a name"),
        phoneNumber: yup.string().required("please enter a name"),
        email: yup.string().required("please enter an email"),
    })
        .required();
    const { handleSubmit, formState: { errors }, reset, register, } = (0, react_hook_form_1.useForm)({
        resolver: (0, yup_1.yupResolver)(carrierSchema),
    });
    const posting = (0, react_query_1.useMutation)({
        mutationKey: ["create-carrier"],
        mutationFn: (data) => __awaiter(void 0, void 0, void 0, function* () {
            const result = yield (0, utils_1.carrierRegister)({
                name: data.name,
                phoneNumber: data.phoneNumber,
                email: data.email,
                address: data.address,
                stationID: stationame === null || stationame === void 0 ? void 0 : stationame._id,
            });
            return result;
        }),
        onSuccess: (mycarrier) => {
            // dispatch(registerCarrier(mycarrier.data));
            console.log("This is the mallam data", mycarrier.data);
            sweetalert2_1.default.fire({
                icon: "success",
                title: "Carrier created",
            });
        },
        onError: (error) => {
            var _a, _b;
            console.log("this is error", error);
            // handle error here
            sweetalert2_1.default.fire({
                title: "creating carrier failed",
                text: (_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message,
                icon: "error",
            });
        },
    });
    const Submit = handleSubmit((data) => __awaiter(void 0, void 0, void 0, function* () {
        posting.mutate(data);
        // reset()
    }));
    return (<Cont>
      <Wrap>
        <MainHead>{stationame === null || stationame === void 0 ? void 0 : stationame.station}</MainHead>
        <Main>
          <Details>
            <p>Register Carriers</p>
          </Details>
        </Main>
        <Info onSubmit={Submit}>
          <Infos>
            <Hold>
              <HoldText>Name of Carrier</HoldText>
              <input {...register("name")} type="text" placeholder="Full name"/>
            </Hold>
            <Hold>
              <HoldText>Phone Number</HoldText>
              <input {...register("phoneNumber")} type="text" placeholder="Phone-Number"/>
            </Hold>
            <Hold>
              <HoldText>Email</HoldText>
              <input {...register("email")} type="email" placeholder="email"/>
            </Hold>
            <Hold>
              <HoldText>Address</HoldText>
              <input {...register("address")} type="text" placeholder="Address"/>
            </Hold>
          </Infos>
          <ButHold type="submit">
            <Globalbutton_1.default bg="#03b903" col="#fff" padding="15px" text="Register" bghovercolor="transparent" bor="1px solid #03b903" hovCol="#03b903" width="200px"/>
          </ButHold>
        </Info>
        {/* <LastCard>hello</LastCard> */}
      </Wrap>
    </Cont>);
};
exports.default = Registermallam;
const Cont = styled_components_1.default.div `
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
const Wrap = styled_components_1.default.div `
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  @media screen and (max-width: 800px) {
    width: 100%;
    /* height: 100vh; */
    margin-left: 20px;
  }
`;
const MainHead = styled_components_1.default.div `
  margin-top: 50px;
  font-size: 35px;
  font-weight: 600;

  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`;
const Main = styled_components_1.default.div `
  display: flex;
  width: 50%;
  justify-content: space-between;
  margin-bottom: 20px;

  span {
    color: black;
    font-size: 20px;
    // border-bottom: 3px blue solid;
    padding-bottom: 15px;
  }
`;
const Details = styled_components_1.default.div `
  p {
    color: #03b903;
    font-size: 22px;
    font-weight: bold;
    border-bottom: 3px #03b903 solid;
    /* padding-bottom: 5px; */
    @media screen and (max-width: 800px) {
      font-size: 20px;
    }
    @media screen and (max-width: 500px) {
      font-size: 14px;
    }
  }
`;
const Info = styled_components_1.default.form `
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
const Infos = styled_components_1.default.div `
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
`;
const Hold = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  margin-bottom: 30px;
  input {
    width: 500px;
    height: 45px;
    outline: none;
    padding-left: 8px;
    border-radius: 5px;
    margin-top: 2px;
    /* box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px; */
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    border: none;

    ::placeholder {
      color: lightgray;
      font-size: 16px;

      @media screen and (max-width: 7) {
      }
    }
  }

  @media screen and (max-width: 800px) {
    width: 400px;
  }
  @media screen and (max-width: 500px) {
    width: 300px;
  }
`;
const HoldText = styled_components_1.default.div `
  border-bottom: 3px solid #03b903;
  width: 150px;
  margin-bottom: 10px;
  font-size: 18px;
  color: #a5a5a5;

  @media screen and (max-width: 800px) {
    width: 120px;
    font-size: 14px;
  }
  @media screen and (max-width: 500px) {
    width: 100px;
    font-size: 14px;
  }
`;
const ButHold = styled_components_1.default.button `
  display: flex;
  outline: none;
  border: none;
  background-color: transparent;
`;
