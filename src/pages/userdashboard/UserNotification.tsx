import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import styled from "styled-components";
// import { getAllAdminMsg } from "../../Api/adminApi";

const UserNotification = () => {
  const [show, setShow] = useState<boolean>(false);
  const allAdminMsg = useQuery({
    queryKey: ["viewAdminMsg"],
    // queryFn: getAllAdminMsg,
  });

  const toggleShow = () => {
    setShow(!show);
  };

  // console.log(`this is all client message ${allAdminMsg}`);
  return (
      <Top1>
        <Notify>
            <h1>Good Morning, <br/>Jaji</h1>
            <p>Here you can track all your request<br/> and check all your transaction and history</p>
            <button>Check</button>
        </Notify>
        <MsgHold>
            <Box>
                <Details>
                    <h1>3</h1>
                </Details>
                <p>Monthly Request</p>
                <p>3/4 task done</p>
            </Box>
        </MsgHold>
      </Top1>
  );
};

export default UserNotification;

const Details = styled.div`
width:
`;
const Box = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
width:50px;
height:50px;
border-radius:50%;
`;
const MsgHold = styled.div`
width:300px;
height:200px;
background-color:gray;
`;
const Notify = styled.div`
display:flex;
/* justify-content:center; */
/* align-items:center; */
flex-direction:column;
button{
    width:150px;
    padding:10px 13px;
    background-color:#3c37fe;
    color:white;
    border-radius:30px;
    border:0;
    font-size:16px;
}
`;

const Top1 = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
width:92%;
  background-color:white;
  border-radius:20px;
  /* padding-left:50px; */
  padding:0 0 30px 50px;
  margin-top:17px;
  @media screen and (max-width: 768px) {
  
  }
`;
