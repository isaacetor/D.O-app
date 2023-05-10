"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const fa_1 = require("react-icons/fa");
const Footer = () => {
    return (<div>
      <Container>
        <LogoPart>
          <Logo>ecoBin</Logo>
          <Text>
            reduce waste, promote recycling, and proper waste disposal.
          </Text>
        </LogoPart>
        <Company>
          <Heading>Connect with Us</Heading>
          <Trailing>
            <fa_1.FaFacebook style={{ fontSize: "20px" }}/> Facebook
          </Trailing>
          <Trailing>
            <fa_1.FaTwitter style={{ fontSize: "20px" }}/> Twitter
          </Trailing>
          <Trailing>
            <fa_1.FaInstagram style={{ fontSize: "20px" }}/> Instagram
          </Trailing>
          <Trailing>
            <fa_1.FaLinkedin style={{ fontSize: "20px" }}/> LinkedIn
          </Trailing>
        </Company>
      </Container>
      <Copyright>
        <p>copyright © {new Date().getFullYear()} ecoBin ♻️🌍</p>
      </Copyright>
    </div>);
};
exports.default = Footer;
const Copyright = styled_components_1.default.div `
  width: 100%;
  height: 7vh;
  border-top: 2px solid #ffffff;
  background-color: #f9f9fb;
  display: flex;
  align-items: center;

  p {
    width: 95%;

    margin: auto;

    font-size: 13px;
  }
`;
const Container = styled_components_1.default.div `
  font-size: 12px;

  @media screen and (min-width: 1000px) {
    font-size: 18px;
    width: 100%;
    background-color: #f9f9fb;
  }

  background-color: #f9f9fb;
  color: #525151;
  display: flex;
  flex-wrap: wrap;
`;
const LogoPart = styled_components_1.default.div `
  margin: 40px;
`;
const Company = styled_components_1.default.div `
  margin: 40px;
`;
const Heading = styled_components_1.default.div `
  font-size: 14px;
  @media screen and (min-width: 1000px) {
    font-size: 18px;
  }
  font-weight: 600;
`;
const Trailing = styled_components_1.default.div `
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  :hover {
    color: #03b903;
  }
`;
const Logo = styled_components_1.default.div `
  font-weight: 600;
  color: #03b903;
`;
const Text = styled_components_1.default.div `
  margin-top: 20px;
  width: 70%;
  font-size: 15px;
  line-height: 1.2rem;
  text-transform: capitalize;
`;
