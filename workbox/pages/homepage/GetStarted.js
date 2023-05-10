"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const components_1 = require("../../components");
const one_svg_1 = __importDefault(require("../../assets/svgs/one.svg"));
const two_svg_1 = __importDefault(require("../../assets/svgs/two.svg"));
const three_svg_1 = __importDefault(require("../../assets/svgs/three.svg"));
const four_svg_1 = __importDefault(require("../../assets/svgs/four.svg"));
const tour_png_1 = __importDefault(require("../../assets/images/tour.png"));
const Hero = () => {
    return (<div>
      <Container>
        <Wrapper>
          <Head>
            <div>
              <H>Joining us is very easy!</H>
              <P>Get Started in few easy steps</P>
              <Picture src={tour_png_1.default}/>
            </div>
          </Head>
          <Cards>
            <components_1.AboutCard logo={one_svg_1.default} heading="Create account" par="Create an account with your valid details"/>
            <components_1.AboutCard logo={two_svg_1.default} heading="Fund account " par="Credit your account to be able to make trash pick up rrequest right in the app"/>{" "}
            <components_1.AboutCard logo={three_svg_1.default} heading="Make a request" par="Request for your trash pick up at a time convenient for you."/>{" "}
            <components_1.AboutCard logo={four_svg_1.default} heading="Close a request" par="After trash pick up, you can close the request to show that your trash has been picked up"/>
            <Picture2 src={tour_png_1.default}/>
          </Cards>
        </Wrapper>
      </Container>
    </div>);
};
exports.default = Hero;
const Container = styled_components_1.default.div `
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled_components_1.default.div `
  width: 90%;
  height: 95%;
  margin-top: 120px;
  @media screen and (min-width: 1200px) {
    display: flex;
    gap: 60px;
  }
`;
const H = styled_components_1.default.div `
  font-size: 28px;
  font-weight: bold;
  color: #333333;
  text-transform: capitalize;
  @media screen and (min-width: 1000px) {
    font-size: 40px;
  }
`;
const P = styled_components_1.default.div `
  margin-top: 20px;
  font-weight: 400;
  font-size: 14px;
  @media screen and (min-width: 1000px) {
    font-size: 20px;
  }
`;
const Head = styled_components_1.default.div `
  color: #383838;
  @media screen and (min-width: 1200px) {
    width: 25%;
  }
`;
const Picture = styled_components_1.default.img `
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 20px;
  display: none;
  margin-top: 40px;
  @media screen and (min-width: 1200px) {
    display: block;
  }
`;
const Picture2 = styled_components_1.default.img `
  width: 100%;
  height: 250px;
  object-fit: cover;
  object-position: center;
  border-radius: 20px;
  margin-top: 40px;
  @media screen and (min-width: 1200px) {
    display: none;
  }
  @media screen and (min-width: 1000px) {
    width: 40%;
  }
`;
const Cards = styled_components_1.default.div `
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
  @media screen and (min-width: 1200px) {
    width: calc(80% - 40px);
  }
`;
