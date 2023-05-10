"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const styled_components_1 = __importDefault(require("styled-components"));
const vsc_1 = require("react-icons/vsc");
const md_1 = require("react-icons/md");
const yup = __importStar(require("yup"));
const sweetalert2_1 = __importDefault(require("sweetalert2"));
const yup_1 = require("@hookform/resolvers/yup");
const react_hook_form_1 = require("react-hook-form");
const react_router_dom_1 = require("react-router-dom");
const react_query_1 = require("@tanstack/react-query");
const Store_1 = require("../../services/statemanagement/Store");
const utils_1 = require("../../utils");
const axios_1 = __importDefault(require("axios"));
const Stations = () => {
    var _a;
    const [show, setShow] = (0, react_1.useState)(true);
    const [show1, setShow1] = (0, react_1.useState)(false);
    const tog = () => {
        setShow(true);
        setShow1(false);
    };
    const tog1 = () => {
        setShow(false);
        setShow1(true);
    };
    const user = (0, Store_1.useAppSelector)((state) => state.directorDetails);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const dispatch = (0, Store_1.UseAppDispatch)();
    const userSchema = yup
        .object({
        email: yup.string().required("please enter an email"),
        address: yup.string().required("please enter a name"),
        password: yup.string().required("please enter a name"),
        station: yup.string().required("please enter a name"),
        phoneNumber: yup.string().required("please enter a name"),
    })
        .required();
    const { handleSubmit, formState: { errors }, reset, register, } = (0, react_hook_form_1.useForm)({
        resolver: (0, yup_1.yupResolver)(userSchema),
    });
    //   const posting = useMutation({
    //     mutationKey: ["login"],
    //     mutationFn: createDirectorStations,
    //     onSuccess: (myData: any) => {
    //       dispatch(createStations(myData.data));
    //       Swal.fire({
    //         icon: "success",
    //         title: "Login succesful",
    //         html: "Taking you to your dashboard",
    //         timer: 2000,
    //         didOpen: () => {
    //           Swal.showLoading();
    //         },
    //         willClose: () => {
    //         //   navigate("/director/home");
    //         },
    //       });
    //     },
    //     onError: (error: any) => {
    //       // handle error here
    //       Swal.fire({
    //         title: "login failed",
    //         text: "email or name incorrect",
    //         icon: "error",
    //       });
    //     },
    //   });
    const Submit = handleSubmit((data) => __awaiter(void 0, void 0, void 0, function* () {
        // posting.mutate(data);
        console.log("hezze", user);
        yield axios_1.default
            .post(`https://dirty-online.onrender.com/api/director/new-station/${user === null || user === void 0 ? void 0 : user._id}`, data)
            .then((res) => {
            console.log(res);
            sweetalert2_1.default.fire({
                title: "succeful",
                icon: "success",
            });
        })
            .catch((err) => {
            var _a, _b;
            sweetalert2_1.default.fire({
                title: "an error occured",
                icon: "error",
                text: `${(_b = (_a = err.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message}`,
            });
            console.log(err.response);
        });
        // reset()
    }));
    const Product = (0, react_query_1.useQuery)({
        queryKey: ["prod"],
        queryFn: utils_1.allStations,
    });
    if ((_a = Product === null || Product === void 0 ? void 0 : Product.data) === null || _a === void 0 ? void 0 : _a.loading)
        return <h2>Loading...</h2>;
    const dater = new Date().toDateString();
    return (<Cont>
            <Wrap>
                <MainHead>
                    <h1>Stations</h1>
                </MainHead>
                <Main>
                  {show ? (<Det>
                    <Details onClick={tog}>
                        <p style={{ color: "blue", fontSize: "20px", borderBottom: "3px blue solid" }}>Create Stations</p>
                    </Details>
                    <Details onClick={tog1}>
                        <span style={{ color: "black", fontSize: "20px" }}>All Stations</span>
                    </Details>
                  </Det>) : (<Det>
                          <Details onClick={tog}>
                        <p style={{ color: "black", fontSize: "20px" }}>Create Stations</p>
                    </Details>
                    <Details onClick={tog1}>
                        <span style={{ color: "blue", fontSize: "20px", borderBottom: "3px blue solid" }}>All Stations</span>
                    </Details>
                    </Det>)}
                </Main>
                {show ? (<Info onSubmit={Submit}>
                   <Infos>
                   <Hold>
                        <small>Name of station</small>
                        <input type="text" placeholder="Stations" {...register("station")}/>
                    </Hold>
                    <Hold>
                        <small>Phone Number</small>
                        <input type="text" placeholder="Phone-Number" {...register("phoneNumber")}/>
                    </Hold>
                    <Hold>
                        <small>Address</small>
                        <input type="text" placeholder="Address" {...register("address")}/>
                    </Hold>
                    <Hold>
                        <small>Email</small>
                        <input type="text" placeholder="Email" {...register("email")}/>
                    </Hold>
                    <Hold>
                        <small>Password</small>
                        <input type="text" placeholder="Password" {...register("password")}/>
                    </Hold>
                   </Infos>
                   <ButHold>
                      Create
                   </ButHold>
                </Info>) : (null)}
                {show1 ? (<Col>
                <ColHead>
                  <ColHold>
                   <p>Search</p>
                   <Holds>
                    <Ic>
                        <vsc_1.VscSearch />
                    </Ic>
                    <input type="text" placeholder="Search"/>
                   </Holds>
                  </ColHold>
                  <ColHold>
                   <p>Filter the list</p>
                   <Holds>
                    <Ic>
                        <md_1.MdOutlineAlignVerticalBottom />
                    </Ic>
                    <input type="text" placeholder="Enter Email"/>
                   </Holds>
                  </ColHold>
                  <ColHold>
                   <p>Filter the Month</p>
                   <Holds>
                    <Ic></Ic>
                    <Buts>
                      <input type="month"/>
                    </Buts>
                   </Holds>
                  </ColHold>
                  <ColHold>
                   <p>Filter the Year</p>
                   <Holds>
                    <Ic></Ic>
                    <Buts>
                      <input type="year"/>
                    </Buts>
                   </Holds>
                  </ColHold>
                </ColHead>
                <DetailHold>
                    <DetailHead>
                        <DetInfo>
                            S/N
                        </DetInfo>
                        {/* <DetInfo>
                D/T
            </DetInfo> */}
                        <DetInfo>
                            Name of Station
                        </DetInfo>
                        <DetInfo>
                           Total Request
                        </DetInfo>
                        <DetInfo>
                            Request Pending
                        </DetInfo>
                        <DetInfo>
                            Status
                        </DetInfo>
                    </DetailHead>
                    {/* {Product?.data?.data?.map((props:any)=>( */}
                         <User>
                         <Num>1</Num>
                         {/* <Dat style={{marginLeft:"-50px"}}>{dater}</Dat> */}
                         <Station style={{ marginLeft: "-50px" }}>Wema</Station>
                         <Req style={{ marginLeft: "-30px" }}>10</Req>
                         <ReqSta>21</ReqSta>
                         <span></span>
                      </User>
                         <User>
                         <Num>2</Num>
                         {/* <Dat style={{marginLeft:"-50px"}}>{dater}</Dat> */}
                         <Station style={{ marginLeft: "-50px" }}>Ashafa</Station>
                         <Req style={{ marginLeft: "-30px" }}>10</Req>
                         <ReqSta>21</ReqSta>
                         <span></span>
                      </User>
                         <User>
                         <Num>3</Num>
                         {/* <Dat style={{marginLeft:"-50px"}}>{dater}</Dat> */}
                         <Station style={{ marginLeft: "-50px" }}>Chidi</Station>
                         <Req style={{ marginLeft: "-30px" }}>10</Req>
                         <ReqSta>21</ReqSta>
                         <span></span>
                      </User>
                         <User>
                         <Num>4</Num>
                         {/* <Dat style={{marginLeft:"-50px"}}>{dater}</Dat> */}
                         <Station style={{ marginLeft: "-50px" }}>Alakoto</Station>
                         <Req style={{ marginLeft: "-30px" }}>10</Req>
                         <ReqSta>21</ReqSta>
                         <span></span>
                      </User>
                    {/* ))} */}
                </DetailHold>
                </Col>) : null}
            </Wrap>
        </Cont>);
};
exports.default = Stations;
const User = styled_components_1.default.div `
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 15px 10px;
background-color: #e7e2e27f;

:nth-child(even){
    background-color: #888585be;
    span{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: red;
    box-shadow: 0 0 10px red,0 0 40px red,0 0 80px red;
}
}
span{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #41e641;
    box-shadow: 0 0 10px #41e641,0 0 40px #41e641,0 0 80px #41e641;
}
@media screen and (max-width:425px){
    width: 95%;
}
`;
const Num = styled_components_1.default.div `
@media screen and (max-width:425px){
    font-size: 12px;
}
`;
const Dat = styled_components_1.default.div ``;
const Station = styled_components_1.default.div `
@media screen and (max-width:425px){
    font-size: 12px;
}
`;
const Req = styled_components_1.default.div `
@media screen and (max-width:425px){
    font-size: 12px;
}
`;
const ReqSta = styled_components_1.default.div `
@media screen and (max-width:425px){
    font-size: 12px;
}
`;
const DetailHold = styled_components_1.default.div `
width: 96%;
display: flex;
flex-direction: column;
@media screen and (max-width:425px){
    justify-content:center;
    align-items: center;
    margin-bottom: 200px;
}

/* overflow: hidden; */
`;
const DetailHead = styled_components_1.default.div `
width:100%;
display:flex;
justify-content: space-between;
align-items:center;
padding: 20px 10px;
background-color: #123455;
border-radius: 7px;
margin-top: 30px;
@media screen and (max-width:425px){
    width: 95%;
}
`;
const DetInfo = styled_components_1.default.div `
color: white;
@media screen and (max-width:425px){
font-size: 10px;
}
`;
const ColHead = styled_components_1.default.div `
display: flex;
width: 96%;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`;
const ColHold = styled_components_1.default.div `
width:80%;
display: flex;
flex-direction: column;

`;
const Holds = styled_components_1.default.div `
display: flex;
height:30px;
width: 180px;
/* justify-content: space-between; */
align-items: center;
background-color:#c9cccc73;
padding: 10px;
border-radius: 8px;
input{
    border: 0;
    outline: none;
    background-color: transparent;
    margin-left: 10px;
    padding: 6px;
    ::placeholder{
        color: black;
    }
}
@media screen and (max-width:425px){
    width:150px;
}
`;
const Ic = styled_components_1.default.div ``;
const Buts = styled_components_1.default.div ``;
const Col = styled_components_1.default.div `
width: 100%;
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;
/* margin-bottom: 1050px; */
`;
const Cont = styled_components_1.default.div `
width: calc(100% - 270px);
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
/* background-color:whitesmoke; */
@media screen and (max-width:425px){
    width: 100%;
    margin-bottom: 500px;
}
`;
const Wrap = styled_components_1.default.div `
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
margin-left: 20px;
/* justify-content: center;
align-items: center; */
`;
const MainHead = styled_components_1.default.div `
margin-bottom: 50px;
`;
const Det = styled_components_1.default.div `
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;

/* margin-bottom: 20px; */
`;
const Main = styled_components_1.default.div `
display: flex;
width: 30%;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;
@media screen and (max-width:425px){
    width: 80%;
}
`;
const Details = styled_components_1.default.div `
cursor:pointer;
p,span{
    padding:10px 0;
}
/* padding: 0; */
`;
const Info = styled_components_1.default.form `
display: flex;
flex-wrap: wrap;
flex-direction: column;
/* margin-bottom:250px; */
`;
const Infos = styled_components_1.default.div `
display: flex;
flex-wrap: wrap;
/* justify-content: space-between; */
`;
const Hold = styled_components_1.default.div `
display:flex;
flex-direction:column;
margin-right: 50px;
margin-bottom: 30px;
input{
    width: 500px;
    height: 50px;
    outline-color: blue;
    padding-left: 8px;
    border-radius:5px;
    margin-top: 2px;
  box-shadow: rgba(0, 0, 0.8, 0.15) 2.95px 1.95px 2.6px;
   border: none;
 
}
@media screen and (max-width:425px){
    input{
        width: 160%;
    }
   }
`;
const ButHold = styled_components_1.default.button `
    width: 100px;
    margin-top: 50px;
    padding: 15px 20px;
    color: white;
    background-color: blue;
    border-radius: 3px;
    border: none;
    font-size:20px;
    transition: all 350ms;
cursor: pointer;

    :hover{
        scale: 1.1;
    }

`;
