import React from "react";
import { RiNotificationBadgeFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const UserDashboardHistory = () => {
  return (
    <Pending>
      <div style={{ marginBottom: "10px", fontWeight: "bold" }}>History</div>
      <NavLink to="makerequest" style={{ textDecoration: "none" }}>
        <PendingActions>
          <div style={{ fontSize: "13px", fontWeight: "600" }}>
            See all request
          </div>
          <PendSign>
            <RiNotificationBadgeFill />
          </PendSign>
        </PendingActions>
      </NavLink>
      <NavLink to="makepayment" style={{ textDecoration: "none" }}>
        <PendingActions>
          <div style={{ fontSize: "13px", fontWeight: "600" }}>
            See all Payments
          </div>
          <PendSign>
            <RiNotificationBadgeFill />
          </PendSign>
        </PendingActions>
      </NavLink>
    </Pending>
  );
};

export default UserDashboardHistory;
const Pending = styled.div`
  /* width: calc(100% - 80px); */
  width: 90%;
  margin-bottom: 100px;
`;
const PendingActions = styled.div`
  width: calc(100% - 20px);
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  background-color: #ececec;
  margin-bottom: 10px;
`;
const PendSign = styled.div`
  padding: 1px 7px;
  border-radius: 2px;
  color: green;
  font-weight: 600;
  font-size: 14px;
`;
