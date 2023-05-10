"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const styled_components_1 = __importDefault(require("styled-components"));
const blocks_1 = require("../../blocks");
const hi_1 = require("react-icons/hi");
const ci_1 = require("react-icons/ci");
const gi_1 = require("react-icons/gi");
const bi_1 = require("react-icons/bi");
const ai_1 = require("react-icons/ai");
const DirectorDashboardLayout = () => {
    return (<Container>
      <blocks_1.DirectorSidenav />
      <Cont>
      <react_router_dom_1.Outlet />
      <AtMobile>
          <blocks_1.MobileNav firstIcon={<hi_1.HiHome />} firstText="Home" firstLink="/director/home" secondIcon={<ai_1.AiTwotoneBank />} secondText="Stations" secondLink="/director/home/stations" thirdIcon={<gi_1.GiCardPickup />} fourthIcon={<bi_1.BiSupport />} fourthText="Create Stations" fourthLink="stations" fifthIcon={<ci_1.CiLogout />} fifthText="Logout" fifthLink="profile" colours="#170097"/>
        </AtMobile>
      </Cont>
    </Container>);
};
exports.default = DirectorDashboardLayout;
const Container = styled_components_1.default.div `
  /* display: flex;
  justify-content: space-between;
  background-color: #fefefe;

  @media screen and (max-width: 748px) {
    display: block;
  } */
`;
const Cont = styled_components_1.default.div `
  display: flex;
  justify-content: flex-end;
`;
const AtMobile = styled_components_1.default.div `
  width: 100vw;
  height: 70px;
  position: fixed;
  bottom: 0;
  @media screen and (min-width: 800px) {
    display: none;
  }
`;
