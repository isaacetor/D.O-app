import React from "react";
import styled from "styled-components";
import StationHeader from "../../components/commons/props/StationHeader";
import DynamicTablesHeads from "../../components/commons/props/DynamicTablesHeads";
import DynamicTablesData from "../../components/commons/props/DynamicTablesData";
import { useQuery } from "@tanstack/react-query";
import { getallcarrier } from "../../utils";

const Notification = () => {
  //querying the data
  const Allcarriers = useQuery({
    queryKey: ["Allmallams"],
    queryFn: getallcarrier,
  });
  console.log("This is all carriers", Allcarriers?.data?.data);

  return (
    <Container>
      <StationHeader
        bg="#3b393931"
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

        {Allcarriers?.data?.data.map((props: any) => (
          <DynamicTablesData
            // key={props._id}
            content1={props.name}
            content2={props.phoneNumber}
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
  width: 100%;
  background-color: #a08f8f32;
  min-height: 100vh;
`;
const Body = styled.div`
  margin-top: 17vh;
  width: 90%;
  margin-left: 2%;
  margin-right: 4%;
`;
