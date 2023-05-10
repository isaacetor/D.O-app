"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const react_1 = __importDefault(require("react"));
const UserDashboardCards = ({ bgcol1, bigText, bigTextCol, smallText, smallTextCol, imgPic, }) => {
    return (<CardComponent bgcol1={bgcol1}>
      <CardImageHold>
        <CardImage src={imgPic}/>
      </CardImageHold>

      <Hold>
        <HText1 bigTextCol={bigTextCol}>{bigText}</HText1>
        <LText1 style={{ fontSize: "15px" }} smallTextCol={smallTextCol}>
          {smallText}
        </LText1>
      </Hold>
    </CardComponent>);
};
exports.default = UserDashboardCards;
const CardImageHold = styled_components_1.default.div `
  width: 65px;
  height: 65px;
  border-radius: 50px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const Hold = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const CardComponent = styled_components_1.default.div `
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  gap: 20px;
  width: 100%;
  background-color: ${({ bgcol1 }) => bgcol1};
`;
const HText1 = styled_components_1.default.div `
  font-size: 25px;
  font-weight: 700;
  text-transform: capitalize;

  color: ${({ bigTextCol }) => bigTextCol};

  @media screen and (min-width: 800px) {
    font-size: 29px;
  }
`;
const LText1 = styled_components_1.default.div `
  font-size: 12px;
  margin-top: 10px;
  color: ${({ smallTextCol }) => smallTextCol};
  @media screen and (min-width: 800px) {
    font-size: 22px;
  }
`;
const CardImage = styled_components_1.default.img `
  width: 80%;
  height: 80%;
  object-fit: contain;
`;
