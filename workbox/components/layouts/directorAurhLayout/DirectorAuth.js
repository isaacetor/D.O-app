"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const blocks_1 = require("../../blocks");
const styled_components_1 = __importDefault(require("styled-components"));
const DirectorAuth = () => {
    return (<div>
      <Container>
        <blocks_1.AuthSideBar title="
              Start your 
              journey with us.
           " desc="Manage all incoming request and assigned mallams for waste pick up" backgroundColor="#2E53DA" CardColor="#1d3fbb85"/>
        <react_router_dom_1.Outlet />
      </Container>
    </div>);
};
exports.default = DirectorAuth;
const Container = styled_components_1.default.div `
  display: flex;
  justify-content: space-between;
  background-color: #fefefe;
  overflow: hidden;

  @media screen and (max-width: 748px) {
    display: block;
  }
`;
