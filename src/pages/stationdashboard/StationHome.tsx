import React from "react";
import styled from "styled-components";
import StationHeader from "../../components/commons/props/StationHeader";
import StationDashboardCard from "../../components/commons/props/StationDashboardCard";
import StationDashboardRequest from "../../components/commons/props/StationDashboardRequest";
import { useAppSelector } from "../../services/statemanagement/Store";
import DynamicTablesHeads from "../../components/commons/props/DynamicTablesHeads";
import DynamicTablesData from "../../components/commons/props/DynamicTablesData";
import BinaryButton from "../../components/commons/props/BinaryButton";

const StationHome = () => {
  const getRequest: any = useAppSelector((state) => state.stationdetail);

  console.log("station detail:", getRequest?.requests!);

  return (
    <Container>
      <Wrap>
        <StationHeader bg="#979494" title="Welcome" subtitle="Pako Station" />
        <Sec>
          <Wrapper>
            <HoldCard>
              <StationDashboardCard />
            </HoldCard>
            <Holdquest>
              <div
                style={{
                  fontWeight: "900",
                  color: "black",
                }}
              >
                Incoming Requests
              </div>
              <div>
                <DynamicTablesHeads
                  title1="Address"
                  title2="Date"
                  title3="User"
                  title4="Assigned"
                  title5="Activity"
                />
              </div>
              <div>
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
              </div>
            </Holdquest>
          </Wrapper>
        </Sec>
      </Wrap>
    </Container>
  );
};

export default StationHome;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 1238px) {
    justify-content: center;
  }
`;

const HoldCard = styled.div`
  width: 100%;

  @media screen and (max-width: 1300px) {
    width: 550px;
  }
  @media screen and (max-width: 1238px) {
    width: 100%;
  }
`;
const Holdquest = styled.div`
  width: 100%;

  @media screen and (max-width: 1238px) {
    width: 60%;
  }
  @media screen and (max-width: 466px) {
    width: 100%;
  }
`;

const Sec = styled.div`
  width: 90%;
  display: flex;
  margin-left: 20px;
  @media screen and (max-width: 1238px) {
    align-items: center;
  }
  margin-top: 20vh;
`;
const Wrap = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
`;
