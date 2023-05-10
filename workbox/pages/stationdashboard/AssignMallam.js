"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const StationHeader_1 = __importDefault(require("../../components/commons/props/StationHeader"));
const DynamicTablesHeads_1 = __importDefault(require("../../components/commons/props/DynamicTablesHeads"));
const DynamicTablesData_1 = __importDefault(require("../../components/commons/props/DynamicTablesData"));
const BinaryButton_1 = __importDefault(require("../../components/commons/props/BinaryButton"));
const dummy = [
    {
        name: "mjknojnuinuio",
        phone: "May 21, 2023",
        amount: "Mama Emeka",
        status: "Pending...",
    },
    {
        name: "mjknojnuinuio",
        phone: "May 21, 2023",
        amount: "Iya Beji",
        status: "Hakeem Ziyech",
    },
];
const AssignMallam = () => {
    return (<Container>
      <StationHeader_1.default bg="#3b393931" subtitle="View Request" title="Welcome, Pako Station"/>
      <Body>
        <br />
        <br />
        <br />
        <br />
        <div style={{
            fontWeight: "500",
            color: "grey",
        }}>
          Subscription Requests
        </div>
        <DynamicTablesHeads_1.default title1="ID" title2="Date" title3="User" title4="Assigned" title5="Activity"/>
        {dummy.map((props) => (<DynamicTablesData_1.default content1={props.name} content2={props.phone} content3={props.amount} content4={props.status} content5={props.status === "Pending..." ? (<BinaryButton_1.default swap/>) : (<BinaryButton_1.default swap={false}/>)}/>))}
        <br />
        <br />
        <br />
        <div style={{
            fontWeight: "500",
            color: "grey",
        }}>
          Special Requests
        </div>
        <DynamicTablesHeads_1.default title1="ID" title2="Date" title3="User" title4="Assigned" title5="Activity"/>
        {dummy.map((props) => (<DynamicTablesData_1.default content1={props.name} content2={props.phone} content3={props.amount} content4={props.status} content5={props.status === "Pending..." ? (<BinaryButton_1.default swap/>) : (<BinaryButton_1.default swap={false}/>)}/>))}
      </Body>
    </Container>);
};
exports.default = AssignMallam;
const Container = styled_components_1.default.div `
  width: 100%;
  background-color: #a08f8f32;
  min-height: 100vh;

  @media screen and (max-width: 1051px) {
    width: calc(100vw - 70px);
  }
`;
const Body = styled_components_1.default.div `
  margin-top: 17vh;
  width: 90%;
  margin-left: 2%;
  margin-right: 4%;
`;
