import React from "react";
import { Outlet } from "react-router-dom";
import { AuthSideBar } from "../../blocks";
import styled from "styled-components";

const DirectorAuth = () => {
  return (
    <div>
      <Container>
        <AuthSideBar
          title="
              Start your 
              journey with us.
           "
          desc="Manage all incoming request and assigned mallams for waste pick up"
          backgroundColor="#2E53DA"
          CardColor="#1d3fbb85"
        />
        <Outlet />
      </Container>
    </div>
  );
};

export default DirectorAuth;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fefefe;
  overflow: hidden;

  @media screen and (max-width: 748px) {
    display: block;
  }
`;
