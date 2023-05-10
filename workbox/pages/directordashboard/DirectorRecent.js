"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const io_1 = require("react-icons/io");
const tfi_1 = require("react-icons/tfi");
const styled_components_1 = __importDefault(require("styled-components"));
const Recent = () => {
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
      </Two>);
};
exports.default = Recent;
const Box = styled_components_1.default.div `
display: flex;
justify-content: center;
align-items: center;
margin-left:20px;
margin-top:20px;
`;
const Box1 = styled_components_1.default.div `
  width: 30px;
  height: 30px;
  background-color: #2e53da;
  margin-right:10px;
  border-radius:8px;
`;
const Lef = styled_components_1.default.div `
p{
  font-weight:bold;
}
`;
const Num = styled_components_1.default.div `
display: flex;
justify-content: center;
align-items: center;
margin:0;
margin-left:20px;
margin-top:-20px;

p{
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
const Pro = styled_components_1.default.div `
display: flex;
justify-content: space-around;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
padding: 10px;
:nth-child(even){
  background-color:#d4d5d85e;
}
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
const Sec = styled_components_1.default.div `
display: flex;
width: 100%;
justify-content: space-around;
/* background-color: white; */

align-items: center;
`;
const One = styled_components_1.default.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const Two = styled_components_1.default.div `
width: 350px;
height: 570px;
background-color: white;
border-radius: 12px;
overflow: hidden;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
@media screen and (max-width:425px){
  width: 90%;
}
`;
const Pop = styled_components_1.default.div `
display: flex;
flex-direction: column;
h3{
  color: white;
  font-size: 30px;
}
p{
  color: white;
  font-size: 14px;
}
`;
const Pip = styled_components_1.default.div `
img{
  width: 300px;
}
`;
const Infos = styled_components_1.default.div `
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 50px;
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
`;
const Amounts = styled_components_1.default.div `
width: 400px;
height: 200px;
background-color: #1f0404;
border-radius: 10px;

`;
const Detail = styled_components_1.default.div `
background-color: #14329e ;
width: 800px;
border-radius: 10px;
display: flex;
justify-content: space-around;
align-items: center;
padding:15px;
margin-bottom: 20px;
/* gap: 10px; */
`;
const Bi = styled_components_1.default.div `
font-size: 20px;
width: 35px;
    height: 35px;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 50%;
    background-color: #928f8f;
    color: white;
`;
const Noti = styled_components_1.default.div `
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  span{
    width: 25px;
    height: 25px;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 45%;
    background-color: #2e53da;
    color: white;
    margin-top: -20px;
    margin-left: -15px;
  }
`;
const Container = styled_components_1.default.div `
  width: calc(100% - 270px);
  height: 100vh;
  /* padding: 10px; */
`;
const Wrap = styled_components_1.default.div `
width: 100%;
display: flex;
justify-content: center;
align-items:center;
flex-direction: column;
/* padding-left: 20px; */
`;
const Right = styled_components_1.default.div `
display: flex;
width: 60%;
justify-content: space-around;
align-items: center;
/* margin-right: 20px; */
`;
const Main = styled_components_1.default.div `
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;
`;
const Left = styled_components_1.default.div `
display: flex;
flex-direction: column;
margin-left: 10px;
/* background-colo:red; */
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
p{
  width: 100%;
  color:#2e53da ;
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
p{
  color: white;
  
}

`;
const Holds = styled_components_1.default.div `
display: flex;
justify-content: center;
align-items: center;
width: 400px;
height: 40px;
border-radius: 6px;
/* border: 1px black solid; */
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
input{
  border: none;
  outline:0;
  width: 90%;
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
p{

  margin: 0;

}
h1{
  margin: 0;
}
`;
