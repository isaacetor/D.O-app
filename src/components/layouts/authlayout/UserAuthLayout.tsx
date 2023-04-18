import React from "react";
import { Outlet } from "react-router-dom";
import { AuthSideBar } from "../../blocks";
import styled from "styled-components";

const UserAuthLayout = () => {
  return (
    <Container>
      <AuthSideBar
        title="
              Start your 
              journey with us.
           "
        desc="Don't want to wait for the trash guy? 
              You don't have to. You can request one anytime!"
        backgroundColor="#03B903"
        CardColor="#01860188"
      />
      <Outlet />
    </Container>
  );
};

export default UserAuthLayout;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  background-color: #fefefe;
  overflow: hidden;

  @media screen and (max-width: 748px) {
    display: block;
  }
`;
