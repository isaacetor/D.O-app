"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const fi_1 = require("react-icons/fi");
const react_router_dom_1 = require("react-router-dom");
const styled_components_1 = __importDefault(require("styled-components"));
const ecobin_dash_png_1 = __importDefault(require("../../assets/images/ecobin_dash.png"));
const Steps = () => {
    return (<div>
      <Container>
        <Wrapper>
          <Top>
            <Caption>Personalized Dashboard</Caption>
            <Focus>
              <Right>
                <h1>
                  A Personalized Dashboard for every user, whether a shop owner
                  or resident.
                </h1>
              </Right>
              <Left>
                <p>
                  Doesn't really matter whether you are a new or returning user,
                  you get your own dashboard.
                </p>
                <react_router_dom_1.NavLink to="/signin" style={{ textDecoration: "none" }}>
                  <button>
                    get started <fi_1.FiArrowUpRight />
                  </button>
                </react_router_dom_1.NavLink>
              </Left>
            </Focus>
          </Top>
          <Bottom>
            <img src={ecobin_dash_png_1.default} alt="continental app mockup"/>
          </Bottom>
        </Wrapper>
      </Container>
    </div>);
};
exports.default = Steps;
const Left = styled_components_1.default.div `
  width: 50%;
  p {
    width: 80%;
    font-size: 20px;

    @media screen and (max-width: 425px) {
      font-size: 18px;
    }
  }
  button {
    padding: 13px 29px;
    margin-top: 40px;
    font-size: 14.5px;
    border: 2px solid #03b903;
    background-color: transparent;
    text-transform: capitalize;
    transition: all ease-in-out 0.2s;
    color: #03b903;
    display: flex;
    align-items: center;
    gap: 5px;
    border-radius: 5px;

    :hover {
      cursor: pointer;
      gap: 10px;
    }

    @media screen and (max-width: 500px) {
      margin-top: 20px;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Right = styled_components_1.default.div `
  width: 50%;
  padding-bottom: 20px;
  padding-top: 20px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  h1 {
    margin: 0;
    font-weight: 600;
    width: 70%;
    font-size: 2.52rem;
    line-height: 3rem;
    text-transform: capitalize;

    @media screen and (max-width: 768px) {
      width: 75%;
      font-size: 2.1rem;
    }
    @media screen and (max-width: 425px) {
      width: 80%;
      line-height: 2.5rem;
      font-size: 2rem;
    }
  }
`;
const Focus = styled_components_1.default.div `
  display: flex;
  flex-wrap: wrap;
`;
const Caption = styled_components_1.default.p `
  padding-top: 50px;
  letter-spacing: 0.2rem;
  font-size: 14.7px;
`;
const Top = styled_components_1.default.div ``;
const Bottom = styled_components_1.default.div `
  width: 100%;
  height: 90vh;
  margin-top: 30px;
  margin-bottom: 30px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media screen and (max-width: 768px) {
    height: 50vh;
  }
`;
const Wrapper = styled_components_1.default.div `
  width: 90%;
  margin: auto;
  padding-bottom: 30px;
`;
const Container = styled_components_1.default.div `
  width: 100%;
  background: #f5f5f5a6;
  margin-top: 40px;
  /* color: rgb(247, 247, 247); */
  color: #02b102;
`;
