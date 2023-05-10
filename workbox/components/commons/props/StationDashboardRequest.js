"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const io_1 = require("react-icons/io");
const tfi_1 = require("react-icons/tfi");
const StationDashboardRequest = () => {
    return (<Two>
      <Tit>Recent Request</Tit>
      <Pro>
        <Ips>
          <io_1.IoMdPerson />
        </Ips>
        <Ad>
          <Nam>Iya Sodiq</Nam>
          <Ads>3, Asafa street</Ads>
        </Ad>
        <Ij>
          <tfi_1.TfiAngleRight />
        </Ij>
      </Pro>
      <Pro>
        <Ips>
          <io_1.IoMdPerson />
        </Ips>
        <Ad>
          <Nam>Iya Sodiq</Nam>
          <Ads>3, Asafa street</Ads>
        </Ad>
        <Ij>
          <tfi_1.TfiAngleRight />
        </Ij>
      </Pro>
      <Pro>
        <Ips>
          <io_1.IoMdPerson />
        </Ips>
        <Ad>
          <Nam>Iya Sodiq</Nam>
          <Ads>3, Asafa street</Ads>
        </Ad>
        <Ij>
          <tfi_1.TfiAngleRight />
        </Ij>
      </Pro>
      <Pro>
        <Ips>
          <io_1.IoMdPerson />
        </Ips>
        <Ad>
          <Nam>Iya Sodiq</Nam>
          <Ads>3, Asafa street</Ads>
        </Ad>
        <Ij>
          <tfi_1.TfiAngleRight />
        </Ij>
      </Pro>
      <Pro>
        <Ips>
          <io_1.IoMdPerson />
        </Ips>
        <Ad>
          <Nam>Iya Sodiq</Nam>
          <Ads>3, Asafa street</Ads>
        </Ad>
        <Ij>
          <tfi_1.TfiAngleRight />
        </Ij>
      </Pro>
      <Pro>
        <Ips>
          <io_1.IoMdPerson />
        </Ips>
        <Ad>
          <Nam>Iya Sodiq</Nam>
          <Ads>3, Asafa street</Ads>
        </Ad>
        <Ij>
          <tfi_1.TfiAngleRight />
        </Ij>
      </Pro>
    </Two>);
};
exports.default = StationDashboardRequest;
const Pro = styled_components_1.default.div `
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  border-bottom: 1px solid lightgray;
  padding: 9px;
`;
const Ij = styled_components_1.default.div ``;
const Ad = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Ads = styled_components_1.default.div ``;
const Ips = styled_components_1.default.div `
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: gray;
  color: white;
  font-weight: bold;
  font-size: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Nam = styled_components_1.default.div ``;
const Tit = styled_components_1.default.div `
  width: 100%;
  height: 70px;
  display: flex;
  background-color: black;
  color: white;
  position: sticky;
  align-items: center;
  padding-left: 10px;
`;
const Two = styled_components_1.default.div `
  width: 100%;
  /* height: fit-content; */
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px 2.6px;
`;
