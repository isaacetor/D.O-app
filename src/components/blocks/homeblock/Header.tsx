import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { AiOutlineArrowUp } from "react-icons/ai";
import { animateScroll as scroll } from "react-scroll";
import { GlobalButton } from "../../commons";
import { IoIosMenu } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";

const Header = () => {
  const [show, setShow] = React.useState(false);
  const [toTopshow, settoTopShow] = React.useState(false);
  const [isActive, setIsActive] = React.useState(null);
  const [showNav, setSHowNav] = React.useState(false);

  const changeHeaderColor = () => {
    if (window.scrollY >= 250) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  const showNavMenu = () => {
    setSHowNav(!showNav);
  };
  const showBacktoTop = () => {
    if (window.scrollY >= 400) {
      settoTopShow(true);
    } else {
      settoTopShow(false);
    }
  };
  const backToTop = () => {
    scroll.scrollToTop();
  };

  window.addEventListener("scroll", showBacktoTop);
  window.addEventListener("scroll", changeHeaderColor);

  const toHero = (to: any) => {
    scroll.scrollToTop();
    // setIsActive("true");
  };
  const toAbout = (to: any) => {
    scroll.scrollTo(1300);
    setIsActive(to);
  };
  const toFeatures = () => {
    scroll.scrollTo(2100);
  };
  const toSupport = () => {
    scroll.scrollTo(3300);
  };
  return (
    <div>
      {show ? (
        <Container
          boxShadow={show ? "value" : ""}
          fixed="jj"
          border={show ? "value" : ""}
        >
          <Wrapper border={show ? "" : "none"}>
            <LogoNav>
              <Logo onClick={backToTop}>ecoBIN</Logo>
              <Nav>
                <Navigation onClick={toHero}>Home</Navigation>
                <Navigation onClick={toAbout}>About</Navigation>
                <Navigation onClick={toFeatures}>features</Navigation>
                <Navigation onClick={toSupport}>Join us</Navigation>
              </Nav>
            </LogoNav>

            <ButtonHold>
              <NavLink to="/user/register" style={{ textDecoration: "none" }}>
                <GlobalButton
                  text="Create an account"
                  bg="#03B903"
                  col="#fff"
                  padding="15px 15px"
                  bghovercolor=""
                  bor=""
                  hovCol=""
                  width="200px"
                />
              </NavLink>
            </ButtonHold>

            {/* changing mobile menu icons */}
            {showNav ? (
              <MenuHold onClick={showNavMenu}>
                <MdOutlineClose />
              </MenuHold>
            ) : (
              <MenuHold onClick={showNavMenu}>
                <IoIosMenu />
              </MenuHold>
            )}
          </Wrapper>
          {toTopshow ? (
            <BackToTop onClick={backToTop}>
              <AiOutlineArrowUp />
            </BackToTop>
          ) : null}

          {showNav ? (
            <MobileMenu>
              <MNav onClick={toHero}>Home</MNav>
              <MNav onClick={toAbout}>About</MNav>
              <MNav onClick={toFeatures}>Features</MNav>
              <MNav onClick={toSupport}>join us</MNav>
              <NavLink to="/user/register" style={{ textDecoration: "none" }}>
                <GlobalButton
                  text="Create an account"
                  bg="#03B903"
                  col="#fff"
                  padding="10px 10px"
                  bghovercolor=""
                  bor=""
                  hovCol=""
                  width="170px"
                />
              </NavLink>
            </MobileMenu>
          ) : null}
        </Container>
      ) : (
        <Container
          boxShadow={show ? "value" : ""}
          fixed=""
          border={show ? "value" : ""}
        >
          <Wrapper border={show ? "" : "value"}>
            <LogoNav>
              <Logo onClick={backToTop}>ecoBIN</Logo>
              <Nav>
                <Navigation onClick={toHero}>Home</Navigation>
                <Navigation onClick={toAbout}>About</Navigation>
                <Navigation onClick={toFeatures}>Features</Navigation>
                <Navigation onClick={toSupport}>join us</Navigation>
                {/* <Navigation onClick={toSupport}>Customer support</Navigation> */}
              </Nav>
            </LogoNav>

            <ButtonHold>
              <NavLink to="/user/register" style={{ textDecoration: "none" }}>
                <GlobalButton
                  text="Create an account"
                  bg="#03B903"
                  col="#fff"
                  padding="15px 15px"
                  bghovercolor=""
                  bor=""
                  hovCol=""
                  width="200px"
                />
              </NavLink>
            </ButtonHold>

            {/* changing mobile menu icons */}
            {showNav ? (
              <MenuHold onClick={showNavMenu}>
                <MdOutlineClose />
              </MenuHold>
            ) : (
              <MenuHold onClick={showNavMenu}>
                <IoIosMenu />
              </MenuHold>
            )}
          </Wrapper>
          {toTopshow ? (
            <BackToTop onClick={backToTop}>
              <AiOutlineArrowUp />
            </BackToTop>
          ) : null}
          {/* to show the mobile menu */}
          {showNav ? (
            <MobileMenu>
              <MNav onClick={toHero}>Home</MNav>
              <MNav onClick={toAbout}>About</MNav>
              <MNav onClick={toFeatures}>Features</MNav>
              <MNav onClick={toSupport}>join us</MNav>
              <NavLink to="/user/register" style={{ textDecoration: "none" }}>
                <GlobalButton
                  text="Create an account"
                  bg="#03B903"
                  col="#fff"
                  padding="10px 10px"
                  bghovercolor=""
                  bor=""
                  hovCol=""
                  width="170px"
                />
              </NavLink>
            </MobileMenu>
          ) : null}
        </Container>
      )}
    </div>
  );
};

export default Header;

const MNav = styled.p`
  margin: 0;
  font-size: 14px;
  margin-bottom: 20px;
  font-weight: 500;
  transition: all 0.2s ease;
  text-transform: capitalize;

  :hover {
    cursor: pointer;
    color: #03b903;
  }
`;

const MobileMenu = styled.div`
  width: 200px;
  /* height: 40vh; */
  padding: 30px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  position: absolute;
  right: 20px;
  top: 70px;
`;

const MenuHold = styled.div`
  display: none;
  font-size: 2.2rem;

  @media screen and (max-width: 450px) {
    display: flex;
    align-items: center;
    color: #03b903;
    gap: 20px;
  }
`;
const ButtonHold = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 450px) {
    display: none;
  }
