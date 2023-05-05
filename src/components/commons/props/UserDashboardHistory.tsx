import React from "react";
import { IoIosNotifications } from "react-icons/io";
import styled from "styled-components";

const UserDashboardHistory = () => {
  return (
    <Pending>
      <div style={{ marginBottom: "10px", fontWeight: "bold" }}>History</div>
      <PendingActions>
        <div style={{ fontSize: "13px", fontWeight: "600" }}>
          See all request
        </div>
        {/* <PendSign>PENDING</PendSign> */}
      </PendingActions>
      <PendingActions>
        <div style={{ fontSize: "13px", fontWeight: "600" }}>
          See all Payments
        </div>
        {/* <PendSign> */}
        {/* <IoIosNotifications/> */}
        {/* </PendSign> */}
      </PendingActions>
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
  color: white;
  font-weight: 600;
  background-color: orange;
  font-size: 14px;
`;
