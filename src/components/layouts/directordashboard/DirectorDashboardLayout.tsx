import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { DirectorSidenav, MobileNav } from "../../blocks";
import { HiHome } from "react-icons/hi";
import { CiLogout } from "react-icons/ci";
import { GiCardPickup } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { RxPerson } from "react-icons/rx";
import { AiTwotoneBank } from "react-icons/ai";

const DirectorDashboardLayout = () => {
  return (
    <Container>
      <DirectorSidenav />
      <Cont>
      <Outlet />
      <AtMobile>
          <MobileNav
            firstIcon={<HiHome />}
            firstText="Home"
            firstLink="/director/home"
            secondIcon={<AiTwotoneBank />}
            secondText="Stations"
            secondLink="/director/home/stations"
            thirdIcon={<GiCardPickup />}
            fourthIcon={<BiSupport />}
            fourthText="Create Stations"
            fourthLink="stations"
            fifthIcon={<CiLogout />}
            fifthText="Logout"
            fifthLink="profile"
            colours="#170097"
          />
        </AtMobile>
      </Cont>
    </Container>
  );
};
export default DirectorDashboardLayout;

const Container = styled.div`
  /* display: flex;
  justify-content: space-between;
  background-color: #fefefe;

  @media screen and (max-width: 748px) {
    display: block;
  } */
`;
const Cont=styled.div`
  display: flex;
  justify-content: flex-end;
`
const AtMobile = styled.div`
  width: 100vw;
  height: 70px;
  position: fixed;
  bottom: 0;
  @media screen and (min-width: 800px) {
    display: none;
  }
`;