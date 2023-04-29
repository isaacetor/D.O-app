import React from "react";
import { StationSideNav } from "../../blocks/stationblock";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { MobileNav } from "../../blocks";
import { MdTransferWithinAStation } from "react-icons/md";

const StationDashboardlayout = () => {
  return (
    <div>
      <StationSideNav />
      <Container>
        <Outlet />
        <MobileHold>
          <MobileNav
            fifthIcon={<MdTransferWithinAStation />}
            firstText="Hom"
            firstLink=""
            secondIcon={<MdTransferWithinAStation />}
            secondText="Payment"
            secondLink=""
            thirdIcon={<MdTransferWithinAStation />}
            fourthIcon={<MdTransferWithinAStation />}
            fourthText="Support"
            fourthLink=""
            firstIcon={<MdTransferWithinAStation />}
            fifthText=""
            fifthLink=""
            thirdLink=""
            colours=""
          />
        </MobileHold>
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
