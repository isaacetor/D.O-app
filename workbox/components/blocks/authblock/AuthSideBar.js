"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const react_slick_1 = __importDefault(require("react-slick"));
require("slick-carousel/slick/slick.css");
require("slick-carousel/slick/slick-theme.css");
const react_router_dom_1 = require("react-router-dom");
const AuthSideBar = ({ title, desc, backgroundColor, CardColor, }) => {
    const settings = {
        dots: true,
        fade: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        cssEase: "linear",
    };
    return (<div>
      <Container backgroundColor={backgroundColor}>
        <Wrapper>
          <react_router_dom_1.NavLink to="/" style={{
            textDecoration: "none",
            color: "#fff",
        }}>
            <h2>ecoBin</h2>
          </react_router_dom_1.NavLink>

          <Title>
            <h1>{title}</h1>
            <p>{desc}</p>
          </Title>
          <div>
            <react_slick_1.default {...settings}>
              <Testimonies CardColor={CardColor}>
                <Top>
                  <p>
                    Simply unbelievable! i am really satisfied with the
                    proficiency of this people. This is absolutely Wonderful
                  </p>
                </Top>
                <Bottom>
                  <h2> Mrs. Faith J.O</h2>
                  <p>Occupant</p>
                </Bottom>
              </Testimonies>
              <Testimonies CardColor={CardColor}>
                <Top>
                  <p>
                    Truly Remarkable! i am really satisfied with the proficiency
                    of this people. This is absolutely truly Wonderful. one
                    company i would recommend ♻
                  </p>
                </Top>
                <Bottom>
                  <h2> Miss. Esther Ogbu</h2>
                  <p>CEO, EasyHr</p>
                </Bottom>
              </Testimonies>
              <Testimonies CardColor={CardColor}>
                <Top>
                  <p>
                    Truly Remarkable! i am really satisfied with the proficiency
                    of this people. This is absolutely Wonderful
                  </p>
                </Top>
                <Bottom>
                  <h2> Mr. Abraham</h2>
                  <p>CEO, LifeCare</p>
                </Bottom>
              </Testimonies>
            </react_slick_1.default>
          </div>
        </Wrapper>
      </Container>
    </div>);
};
exports.default = AuthSideBar;
const Top = styled_components_1.default.div `
  height: 60%;
  width: 90%;
  margin: 10px auto;
  color: #ffffff9b;
`;
const Bottom = styled_components_1.default.div `
  height: 30%;
  width: 90%;
  margin: 10px auto;

  h2 {
    margin: 0;
  }
  p {
    margin: 0;
    color: #ffffff9b;
  }
`;
const Testimonies = styled_components_1.default.div `
  width: 100%;
  height: 30vh;
  background-color: ${({ CardColor }) => CardColor};
  display: flex;
  align-self: center;
  justify-content: center;
  border-radius: 20px;
`;
const Title = styled_components_1.default.div `
  h1 {
    font-size: 3.2rem;
    font-weight: 600;
    line-height: 4rem;

    @media screen and (max-width: 1024px) {
      font-size: 2.5rem;
      line-height: 2.6rem;
    }
  }

  p {
    width: 70%;
    margin: 0;
    color: #ffffffb0;
  }
`;
const Wrapper = styled_components_1.default.div `
  width: 85%;
  height: 90%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 2px;
  }
`;
const Container = styled_components_1.default.div `
  width: 500px;
  height: 100vh;
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media screen and (max-width: 1024px) {
    width: 400px;
  }
  @media screen and (max-width: 748px) {
    display: none;
  }
`;
