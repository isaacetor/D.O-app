import React from "react";
import styled from "styled-components";
import { HiHome } from "react-icons/hi";
import { GiCardPickup } from "react-icons/gi";
import { FaWallet } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
import { BsPersonFill } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import { Navbars } from "../../commons";
import { UseAppDispatch } from "../../../services/statemanagement/Store";
import { logout as Logout } from "../../../services/statemanagement/ReduxState";

const SideNav = () => {
  const [home, setHome] = React.useState(true);
  const [wallet, setWallet] = React.useState(true);
  const [notify, setNotify] = React.useState(true);
  const [support, setSupport] = React.useState(true);
  const [account, setAccount] = React.useState(true);
  const [logout, setLogout] = React.useState(true);
  const navigate = useNavigate();
  const dispatch = UseAppDispatch();

  return (
    <div>
      <Container>
        <Wrapper>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <Logo>ecoBIN</Logo>
          </NavLink>

          <Bars>
            <div
              onClick={() => {
                setHome(false);
                setWallet(true);
                setNotify(true);
                setSupport(true);
                setAccount(true);
                setLogout(true);
                navigate("/user/home");
              }}>
              <Navbars
                pic={<HiHome />}
                routeName="Home"
                cl={home ? "#f1f1f1" : "white"}
                bd={home ? "" : "4px solid white"}
                hov={home ? " #03B903F" : ""}
              />
            </div>

            <div
              onClick={() => {
                setHome(true);

                setWallet(false);
                setNotify(true);
                setSupport(true);
                setAccount(true);
                setLogout(true);
                navigate("makepayment");
              }}>
              <Navbars
                pic={<FaWallet />}
                routeName="Make Payment"
                cl={wallet ? "#f1f1f1" : "white"}
                bd={wallet ? "" : "4px solid white"}
                hov={wallet ? " #03B903" : ""}
              />
            </div>
            <div
              onClick={() => {
                setHome(true);

                setWallet(true);
                setNotify(false);
                setSupport(true);
                setAccount(true);
                setLogout(true);
                navigate("makerequest");
              }}>
              <Navbars
                pic={<GiCardPickup />}
                routeName="Make Request"
                cl={notify ? "#f1f1f1" : "white"}
                bd={notify ? "" : "4px solid white"}
                hov={notify ? " #03B903" : ""}
              />
            </div>
            <div
              onClick={() => {
                setHome(true);

                setWallet(true);
                setNotify(true);
                setSupport(false);
                setAccount(true);
                setLogout(true);
                navigate("feedback");
              }}>
              <Navbars
                pic={<AiFillMessage />}
                routeName="Support"
                cl={support ? "#f1f1f1" : "white"}
                bd={support ? "" : "4px solid white"}
                hov={support ? " #03B903" : ""}
              />
            </div>
            <div
              onClick={() => {
                setHome(true);

                setWallet(true);
                setNotify(true);
                setSupport(true);
                setAccount(false);
                setLogout(true);
                navigate("profile");
              }}>
              <Navbars
                pic={<BsPersonFill />}
                routeName="Profile"
                cl={account ? "#f1f1f1" : "white"}
                bd={account ? "" : "4px solid white"}
                hov={account ? " #03B903" : ""}
              />
            </div>
          </Bars>
          <div
            onClick={() => {
              setHome(true);
              setWallet(true);
              setNotify(true);
              setSupport(true);
              setAccount(true);
              setLogout(false);
              dispatch(Logout());
              navigate("/");
            }}>
            <Navbars
              pic={<CiLogout />}
              routeName="Log Out"
              cl={logout ? "#f1f1f1" : "white"}
              bd={logout ? "" : "4px solid white"}
              hov={logout ? " #03B903" : ""}
            />
          </div>
        </Wrapper>
      </Container>
    </div>
  );
};

export default SideNav;

const Wrapper = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  align-items: right;
  flex-direction: column;
`;

const Container = styled.div`
  width: 270px;
  height: 100vh;
  background-color: #009700;
  z-index: 10;
  padding-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  overflow: hidden;

  @media screen and (max-width: 1051px) {
    display: flex;
    width: 70px;
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const Logo = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 600;
  padding-left: 30px;
  @media screen and (min-width: 801px) and (max-width: 1051px) {
    display: none;
  }
`;
const Bars = styled.div`
  width: 100%;
  height: 440px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media screen and (min-width: 801px) and (max-width: 1051px) {
    gap: 25px;
  }
  margin: 0;
  padding: 0;
`;
