"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const react_router_dom_1 = require("react-router-dom");
const ai_1 = require("react-icons/ai");
const react_scroll_1 = require("react-scroll");
const commons_1 = require("../../commons");
const io_1 = require("react-icons/io");
const md_1 = require("react-icons/md");
const Header = () => {
    const [show, setShow] = react_1.default.useState(false);
    const [toTopshow, settoTopShow] = react_1.default.useState(false);
    const [isActive, setIsActive] = react_1.default.useState(null);
    const [showNav, setSHowNav] = react_1.default.useState(false);
    const changeHeaderColor = () => {
        if (window.scrollY >= 250) {
            setShow(true);
        }
        else {
            setShow(false);
        }
    };
    const showNavMenu = () => {
        setSHowNav(!showNav);
    };
    const showBacktoTop = () => {
        if (window.scrollY >= 400) {
            settoTopShow(true);
        }
        else {
            settoTopShow(false);
        }
    };
    const backToTop = () => {
        react_scroll_1.animateScroll.scrollToTop();
    };
    window.addEventListener("scroll", showBacktoTop);
    window.addEventListener("scroll", changeHeaderColor);
    const toHero = (to) => {
        react_scroll_1.animateScroll.scrollToTop();
        // setIsActive("true");
    };
    const toAbout = (to) => {
        react_scroll_1.animateScroll.scrollTo(1300);
        setIsActive(to);
    };
    const toFeatures = () => {
        react_scroll_1.animateScroll.scrollTo(2100);
    };
    const toSupport = () => {
        react_scroll_1.animateScroll.scrollTo(3300);
    };
    return (<div>
      {show ? (<Container boxShadow={show ? "value" : ""} fixed="jj" border={show ? "value" : ""}>
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
              <react_router_dom_1.NavLink to="/user/register" style={{ textDecoration: "none" }}>
                <commons_1.GlobalButton text="Create an account" bg="#03B903" col="#fff" padding="15px 15px" bghovercolor="" bor="" hovCol="" width="200px"/>
              </react_router_dom_1.NavLink>
            </ButtonHold>

            {/* changing mobile menu icons */}
            {showNav ? (<MenuHold onClick={showNavMenu}>
                <md_1.MdOutlineClose />
              </MenuHold>) : (<MenuHold onClick={showNavMenu}>
                <io_1.IoIosMenu />
              </MenuHold>)}
          </Wrapper>
          {toTopshow ? (<BackToTop onClick={backToTop}>
              <ai_1.AiOutlineArrowUp />
            </BackToTop>) : null}

          {showNav ? (<MobileMenu>
              <MNav onClick={toHero}>Home</MNav>
              <MNav onClick={toAbout}>About</MNav>
              <MNav onClick={toFeatures}>Features</MNav>
              <MNav onClick={toSupport}>join us</MNav>
              <react_router_dom_1.NavLink to="/user/register" style={{ textDecoration: "none" }}>
                <commons_1.GlobalButton text="Create an account" bg="#03B903" col="#fff" padding="10px 10px" bghovercolor="" bor="" hovCol="" width="170px"/>
              </react_router_dom_1.NavLink>
            </MobileMenu>) : null}
        </Container>) : (<Container boxShadow={show ? "value" : ""} fixed="" border={show ? "value" : ""}>
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
              <react_router_dom_1.NavLink to="/user/register" style={{ textDecoration: "none" }}>
                <commons_1.GlobalButton text="Create an account" bg="#03B903" col="#fff" padding="15px 15px" bghovercolor="" bor="" hovCol="" width="200px"/>
              </react_router_dom_1.NavLink>
            </ButtonHold>

            {/* changing mobile menu icons */}
            {showNav ? (<MenuHold onClick={showNavMenu}>
                <md_1.MdOutlineClose />
              </MenuHold>) : (<MenuHold onClick={showNavMenu}>
                <io_1.IoIosMenu />
              </MenuHold>)}
          </Wrapper>
          {toTopshow ? (<BackToTop onClick={backToTop}>
              <ai_1.AiOutlineArrowUp />
            </BackToTop>) : null}
          {/* to show the mobile menu */}
          {showNav ? (<MobileMenu>
              <MNav onClick={toHero}>Home</MNav>
              <MNav onClick={toAbout}>About</MNav>
              <MNav onClick={toFeatures}>Features</MNav>
              <MNav onClick={toSupport}>join us</MNav>
              <react_router_dom_1.NavLink to="/user/register" style={{ textDecoration: "none" }}>
                <commons_1.GlobalButton text="Create an account" bg="#03B903" col="#fff" padding="10px 10px" bghovercolor="" bor="" hovCol="" width="170px"/>
              </react_router_dom_1.NavLink>
            </MobileMenu>) : null}
        </Container>)}
    </div>);
};
exports.default = Header;
const MNav = styled_components_1.default.p `
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
const MobileMenu = styled_components_1.default.div `
  width: 200px;
  /* height: 40vh; */
  padding: 30px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  position: absolute;
  right: 20px;
  top: 70px;
`;
const MenuHold = styled_components_1.default.div `
  display: none;
  font-size: 2.2rem;

  @media screen and (max-width: 450px) {
    display: flex;
    align-items: center;
    color: #03b903;
    gap: 20px;
  }
`;
const ButtonHold = styled_components_1.default.div `
  display: flex;
  align-items: center;

  @media screen and (max-width: 450px) {
    display: none;
  }
`;
const LogoNav = styled_components_1.default.div `
  display: flex;
  align-items: center;
`;
const BackToTop = styled_components_1.default.div `
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
const Navigation = styled_components_1.default.p `
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
const Nav = styled_components_1.default.div `
  height: 70%;
  display: flex;
  align-items: center;
  color: #333333;
`;
const Logo = styled_components_1.default.div `
  display: flex;
  align-items: center;
  color: #03b903;
  font-size: 1.3rem;
  font-weight: 500;

  :hover {
    cursor: pointer;
  }
`;
const Wrapper = styled_components_1.default.div `
  width: 90%;
  margin: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${({ border }) => (border ? "2px solid #03c20376" : "none")};
`;
const Container = styled_components_1.default.div `
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
  box-shadow: ${({ boxShadow }) => boxShadow ? "rgba(99, 99, 99, 0.079) 0px 2px 8px 0px" : "none"};
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
