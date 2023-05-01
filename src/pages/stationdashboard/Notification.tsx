import React from "react";
import styled from "styled-components";
import StationHeader from "../../components/commons/props/StationHeader";
import DynamicTablesHeads from "../../components/commons/props/DynamicTablesHeads";
import DynamicTablesData from "../../components/commons/props/DynamicTablesData";

const dummy = [
  { name: "Hakeem Ziyech", phone: "09078645310", amount: 5, status: "Free" },
  {
    name: "Achraft Hakimi",
    phone: "08078776655",
    amount: 7,
    status: "On Duty",
  },
  {
    name: "Yusuf En Nesir",
    phone: "09078645310",
    amount: 3,
    status: "On Duty",
  },
  { name: "Cenk Tosun", phone: "09089897656", amount: 4, status: "Free" },
];

const Notification = () => {
  return (
    <Container>
      <StationHeader
        bg="#a08f8f3f"
        subtitle="View Request"
        title="Welcome, Pako Station"
      />
      <Body>
        <DynamicTablesHeads
          title1="Name"
          title2="Phone"
          title3="Requests"
          title4="Status"
          title5="Activity"
        />
        {dummy.map((props) => (
          <DynamicTablesData
            content1={props.name}
            content2={props.phone}
            content3={`total (${props.amount})`}
            content4={props.status === "Free" ? "" : "5"}
            buttons
          />
        ))}
      </Body>
    </Container>
  );
};

export default Notification;
const Container = styled.div`
  width: calc(100% - 250px);
  background-color: #a08f8f1d;
  min-height: 100vh;
`;
const Body = styled.div`
  margin-top: 19vh;
  width: 90%;
  margin-top: 18vh;
  margin-left: 5%;
  margin-right: 5%;
`;
