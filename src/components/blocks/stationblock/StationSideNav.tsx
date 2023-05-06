import React from "react";
import styled from "styled-components";
import { HiHome, HiBell } from "react-icons/hi";
import { GiCardPickup } from "react-icons/gi";
import { FaWallet } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
import { BsPersonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
// import { UseAppDispatch } from "../../../Global/Store";
// import { logout as LogOut } from "../../../Global/ReduxState";
import { Navbars } from "../../commons";

const StationSideNav = () => {
  const [home, setHome] = React.useState(true);
  const [wallet, setWallet] = React.useState(true);
  const [notify, setNotify] = React.useState(true);
  const [support, setSupport] = React.useState(true);
  const [account, setAccount] = React.useState(true);
  const [logout, setLogout] = React.useState(true);

  const navigate = useNavigate();
  // const dispatch = UseAppDispatch();

  return (
    <Container>
      <Wrapper>
        <Logo>Ecobin</Logo>

        <Bars>
          <div
            onClick={() => {
              setHome(false);

              setWallet(true);
              setNotify(true);
              setSupport(true);
              setAccount(true);
              setLogout(true);
              navigate("/station");
            }}
          >
            <Navbars
              pic={<HiHome />}
              routeName="Dashboard"
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
              navigate("mallam");
            }}
          >
            <Navbars
              pic={<FaWallet />}
              routeName="Register Carrier"
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
              navigate("notify");
            }}
          >
            <Navbars
              pic={<GiCardPickup />}
              routeName="Asssign Carrier"
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
              navigate("assign");
            }}
          >
            <Navbars
              pic={<AiFillMessage />}
              routeName="View Request"
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
            }}
          >
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
            // dispatch(LogOut());
            navigate("/");
          }}
        >
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
  );
};

export default StationSideNav;

const Wrapper = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  align-items: right;
  flex-direction: column;
`;

const Container = styled.div`
  width: 250px;
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
  @media screen and (max-width: 799px) {
    display: none;
  }
`;
const Logo = styled.div`
  color: white;
  font-weight: 700;
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
