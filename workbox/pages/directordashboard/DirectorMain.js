"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const draw_svg_1 = __importDefault(require("../../assets/svgs/draw.svg"));
const wave_png_1 = __importDefault(require("../../assets/images/wave.png"));
const wave2_png_1 = __importDefault(require("../../assets/images/wave2.png"));
const AgentMain = () => {
    return (<One>
      <Detail>
        <Pop>
          <h3>
            Wants some extra <br />
            $cash?
          </h3>
          <p>
            so what you have to do is to
            <br />
            just copy the url and paste it here
            <br />
            cause this is rubbish
          </p>
          <Hold1>
            <p>Send</p>
          </Hold1>
        </Pop>
        <Pip>
          <img src={draw_svg_1.default} alt=""/>
        </Pip>
      </Detail>
      <Infos> 
        <Users>
          <Box>
            <Box1></Box1>
            <Lef>
              <p>Number of Users</p>
            </Lef>
          </Box>
          <Num>
            <p>234</p>
            <small>users</small>
          </Num>
          <Log src={wave_png_1.default}/>
        </Users>
        <Users>
          <Box>
            <Box1 style={{ backgroundColor: "green" }}></Box1>
            <Lef>
              <p>Total Amount</p>
            </Lef>
          </Box>
          <Num>
            <p>#4,453,510</p>
            <small></small>
          </Num>
          <Log src={wave2_png_1.default} style={{ width: "400px", bottom: "80" }}/>
        </Users>
        {/* <Amounts></Amounts> */}
      </Infos>
    </One>);
};
exports.default = AgentMain;
const Box = styled_components_1.default.div `
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  margin-top: 20px;
`;
const Box1 = styled_components_1.default.div `
  width: 30px;
  height: 30px;
  background-color: #2e53da;
  margin-right: 10px;
  border-radius: 8px;
`;
const Lef = styled_components_1.default.div `
  p {
    font-weight: bold;
  }
`;
const Num = styled_components_1.default.div `
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  margin-left: 20px;
  margin-top: -20px;

  p {
    font-size: 35px;
    /* font-weight: bold; */
  }
`;
const Log = styled_components_1.default.img `
  position: absolute;
  bottom: 50;
  right: 0;
  width: 350px;
`;
const One = styled_components_1.default.div `
  display: flex;
  /* width:400px; */
  /* background-color: red; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Pop = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  h3 {
    color: white;
    font-size: 30px;
  }
  p {
    color: white;
    font-size: 14px;
  }
`;
const Pip = styled_components_1.default.div `
  img {
    width: 300px;
  }
  @media screen and (max-width:425px){
    display: none;
  }
`;
const Infos = styled_components_1.default.div `
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  flex-wrap: wrap;
  @media screen and (max-width:425px){
    display: flex;
  justify-content:center;
  align-items: center; 
  }
`;
const Users = styled_components_1.default.div `
  width: 400px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  /* justify-content:left; */
  align-items: flex-start;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: relative;
  @media screen and (max-width:425px){
    margin-bottom: 30px;
    width:90%;
  }
`;
const Detail = styled_components_1.default.div `
  background-color: #14329e;
  width: 800px;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
  margin-bottom: 20px;
  /* gap: 10px; */
  @media screen and (max-width:425px){
    width: 80%;
  }
`;
const Hold1 = styled_components_1.default.div `
  display: flex;
  width: 80px;
  height: 25px;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 8px 12px;
  /* margin-right: 20px; */
  border-radius: 10px;
  p {
    width: 100%;
    color: #2e53da;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Hold = styled_components_1.default.div `
  display: flex;
  background-color: #2e53da;
  padding: 8px 12px;
  height: 35px;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
  border-radius: 10px;
  p {
    color: white;
  }
`;
const Ic = styled_components_1.default.div `
  color: white;
`;
const Ip = styled_components_1.default.div `
  font-size: 16px;
  padding-left: 10px;
`;
const Up = styled_components_1.default.div ``;
const Down = styled_components_1.default.div `
  /* margin-top: -15px; */
  p {
    margin: 0;
  }
  h1 {
    margin: 0;
  }
`;
