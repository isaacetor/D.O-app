"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ri_1 = require("react-icons/ri");
const react_router_dom_1 = require("react-router-dom");
const styled_components_1 = __importDefault(require("styled-components"));
const UserDashboardHistory = () => {
    return (<Pending>
      <div style={{ marginBottom: "10px", fontWeight: "bold" }}>History</div>
      <react_router_dom_1.NavLink to="makerequest" style={{ textDecoration: "none" }}>
        <PendingActions>
          <div style={{ fontSize: "13px", fontWeight: "600" }}>
            See all request
          </div>
          <PendSign>
            <ri_1.RiNotificationBadgeFill />
          </PendSign>
        </PendingActions>
      </react_router_dom_1.NavLink>

      <react_router_dom_1.NavLink to="makepayment" style={{ textDecoration: "none" }}>
           <PendingActions>
        <div style={{ fontSize: "13px", fontWeight: "600" }}>
          See all Payments
        </div>
        <PendSign>
          <ri_1.RiNotificationBadgeFill />
        </PendSign>
      </PendingActions>
          </react_router_dom_1.NavLink>
   
    </Pending>);
};
exports.default = UserDashboardHistory;
const Pending = styled_components_1.default.div `
  /* width: calc(100% - 80px); */
  width: 90%;
  margin-bottom: 100px;
`;
const PendingActions = styled_components_1.default.div `
  width: calc(100% - 20px);
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  background-color: #ececec;
  margin-bottom: 10px;
`;
const PendSign = styled_components_1.default.div `
  padding: 1px 7px;
  border-radius: 2px;
  color: green;
  font-weight: 600;
  font-size: 14px;
`;
