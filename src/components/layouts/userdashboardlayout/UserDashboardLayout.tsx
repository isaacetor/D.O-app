import { MobileNav, Sidenav } from "../../blocks";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { HiHome } from "react-icons/hi";
import { IoIosWallet } from "react-icons/io";
import { GiCardPickup } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { RxPerson } from "react-icons/rx";

const UserDashboardLayout = () => {
  return (
    <Container>
      <Sidenav />
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
          colours="#009700"
          popUp
        />
      </AtMobile>
    </Container>
  );
};

export default UserDashboardLayout;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1051px) {
    justify-content: flex-start;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    justify-content: center;
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
