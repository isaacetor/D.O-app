"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const tb_1 = require("react-icons/tb");
const md_1 = require("react-icons/md");
const StationTable = () => {
    const data = [
        {
            date: "23 Jan,2022",
            id: "x42495",
            start: "10.00pm",
            assigned: true,
            status: false,
        },
        {
            date: "23 Feb,2022",
            id: "h77654",
            start: "07.00pm",
            assigned: false,
            status: true,
        },
    ];
    return (<Container>
      <Titles>
        <div>Date</div>
        <div>ID</div>
        <div>Time</div>
        <Hll>
          <Short>A/D</Short>
          <Complete>Assigned</Complete>
        </Hll>
        <div>Status</div>
      </Titles>

      {data === null || data === void 0 ? void 0 : data.map((el) => (<Subjects>
          <div>{el.date}</div>
          <ID>{el.id}</ID>
          <div>{el.start}</div>
          <Assigned 
        // bcc={el.assigned ? "green" : "red"}
        cll={el.assigned ? "#26d80e" : "#ff2f2fe1"}>
            {el.assigned ? <tb_1.TbCircleCheck /> : <md_1.MdOutlineCancel />}
          </Assigned>
          <Status cl={el.status ? "#87d80e" : "#ff2f2fe1"} bc={el.status ? "#acff2f30" : "#ff2f2f30"}>
            {el.status ? " Open" : "Closed"}
          </Status>
        </Subjects>))}
    </Container>);
};
exports.default = StationTable;
const Container = styled_components_1.default.div `
  width: 100%;
  font-size: 10px;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: 600px) {
    font-size: 15px;
  }
`;
const Titles = styled_components_1.default.div `
  width: 95%;
  display: grid;
  grid-template-columns: 4fr 3fr 3fr 2fr 3fr;
  grid-column-gap: 40px;
  color: #a1a0a0;
  font-weight: 600;
  margin-bottom: 10px;
  padding-top: 25px;
  border-top: 1px solid #dfdede;
`;
const Subjects = styled_components_1.default.div `
  width: 95%;
  display: grid;
  font-weight: 600;
  grid-template-columns: 4fr 3fr 3fr 2fr 3fr;
  /* border-top: 1px solid #f3f3f3; */
  /* border-top: 1px solid red; */
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #5c5b5b;
`;
const Status = styled_components_1.default.button `
  font-size: 14px;
  font-weight: 700;
  /* background-color: #ff2f2f8f;
  color: #87d80e; */
  background-color: ${(props) => props.bc};
  color: ${(props) => props.cl};
  border: none;
  outline: none;
  padding: 6px;
  border-radius: 3px;
  max-width: 50%;
  min-width: 40%;
  /* width: 100px;
  height: 30px; */
  /* @media screen and (min-width: 600px) {
    max-width: 40%;
  } */
`;
const ID = styled_components_1.default.div `
  cursor: pointer;
`;
const Assigned = styled_components_1.default.div `
  /* border-radius: 50%; */
  border: none;
  outline: none;
  /* padding: 5px; */
  color: ${(props) => props.cll};
  font-size: 16px;
  @media screen and (min-width: 600px) {
    font-size: 17px;
  }
  display: none;
  @media screen and (min-width: 320px) {
    display: block;
  }
`;
const Short = styled_components_1.default.div `
  @media screen and (min-width: 1000px) {
    display: none;
  }
`;
const Complete = styled_components_1.default.div `
  display: none;
  @media screen and (min-width: 1000px) {
    display: block;
  }
`;
const Hll = styled_components_1.default.div `
  display: none;
  @media screen and (min-width: 320px) {
    display: block;
  }
`;
