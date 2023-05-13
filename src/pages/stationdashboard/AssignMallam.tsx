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
  const UserRequest = useQuery({
    queryKey: ["AllUserRequest"],
    queryFn: getAllUserRequest,
  });

  // console.log("This is user request", UserRequest?.data?.data);

  return (
    <Container>
      <StationHeader bg="#979494" subtitle="View Request" title="Welcome," />
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
          title1="Name"
          title2="Address"
          title3="Date"
          title4="Assigned"
          title5="Activity"
        />
        {UserRequest?.data?.data?.map((props: any) => (
          <DynamicTablesData
            content1={props.user}
            content2={props.address}
            content3={props.createdAt}
            content4={props.DoneBy}
            content5={
              props.requestStatus === "Pending..." ? (
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
          title1="Address"
          title2="Date"
          title3="User"
          title4="Assigned"
          title5="Activity"
        />
        {UserRequest?.data?.data?.map((props: any) => (
          <DynamicTablesData
            content1={props.user}
            content2={props.address}
            content3={props.assigned}
            content4={props.done}
            content5={
              props.requestStatus === "Pending..." ? (
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