`;
const LogoNav = styled.div`
  display: flex;
  align-items: center;
`;

const BackToTop = styled.div`
  padding: 10px 15px;
  background-color: #fff;
  border-radius: 50px;
  position: absolute;
  position: fixed;
  bottom: 20px;
  right: 20px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  font-size: 20px;
  transition: all 0.5s ease;

  :hover {
    cursor: pointer;
  }
`;

const Navigation = styled.p`
  margin: 0;
  margin-left: 40px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  text-transform: capitalize;

  @media screen and (max-width: 768px) {
    display: none;
  }

  :hover {
    cursor: pointer;
    color: #03b903;
  }
`;

const Nav = styled.div`
  height: 70%;
  display: flex;
  align-items: center;
  color: #333333;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  color: #03b903;
  font-size: 1.3rem;
  font-weight: 500;

  :hover {
    cursor: pointer;
  }
`;

const Wrapper = styled.div<{ border: string }>`
  width: 90%;
  margin: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${({ border }) => (border ? "2px solid #03c20376" : "none")};
`;

const Container = styled.div<{
  boxShadow: string;
  fixed: string;
  border: string;
}>`
  width: 100%;
  height: 80px;
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  position: ${({ fixed }) => (fixed ? "fixed" : "")};
  top: 0;
  z-index: 10;
  transition: all 350ms ease;
  color: ${({ color }) => color};
  box-shadow: ${({ boxShadow }) =>
    boxShadow ? "rgba(99, 99, 99, 0.079) 0px 2px 8px 0px" : "none"};
  border-bottom: ${({ border }) => (border ? "2px solid #03c20376" : "none")};
  opacity: 0;
  animation: fade-in 450ms ease-out forwards;

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
