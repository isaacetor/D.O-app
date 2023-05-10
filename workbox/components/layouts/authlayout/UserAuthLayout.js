"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const blocks_1 = require("../../blocks");
const styled_components_1 = __importDefault(require("styled-components"));
const UserAuthLayout = () => {
    return (<Container>
      <blocks_1.AuthSideBar title="
              Start your 
              journey with us.
           " desc="Don't want to wait for the trash guy? 
              You don't have to. You can request one anytime!" backgroundColor="#03B903" CardColor="#01860188"/>
      <react_router_dom_1.Outlet />
    </Container>);
};
exports.default = UserAuthLayout;
const Container = styled_components_1.default.div `
  display: flex;
  justify-content: space-between;
  background-color: #fefefe;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 748px) {
    display: block;
  }
`;
