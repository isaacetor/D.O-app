import styled from "styled-components";
import { UserDashboardHeader } from "../../components";
import { UserDashboardQuick } from "../../components";
import { UserDashboardCards } from "../../components";
import { UserDashboardHistory } from "../../components";
import Globalbutton from "../../components/commons/props/Globalbutton";
import { useAppSelector } from "../../services/statemanagement/Store";
import money from "../../assets/images/money.png";
import request from "../../assets/images/request.png";
import recycle from "../../assets/images/recycle.png";

const BusinessHome = () => {
  const user = useAppSelector((state) => state.userDetails);

  return (
    <Container>
      <UserDashboardHeader
        title={`welcome, ${user?.name}`}
        amount="₦ 2000"
        button="Top-up balance"
        display="flex"
        height="24vh"
      />
      <Body>
        <UserDashboardQuick />
        <Hold>
          <HoldC bg="#3C37FF">
            <UserDashboardCards
              bgcol1=""
              bigText="Top Up Balance"
              bigTextCol="#fff"
              smallText="Credit your ecoBin wallet to keep making trash pick-up request"
              smallTextCol="#fff"
              imgPic={money}
            />
            <Globalbutton
              bg=""
              col="#3C37FF"
              padding="18px 30px"
              text="Top Up"
              bghovercolor="transparent"
              bor="1px solid #fff"
              hovCol="#fff"
              width="200px"
            />
          </HoldC>
          <HoldC bg="#039B03">
            <UserDashboardCards
              bgcol1=""
              bigText="Make a Custom Request"
              bigTextCol="#fff"
              smallText="Are u having a party or event? ecoBin staff will be there for your trash needs!"
              smallTextCol="#fff"
              imgPic={request}
            />
            <Globalbutton
              bg=""
              col="#03B903"
              padding="18px 30px"
              text="send us an hello!"
              bghovercolor="transparent"
              bor="1px solid #fff"
              hovCol="#fff"
              width="210px"
            />
          </HoldC>
          <HoldC bg="#039B03">
            <UserDashboardCards
              bgcol1=""
              bigText="Make a Custom Request"
              bigTextCol="#fff"
              smallText="Are u having a party or event? ecoBin staff will be there for your trash needs!"
              smallTextCol="#fff"
              imgPic={recycle}
            />
            <Globalbutton
              bg=""
              col="#03B903"
              padding="18px 30px"
              text="send us an hello!"
              bghovercolor="transparent"
              bor="1px solid #fff"
              hovCol="#fff"
              width="210px"
            />
          </HoldC>
        </Hold>
        <UserDashboardHistory />
      </Body>
    </Container>
  );
};

export default BusinessHome;
const HoldC = styled.div<{ bg: string }>`
  display: flex;
  flex-direction: column;
  background-color: ${({ bg }) => bg};
  width: 400px;
  padding: 30px;
  border-radius: 10px;
  gap: 30px;

  @media screen and (max-width: 1024px) {
    width: calc(100vw - 70px);
  }
`;
const Hold = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  gap: 30px;

  @media screen and (max-width: 1024px) {
    width: calc(100vw - 70px);
  }
`;
const Container = styled.div`
  width: calc(100vw - 270px);

  @media screen and (max-width: 1024px) {
    width: calc(100vw - 70px);
  }
`;
const Body = styled.div`
  width: 100%;
  color: #3d3d3d;
  margin-top: 180px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 35px;

  @media screen and (max-width: 1024px) {
    width: calc(100vw - 70px);
  }
`;
