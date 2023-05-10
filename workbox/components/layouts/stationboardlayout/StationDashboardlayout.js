"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const stationblock_1 = require("../../blocks/stationblock");
const react_router_dom_1 = require("react-router-dom");
const styled_components_1 = __importDefault(require("styled-components"));
const blocks_1 = require("../../blocks");
const hi_1 = require("react-icons/hi");
const io_1 = require("react-icons/io");
const gi_1 = require("react-icons/gi");
const bi_1 = require("react-icons/bi");
const rx_1 = require("react-icons/rx");
const StationDashboardlayout = () => {
    return (<div>
      <stationblock_1.StationSideNav />
      <Container>
        <Out>
          <react_router_dom_1.Outlet />
        </Out>
        <AtMobile>
          <blocks_1.MobileNav firstIcon={<hi_1.HiHome />} firstText="Home" firstLink="/station" secondIcon={<io_1.IoIosWallet />} secondText="Carrier" secondLink="/station/mallam" thirdIcon={<gi_1.GiCardPickup />} thirdLink="/station/notify" fourthIcon={<bi_1.BiSupport />} fourthText="Assign" fourthLink="/station/assign" fifthIcon={<rx_1.RxPerson />} fifthText="Profile" fifthLink="/station/profile" colours="#009700"/>
        </AtMobile>
      </Container>
    </div>);
};
exports.default = StationDashboardlayout;
const Container = styled_components_1.default.div `
  display: flex;
  justify-content: flex-end;
`;
const MobileHold = styled_components_1.default.div `
  width: 100vw;
  height: 70px;
  position: fixed;
  bottom: 0;
  display: none;
  @media screen and (max-width: 800px) {
    display: flex;
  }
`;
const Out = styled_components_1.default.div `
  width: calc(100% - 250px);

  @media screen and (max-width: 800px) {
    width: 100%;
  }
  @media screen and (max-width: 1051px) {
    width: calc(100vw - 70px);
    margin-left: 70px;
  }
  @media screen and (max-width: 800px) {
    width: 100vw;
    margin-left: 0px;
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
