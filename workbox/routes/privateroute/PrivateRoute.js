"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Store_1 = require("../../services/statemanagement/Store");
const PrivateRoutes = ({ children }) => {
    const user = (0, Store_1.useAppSelector)((state) => state.userDetails);
    const check = user === null || user === void 0 ? void 0 : user.name;
    if (check) {
        return children;
    }
    else {
        return <react_router_dom_1.Navigate to="/" replace/>;
    }
};
exports.default = PrivateRoutes;
