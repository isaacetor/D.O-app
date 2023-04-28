import react,{useState} from "react"
import styled from "styled-components"
import {VscSearch} from "react-icons/vsc"
import {MdOutlineAlignVerticalBottom} from "react-icons/md"
import * as yup from "yup";
import Swal from "sweetalert2";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { UseAppDispatch,useAppSelector } from "../../services/statemanagement/Store";
import { createStations } from "../../services/statemanagement/ReduxState";
import { Loading, createDirectorStations } from "../../utils";
import axios from "axios";
const Stations=()=>{
    const user = useAppSelector((state) => state.directorDetails);
    const navigate = useNavigate();
    const dispatch = UseAppDispatch();
  
    const userSchema = yup
    .object({
      email: yup.string().required("please enter an email"),
      address: yup.string().required("please enter a name"),
      password: yup.string().required("please enter a name"),
      station: yup.string().required("please enter a name"),
      phoneNumber: yup.string().required("please enter a name"),
    })
    .required();
  type formData = yup.InferType<typeof userSchema>;
  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm<formData>({
    resolver: yupResolver(userSchema),
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
  
  const Submit = handleSubmit(async (data) => {
    // posting.mutate(data);
    console.log("hezze",user)
    await axios
    .post(`https://dirty-online.onrender.com/api/director/new-station/${user?._id}`, data)
    .then((res) => {
        console.log(res)
        Swal.fire({
            title: "succeful",
            icon: "success",
        });
    })
    .catch((err) => {
        Swal.fire({
            title: "an error occured",
            icon: "error",
            text: `${err.response?.data?.message}`,
        });
        console.log(err.response);
    });
    // reset()
  });

    const[show,setShow] = useState(true)
    const[show1,setShow1] = useState(false)

    const tog=()=>{
        setShow(true)
        setShow1(false)
    }
    const tog1=()=>{
        setShow(false)
        setShow1(true)
    }
    return(
        <Cont>
            <Wrap>
                <MainHead>
                    <h1>Stations</h1>
                </MainHead>
                <Main>
                  {show ? (<Det>
                    <Details onClick={tog}>
                        <p style={{color: "blue",fontSize: "20px",borderBottom: "3px blue solid",paddingBottom: "15px"}}>Create Stations</p>
                    </Details>
                    <Details onClick={tog1}>
                        <span style={{color: "black",fontSize: "20px",paddingBottom: "15px"}}>All Stations</span>
                    </Details>
                  </Det>) : (
                    <Det>
                          <Details onClick={tog}>
                        <p style={{color: "black",fontSize: "20px",paddingBottom: "15px"}}>Create Stations</p>
                    </Details>
                    <Details onClick={tog1}>
                        <span style={{color: "blue",fontSize: "20px",borderBottom: "3px blue solid",paddingBottom: "15px"}}>All Stations</span>
                    </Details>
                    </Det>
                  )}
                </Main>
                {show ? (                <Info onSubmit={Submit}>
                   <Infos>
                   <Hold>
                        <small>Name of station</small>
                        <input type="text" placeholder="Stations"   {...register("station")}/>
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
                </Info>) : (
                    null
                )}
                {show1 ? (<Col>
                <ColHead>
                  <ColHold>
                   <p>Search</p>
                   <Holds>
                    <Ic>
                        <VscSearch/>
                    </Ic>
                    <input type="text" placeholder="Search" />
                   </Holds>
                  </ColHold>
                  <ColHold>
                   <p>Filter the list</p>
                   <Holds>
                    <Ic>
                        <MdOutlineAlignVerticalBottom/>
                    </Ic>
                    <input type="text" placeholder="Enter Email" />
                   </Holds>
                  </ColHold>
                  <ColHold>
                   <p>Filter the Month</p>
                   <Holds>
                    <Ic></Ic>
                    <Buts>
                      <input type="month" />
                    </Buts>
                   </Holds>
                  </ColHold>
                  <ColHold>
                   <p>Filter the Year</p>
                   <Holds>
                    <Ic></Ic>
                    <Buts>
                      <input type="year" />
                    </Buts>
                   </Holds>
                  </ColHold>
                </ColHead>
                <DetailHold>
                    <DetailHead>
                        <DetInfo>
                            S/N
                        </DetInfo>
                        <DetInfo>
                            Data and Time
                        </DetInfo>
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
                     <User>
                        <Num>1</Num>
                        <Dat style={{marginLeft:"-50px"}}>{new Date().toLocaleDateString()}</Dat>
                        <Station style={{marginLeft:"-50px"}}>Wema</Station>
                        <Req style={{marginLeft:"-30px"}}>10</Req>
                        <ReqSta>21</ReqSta>
                        <span ></span>
                     </User>
                     <User>
                        <Num>2</Num>
                        <Dat style={{marginLeft:"-50px"}}>{new Date().toLocaleDateString()}</Dat>
                        <Station style={{marginLeft:"-50px"}}>Chidi</Station>
                        <Req style={{marginLeft:"-30px"}}>1000</Req>
                        <ReqSta>0</ReqSta>
                        <span ></span>
                     </User>
                     <User>
                        <Num>3</Num>
                        <Dat style={{marginLeft:"-50px"}}>{new Date().toLocaleDateString()}</Dat>
                        <Station style={{marginLeft:"-50px"}}>Haruna</Station>
                        <Req style={{marginLeft:"-30px"}}>273</Req>
                        <ReqSta>28</ReqSta>
                        <span ></span>
                     </User>
                     <User>
                        <Num>4</Num>
                        <Dat style={{marginLeft:"-50px"}}>{new Date().toLocaleDateString()}</Dat>
                        <Station style={{marginLeft:"-50px"}}>Muyibi</Station>
                        <Req style={{marginLeft:"-30px"}}>273</Req>
                        <ReqSta>0</ReqSta>
                        <span ></span>
                     </User>
                     <User>
                        <Num>5</Num>
                        <Dat style={{marginLeft:"-50px"}}>{new Date().toLocaleDateString()}</Dat>
                        <Station style={{marginLeft:"-50px"}}>Asafa</Station>
                        <Req style={{marginLeft:"-30px"}}>273</Req>
                        <ReqSta>13</ReqSta>
                        <span ></span>
                     </User>

                </DetailHold>
                </Col>) : null}
            </Wrap>
        </Cont>
    )
}
export default Stations;
const User=styled.div`
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
`
const Num=styled.div``
const Dat=styled.div``
const Station=styled.div``
const Req=styled.div``
const ReqSta=styled.div``
const DetailHold=styled.div`
width: 96%;
display: flex;
flex-direction: column;
/* overflow: hidden; */
`
const DetailHead=styled.div`
width:100%;
display:flex;
justify-content: space-between;
align-items:center;
padding: 20px 10px;
background-color: #123455;
border-radius: 7px;
margin-top: 30px;
`
const DetInfo=styled.div`
color: white;
` 
const ColHead=styled.div`
display: flex;
width: 96%;
justify-content: center;
align-items: center;
`
const ColHold=styled.div`
width:80%;
display: flex;
flex-direction: column;
`
const Holds=styled.div`
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
`
const Ic=styled.div``
const Buts=styled.div``
const Col=styled.div`
width: 100%;
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;
`
const Cont=styled.div`
width: calc(100% - 270px);
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color:whitesmoke;
`
const Wrap=styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
margin-left: 20px;
/* justify-content: center;
align-items: center; */
`
const MainHead=styled.div`
margin-bottom: 50px;
`
const Det=styled.div`
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
/* margin-bottom: 20px; */
`
const Main=styled.div`
display: flex;
width: 30%;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;
`
const Details=styled.div``
const Info=styled.form`
display: flex;
flex-wrap: wrap;
flex-direction: column;
`
const Infos=styled.div`
display: flex;
flex-wrap: wrap;
/* justify-content: space-between; */
`
const Hold=styled.div`
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
`
const ButHold=styled.button`
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

`
