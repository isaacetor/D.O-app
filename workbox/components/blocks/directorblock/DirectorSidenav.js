"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const hi_1 = require("react-icons/hi");
const gi_1 = require("react-icons/gi");
const fa_1 = require("react-icons/fa");
const ai_1 = require("react-icons/ai");
const ci_1 = require("react-icons/ci");
const bs_1 = require("react-icons/bs");
const react_router_dom_1 = require("react-router-dom");
// import { UseAppDispatch } from "../../../Global/Store";
// import { logout as LogOut } from "../../../Global/ReduxState";
const commons_1 = require("../../commons");
const DirectorSidenav = () => {
    const [home, setHome] = react_1.default.useState(true);
    const [wallet, setWallet] = react_1.default.useState(true);
    const [notify, setNotify] = react_1.default.useState(true);
    const [support, setSupport] = react_1.default.useState(true);
    const [account, setAccount] = react_1.default.useState(true);
    const [logout, setLogout] = react_1.default.useState(true);
    const navigate = (0, react_router_dom_1.useNavigate)();
    // const dispatch = UseAppDispatch();
    return (<Container>
      <Wrapper>
        <Logo>Ecobin</Logo>

        <Bars>
          <div onClick={() => {
            setHome(false);
            setWallet(true);
            setNotify(true);
            setSupport(true);
            setAccount(true);
            setLogout(true);
            navigate("/user");
        }}>
            <commons_1.Navbars pic={<hi_1.HiHome />} routeName="Home" cl={home ? "#f1f1f1" : "white"} bd={home ? "" : "4px solid white"} hov={home ? " #03B903F" : ""}/>
          </div>

          <div onClick={() => {
            setHome(true);
            setWallet(false);
            setNotify(true);
            setSupport(true);
            setAccount(true);
            setLogout(true);
            navigate("makepayment");
        }}>
            <commons_1.Navbars pic={<fa_1.FaWallet />} routeName="Make Payment" cl={wallet ? "#f1f1f1" : "white"} bd={wallet ? "" : "4px solid white"} hov={wallet ? " #03B903" : ""}/>
          </div>
          <div onClick={() => {
            setHome(true);
            setWallet(true);
            setNotify(false);
            setSupport(true);
            setAccount(true);
            setLogout(true);
            navigate("makerequest");
        }}>
            <commons_1.Navbars pic={<gi_1.GiCardPickup />} routeName="Make Request" cl={notify ? "#f1f1f1" : "white"} bd={notify ? "" : "4px solid white"} hov={notify ? " #03B903" : ""}/>
          </div>
          <div onClick={() => {
            setHome(true);
            setWallet(true);
            setNotify(true);
            setSupport(false);
            setAccount(true);
            setLogout(true);
            navigate("feedback");
        }}>
            <commons_1.Navbars pic={<ai_1.AiFillMessage />} routeName="Support" cl={support ? "#f1f1f1" : "white"} bd={support ? "" : "4px solid white"} hov={support ? " #03B903" : ""}/>
          </div>
          <div onClick={() => {
            setHome(true);
            setWallet(true);
            setNotify(true);
            setSupport(true);
            setAccount(false);
            setLogout(true);
            navigate("profile");
        }}>
            <commons_1.Navbars pic={<bs_1.BsPersonFill />} routeName="Profile" cl={account ? "#f1f1f1" : "white"} bd={account ? "" : "4px solid white"} hov={account ? " #03B903" : ""}/>
          </div>
        </Bars>
        <div onClick={() => {
            setHome(true);
            setWallet(true);
            setNotify(true);
            setSupport(true);
            setAccount(true);
            setLogout(false);
            // dispatch(LogOut());
            navigate("/");
        }}>
          <commons_1.Navbars pic={<ci_1.CiLogout />} routeName="Log Out" cl={logout ? "#f1f1f1" : "white"} bd={logout ? "" : "4px solid white"} hov={logout ? " #03B903" : ""}/>
        </div>
      </Wrapper>
    </Container>);
};
exports.default = DirectorSidenav;
const Wrapper = styled_components_1.default.div `
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  align-items: right;
  flex-direction: column;
`;
const Container = styled_components_1.default.div `
  width: 270px;
  height: 100vh;
  background-color: #2e53da;
  z-index: 10;
  padding-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  overflow: hidden;

  @media screen and (max-width: 800px) {
    display: none;
  } ;
`;
const Logo = styled_components_1.default.div `
  color: white;
  font-weight: 700;
  padding-left: 30px;
  @media screen and (min-width: 801px) and (max-width: 1051px) {
    display: none;
  }
`;
const Bars = styled_components_1.default.div `
  width: 100%;
  height: 440px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media screen and (min-width: 801px) and (max-width: 1051px) {
    gap: 25px;
  }
  margin: 0;
  padding: 0;
`;
