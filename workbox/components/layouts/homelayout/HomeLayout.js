"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const blocks_1 = require("../../blocks");
const react_router_dom_1 = require("react-router-dom");
const styled_components_1 = __importDefault(require("styled-components"));
const HomeLayout = () => {
    return (<Container>
      <blocks_1.Header />
      <react_router_dom_1.Outlet />
      <blocks_1.Footer />
    </Container>);
};
exports.default = HomeLayout;
const Container = styled_components_1.default.div `
  background-color: #ffffff;
`;
