"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blocks_1 = require("../../blocks");
const react_router_dom_1 = require("react-router-dom");
const styled_components_1 = __importDefault(require("styled-components"));
const hi_1 = require("react-icons/hi");
const io_1 = require("react-icons/io");
const gi_1 = require("react-icons/gi");
const bi_1 = require("react-icons/bi");
const rx_1 = require("react-icons/rx");
const UserDashboardLayout = () => {
    return (<Container>
      <blocks_1.Sidenav />
      <react_router_dom_1.Outlet />
      <AtMobile>
        <blocks_1.MobileNav firstIcon={<hi_1.HiHome />} firstText="Home" firstLink="/user/home" secondIcon={<io_1.IoIosWallet />} secondText="Payment" secondLink="makepayment" thirdIcon={<gi_1.GiCardPickup />} fourthIcon={<bi_1.BiSupport />} fourthText="Support" fourthLink="feedback" fifthIcon={<rx_1.RxPerson />} fifthText="Profile" fifthLink="profile" colours="#009700" popUp/>
      </AtMobile>
    </Container>);
};
exports.default = UserDashboardLayout;
const Container = styled_components_1.default.div `
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1051px) {
    justify-content: flex-start;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    justify-content: center;
  }
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
