"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const img2_png_1 = __importDefault(require("../../assets/images/img2.png"));
const components_1 = require("../../components");
const react_router_dom_1 = require("react-router-dom");
const Block = () => {
    return (<div>
      <Container>
        <Right>
          <img src={img2_png_1.default} alt=""/>
        </Right>
        <Left>
          <h1>
            together we can! <br /> encourage proper waste disposal & Promote
            Recycling, For A Greener Future! ♻️🌍
          </h1>
          <react_router_dom_1.NavLink to="/user/register" style={{ textDecoration: "none" }}>
            <components_1.GlobalButton width="140px" padding="15px 30px" text="Join Now!"/>
          </react_router_dom_1.NavLink>
        </Left>
      </Container>
    </div>);
};
exports.default = Block;
const Left = styled_components_1.default.div `
  width: 60%;
  height: 70vh;
  color: #ffffffe1;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 2.3rem;
    margin: 0;
    /* width: 75%; */
    text-transform: capitalize;
    margin-bottom: 30px;
    font-weight: 300;

    @media screen and (max-width: 468px) {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 60vh;
    align-items: center;
    text-align: center;
  }
`;
const Right = styled_components_1.default.div `
  width: 40%;
  height: 70vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Container = styled_components_1.default.div `
  width: 95%;
  margin: auto;
  border-radius: 1.5rem;
  margin-bottom: 4.5rem;
  margin-top: 4.5rem;
  /* background: linear-gradient(99.62deg, #ffffff 2.97%, #03b903 94.08%); */
  background: linear-gradient(99.62deg, #3c37ff 2.97%, #14329e 94.08%);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  margin-top: 40px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;

  @media screen and (max-width: 767px) {
    border-radius: 0px;
  }
`;
