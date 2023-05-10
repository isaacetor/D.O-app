"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ai_1 = require("react-icons/ai");
const styled_components_1 = __importDefault(require("styled-components"));
const UserDashboardHeader = ({ title, button, amount, display, height, btnDisplay, }) => {
    const [show, setShow] = (0, react_1.useState)(false);
    return (<Container height={height}>
      <Head>
        <Message>
          <h1>{title}</h1>
        </Message>
        <SeeBalance display={display}>
          <BalanceDetails>
            <Viewer>
              <div style={{ marginBottom: "5px" }}>Available balance</div>
              <Eye onClick={() => {
            setShow(!show);
        }}>
                {show ? (<ai_1.AiFillEye style={{
                marginTop: "3px",
                // fontSize: "30px",
                cursor: "pointer",
            }}/>) : (<ai_1.AiFillEyeInvisible style={{
                marginTop: "3px",
                // fontSize: "30px",
                cursor: "pointer",
            }}/>)}
              </Eye>
            </Viewer>
            {show ? (<Info>
                {/* ₦{user?.Balance}.00</Info> */}
                {amount}
              </Info>) : (<Info>*******</Info>)}
          </BalanceDetails>
          <WithdrawButton btnDisplay={btnDisplay}>{button}</WithdrawButton>
        </SeeBalance>
      </Head>
    </Container>);
};
exports.default = UserDashboardHeader;
const Head = styled_components_1.default.div `
  width: 94%;
  height: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index: 10;
`;
const Message = styled_components_1.default.div `
  font-size: 13px;
  display: flex;
  @media screen and (max-width: 800px) {
    font-size: 10px;
  }
  h1 {
    margin: 0;
    color: #333333;
    font-weight: 500;
    @media screen and (max-width: 800px) {
      font-size: 17px;
      margin-top: 10px;
    }
  }

  @media screen and (max-width: 799px) {
    /* margin-top: 10px; */
  }
`;
const SeeBalance = styled_components_1.default.div `
  color: blue;
  width: 100%;
  display: ${({ display }) => display};
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Viewer = styled_components_1.default.div `
  display: flex;
  gap: 30px;
  align-items: center;
  font-size: 18px;
  @media screen and (max-width: 800px) {
    font-size: 12px;
    gap: 20px;
  }
  margin-top: 10px;
`;
const Info = styled_components_1.default.div `
  font-size: 25px;
`;
const BalanceDetails = styled_components_1.default.div ``;
const WithdrawButton = styled_components_1.default.button `
  border-radius: 10px;
  color: white;
  background-color: #03b903;
  padding: 15px 60px;
  border: none;
  outline: none;
  font-size: 17px;
  margin-top: 30px;
  transition: all 350ms;
  display: ${({ btnDisplay }) => btnDisplay};
  @media screen and (max-width: 800px) {
    display: none;
  }
  :hover {
    cursor: pointer;
    background-color: #01a001;
  }
`;
const Container = styled_components_1.default.div `
  width: calc(100% - 270px);
  height: ${({ height }) => height};
  @media screen and (max-width: 800px) {
    height: 100px;
  }
  background-color: #f9f4ff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(130, 130, 130);
  box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px,
    rgba(255, 255, 255, 0.25) 0px 1px 0px inset;
  position: fixed;
  top: 0px;
  right: 0;
  z-index: 20;

  @media screen and (max-width: 1051px) {
    width: calc(100vw - 70px);
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
const Eye = styled_components_1.default.div `
  font-size: 30px;
  @media screen and (max-width: 800px) {
    font-size: 17px;
  }
`;
