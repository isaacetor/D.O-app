import React from "react";
import styled from "styled-components";
import StationHeader from "../../components/commons/props/StationHeader";
import DynamicTablesHeads from "../../components/commons/props/DynamicTablesHeads";
import DynamicTablesData from "../../components/commons/props/DynamicTablesData";
import BinaryButton from "../../components/commons/props/BinaryButton";
import { useAppSelector } from "../../services/statemanagement/Store";

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
  const station = useAppSelector((state) => state.stationdetail);
  // const station = useAppSelector((state) => state);
  console.log("station is :", station);

  return (
    <Container>
      <StationHeader
        bg="#3b393931"
        subtitle="View Request"
        title="Welcome, Pako Station"
      />
      <Body>
        <br />
        <br />
        <br />
        <br />
        <div
          style={{
            fontWeight: "500",
            color: "grey",
          }}>
          Subscription Requests
        </div>
        <DynamicTablesHeads
          title1="Address"
          title2="Date"
          title3="User"
          title4="Assigned"
          title5="Activity"
        />
        {dummy.map((props) => (
          <DynamicTablesData
            content1={props.name}
            content2={props.phone}
            content3={props.amount}
            content4={props.status}
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
          }}>
          Special Requests
        </div>
        <DynamicTablesHeads
          title1="Address"
          title2="Date"
          title3="User"
          title4="Assigned"
          title5="Activity"
        />
        {dummy.map((props) => (
          <DynamicTablesData
            content1={props.name}
            content2={props.phone}
            content3={props.amount}
            content4={props.status}
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
