"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const react_router_dom_1 = require("react-router-dom");
const bi_1 = require("react-icons/bi");
const Globalbutton_1 = __importDefault(require("../../components/commons/props/Globalbutton"));
const ErrorBoundary = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const back = () => {
        navigate(-1);
    };
    return (<Container>
      <Wrapper>
        <Oopsy>
          <Texting>
            <bi_1.BiErrorCircle />
          </Texting>
          <Texting2>Sorry,Something went wrong</Texting2>
          <Texting3>That didnt work.Please have another go</Texting3>
        </Oopsy>
        <Button onClick={back}>
          <Globalbutton_1.default padding="20px " bg="#03b903" col="#fff" text="Back to Homepage" bghovercolor="" bor="" hovCol="" width="100px"/>
        </Button>
      </Wrapper>
    </Container>);
};
exports.default = ErrorBoundary;
const Texting3 = styled_components_1.default.div `
  color: #000;
  width: 300px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
`;
const Texting2 = styled_components_1.default.div `
  color: #000;
  margin: 0;
  margin-bottom: 20px;
  font-size: 25px;
  font-style: italic;
  font-weight: bold;

  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`;
const Texting = styled_components_1.default.div `
  margin: 0;
  font-weight: bolder;
  font-size: 200px;
  margin-top: 50px;
  margin-bottom: 30px;
  font-style: italic;
  color: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #03b903;

  @media screen and (max-width: 500px) {
    font-size: 100px;
  }
`;
const Button = styled_components_1.default.div ``;
const Oopsy = styled_components_1.default.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #fff;
`;
const Wrapper = styled_components_1.default.div `
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #fff;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
`;
const Container = styled_components_1.default.div `
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
