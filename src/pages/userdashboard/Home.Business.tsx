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
import Swal from "sweetalert2";
import axios from "axios";

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
        <Top>
          <UserDashboardQuick />
        </Top>

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
              onClick={async () => {
                Swal.fire({
                  title: "Send Us A Message",
                  text: "used up your request or having a party? let's help you with your trash needs",
                  input: "text",
                  inputAttributes: {
                    autocapitalize: "true",
                    placeholder: "please enter location address here",
                  },
                  showCancelButton: true,
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Make Custom Request",
                  confirmButtonColor: "#009700",
                  showLoaderOnConfirm: true,
                  preConfirm: (message) => {
                    return axios
                      .patch(
                        `https://dirty-online.onrender.com/make-special-request/${user?._id}`
                      )
                      .then((response) => {
                        if (response.status !== 200) {
                          throw new Error(response.statusText);
                        }
                        console.log(response.data);
                      })
                      .catch((error) => {
                        Swal.showValidationMessage(
                          `error sending request: ${error}`
                        );
                      });
                  },
                  allowOutsideClick: () => !Swal.isLoading(),
                }).then((result) => {
                  if (result.isConfirmed) {
                    Swal.fire({
                      // title: `${result.value.login}'s avatar`,
                      // imageUrl: result.value.avatar_url,
                    });
                  }
                });
              }}
            />
          </HoldC>
          <HoldC bg="#039B03">
            <UserDashboardCards
              bgcol1=""
              bigText="Pay with Recyclables"
              bigTextCol="#fff"
              smallText="Don't have cash to pay for your waste bills? not to worry, you can pay with recyclable items"
              smallTextCol="#fff"
              imgPic={recycle}
            />
            <Globalbutton
              bg=""
              col="#03B903"
              padding="18px 30px"
              text="Learn More"
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
const Top = styled.div`
  width: 95%;

  @media screen and (max-width: 1050px) {
    width: calc(100% - 20px);
  }
`;
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
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 35px;

  @media screen and (max-width: 1050px) {
    /* width: calc(100% - 70px); */
    width: 100%;
    margin-left: 0px;
    align-items: center;
    justify-content: center;
  }
  /* @media screen and (max-width: 1024px) {
    width: calc(100% - 30px);
    margin-left: 0px;
    align-items: center;
    justify-content: center;
  } */
`;
