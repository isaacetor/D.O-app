import React from "react";
import { StationSideNav } from "../../blocks/stationblock";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { MobileNav } from "../../blocks";
import { MdTransferWithinAStation } from "react-icons/md";
import { HiHome } from "react-icons/hi";
import { IoIosWallet } from "react-icons/io";
import { GiCardPickup } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { RxPerson } from "react-icons/rx";

const StationDashboardlayout = () => {
  return (
    <div>
      <StationSideNav />
      <Container>
        <Out>
          <Outlet />
        </Out>
        <AtMobile>
          <MobileNav
            firstIcon={<HiHome />}
            firstText="Home"
            firstLink="/station"
            secondIcon={<IoIosWallet />}
            secondText="Carrier"
            secondLink="/station/mallam"
            thirdIcon={<GiCardPickup />}
            thirdLink="/station/notify"
            fourthIcon={<BiSupport />}
            fourthText="Assign"
            fourthLink="/station/assign"
            fifthIcon={<RxPerson />}
            fifthText="Profile"
            fifthLink="/station/profile"
            colours="#009700"
          />
        </AtMobile>
      </Container>
    </div>
  );
};

export default StationDashboardlayout;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const MobileHold = styled.div`
  width: 100vw;
  height: 70px;
  position: fixed;
  bottom: 0;
  display: none;
  @media screen and (max-width: 800px) {
    display: flex;
  }
`;
const Out = styled.div`
  width: calc(100% - 250px);
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
const AtMobile = styled.div`
  width: 100vw;
  height: 70px;
  position: fixed;
  bottom: 0;
  @media screen and (min-width: 800px) {
    display: none;
  }
`;
