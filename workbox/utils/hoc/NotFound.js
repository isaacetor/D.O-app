"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const styled_components_1 = __importDefault(require("styled-components"));
const _404_png_1 = __importDefault(require("../../assets/images/404.png"));
const Notfound = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const back = () => {
        navigate(-1);
    };
    return (<Container>
      <Wrap>
        <Image>
          <img src={_404_png_1.default}/>
        </Image>
        <Button>
          <Oopsy>
            Oops, we're experiencing some waste-related turbulence. Hang tight,
            we'll have it sorted out soon for a smoother waste management
            journey
          </Oopsy>
          <button onClick={back}>Go Back</button>
        </Button>
      </Wrap>
    </Container>);
};
exports.default = Notfound;
const Container = styled_components_1.default.div `
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrap = styled_components_1.default.div `
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const Image = styled_components_1.default.div `
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 800px) {
    width: 50%;
    height: 600px;
  }
  img {
    width: 90%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`;
const Button = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 100%;
  height: 300px;
  @media screen and (min-width: 800px) {
    width: 45%;
    height: 600px;
  }
  button {
    padding: 15px 50px;
    border: none;
    outline: none;
    border-radius: 7px;
    color: white;
    background-color: #03b903;
    font-weight: bold;
    font-size: 15px;

    :hover {
      cursor: pointer;
    }
  }
`;
const Oopsy = styled_components_1.default.div `
  font-size: 25px;
  text-align: center;
  color: #3c37ff;
  font-weight: 600;
`;
