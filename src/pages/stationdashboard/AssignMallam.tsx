import React from "react";
import styled from "styled-components";
import StationHeader from "../../components/commons/props/StationHeader";
import DynamicTablesHeads from "../../components/commons/props/DynamicTablesHeads";
import DynamicTablesData from "../../components/commons/props/DynamicTablesData";
import BinaryButton from "../../components/commons/props/BinaryButton";
import { useQuery } from "@tanstack/react-query";
import { getAllUserRequest } from "../../utils";
import { useAppSelector } from "../../services/statemanagement/Store";

const AssignMallam = () => {
  const getRequest: any = useAppSelector((state) => state.stationdetail);
  const getSpecialRequest: any = useAppSelector((state) => state.stationdetail);

  // console.log("station detail:", getRequest?.requests!);
  console.log("This is a special request", getSpecialRequest?.specialRequests);

  return (
    <Container>
      <StationHeader
        bg="#3b393931"
        subtitle="View Request"
        title="Welcome, Pako Station"
      />
      <Body>
        {/* <br />
        <br /> */}
        <br />
        <br />
        <div
          style={{
            fontWeight: "500",
            color: "grey",
          }}
        >
          Subscription Requests
        </div>
        <DynamicTablesHeads
          title1="ID"
          title2="Date"
          title3="User"
          title4="Assigned"
          title5="Activity"
        />
        {getRequest?.requests.map((props: any) => (
          <DynamicTablesData
            content1={props.requestMessage}
            content2=""
            content3=""
            content4=""
            content5={
              props.status === "Pending..." ? (
                <BinaryButton swap />
              ) : (
                <BinaryButton swap={false} />
              )
            }
          />
        ))}
        <br />
        <br />
        <br />
        <div
          style={{
            fontWeight: "500",
            color: "grey",
          }}
        >
          Special Requests
        </div>
        <DynamicTablesHeads
          title1="ID"
          title2="Date"
          title3="User"
          title4="Assigned"
          title5="Activity"
        />
        {getSpecialRequest?.specialRequests.map((props: any) => (
          <DynamicTablesData
            content1={props.requestMessage}
            content2={props.name}
            content3={props.assigned}
            content4={props.done}
            content5={
              props.status === "Pending..." ? (
                <BinaryButton swap />
              ) : (
                <BinaryButton swap={false} />
              )
            }
          />
        ))}
      </Body>
    </Container>
  );
};

export default AssignMallam;
const Container = styled.div`
  width: 100%;
  background-color: #a08f8f32;
  min-height: 100vh;

  @media screen and (max-width: 1051px) {
    width: calc(100vw - 70px);
  }
`;
const Body = styled.div`
  margin-top: 17vh;
  width: 90%;
  margin-left: 2%;
  margin-right: 4%;
`;
