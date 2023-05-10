"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const styled_components_1 = __importDefault(require("styled-components"));
const otp1_svg_1 = __importDefault(require("../../../assets/otp1.svg"));
const Globalbutton_1 = __importDefault(require("./Globalbutton"));
const bs_1 = require("react-icons/bs");
const Verification = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const back = () => {
        navigate("/user/login");
    };
    return (<Container>
      <Icons>
        <bs_1.BsArrowRightCircle />
      </Icons>
      <Wrapper>
        <Logoholder>
          <Logo1 src={otp1_svg_1.default}/>
        </Logoholder>
        <Lower>
          <Text1>OTP Verification</Text1>
          <Text2>We will send you a one-time password to this email</Text2>
          <Text3>Enter Email Address</Text3>
          <Text4>Judith@gmail.com</Text4>
          <Globalbutton_1.default bg="" bghovercolor="" col="" padding="150px" text="hello" hgt="6vh" bor="" hovCol="" width="200px"/>
        </Lower>
      </Wrapper>
    </Container>);
};
exports.default = Verification;
const Button = styled_components_1.default.button `
  padding: 15px 50px;
  border: none;
  outline: none;
  border-radius: 7px;
  color: black;
  background-color: #03b903;
  font-weight: bold;
  font-size: 15px;

  :hover {
    cursor: pointer;
  }
`;
const Icons = styled_components_1.default.div `
  /* background-color: red; */
  font-size: 20px;
  margin-left: 20px;
`;
const Text4 = styled_components_1.default.input `
  width: 80%;
  height: 30px;
  font-size: 16px;
  border: none;
  outline: 0;
  font-weight: 500;

  margin-bottom: 40px;
  border-bottom: 5px solid #03b903;

  @media screen and (max-width: 500px) {
    width: 250px;
  }

  ::placeholder {
    color: #000;
  }
`;
const Text3 = styled_components_1.default.div `
  font-size: 18px;
  color: #03b903;
  font-weight: bold;
  margin-bottom: 20px;
`;
const Text2 = styled_components_1.default.div `
  font-size: 18px;
  color: lightgray;
  margin-bottom: 30px;
`;
const Text1 = styled_components_1.default.h1 `
  margin: 0;
  margin-top: 30px;
`;
const Lower = styled_components_1.default.div `
  margin-left: 20px;
  flex-direction: column;
  /* background-color: red; */

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const Logoholder = styled_components_1.default.div `
  width: 50%;
  height: 500px;
  background-color: #fff;
  object-fit: contain;
  margin-top: 20px;

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 300px;
    display: none;
  }
`;
const Logo1 = styled_components_1.default.img `
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const Wrapper = styled_components_1.default.div `
  width: 90%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const Container = styled_components_1.default.div `
  width: 100%;
  height: 100vh;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: column;
`;
