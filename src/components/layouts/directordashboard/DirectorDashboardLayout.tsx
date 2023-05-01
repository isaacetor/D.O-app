import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { DirectorSidenav, MobileNav } from "../../blocks";
import { HiHome } from "react-icons/hi";
import { IoIosWallet } from "react-icons/io";
import { GiCardPickup } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { RxPerson } from "react-icons/rx";
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
            firstLink="/user/home"
            secondIcon={<IoIosWallet />}
            secondText="Payment"
            secondLink="makepayment"
            thirdIcon={<GiCardPickup />}
            fourthIcon={<BiSupport />}
            fourthText="Support"
            fourthLink="feedback"
            fifthIcon={<RxPerson />}
            fifthText="Profile"
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