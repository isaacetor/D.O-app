import React from "react";
import styled from "styled-components";
import Globalbutton from "../../components/commons/props/Globalbutton";
import { useAppSelector } from "../../services/statemanagement/Store";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";

const Registermallam = () => {
  const userSchema = yup
    .object({
      name: yup.string().required("please enter a name"),
      address: yup.string().required("please enter a name"),
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

  const posting = useMutation({
    mutationKey: ["create-carrier"],
    mutationFn: Registermallam,

    onSuccess: (myData: any) => {
      Swal.fire({
        icon: "success",
        title: "Carrier created",
      });
    },
    onError: (error: any) => {
      console.log("this is error", error);

      // handle error here
      Swal.fire({
        title: "creating carrier failed",
        text: "please try again",
        icon: "error",
      });
    },
  });

  const Submit = handleSubmit(async (data) => {
    posting.mutate(data);
    // reset()
  });

  return (
    <Cont>
      <Wrap>
        <MainHead>Pako station</MainHead>
        <Main>
          <Details>
            <p>Register Carriers</p>
          </Details>
        </Main>
        <Info>
          <Infos>
            <Hold>
              <HoldText>Name of Carrier</HoldText>
              <input type="text" placeholder="Full name" />
            </Hold>
            <Hold>
              <HoldText>Phone Number</HoldText>
              <input type="text" placeholder="Phone-Number" />
            </Hold>
            <Hold>
              <HoldText>Address</HoldText>
              <input type="text" placeholder="Address" />
            </Hold>
          </Infos>
          <ButHold>
            <Globalbutton
              bg="#03b903"
              col="#fff"
              padding="15px"
              text="Register"
              bghovercolor="transparent"
              bor="1px solid #03b903"
              hovCol="#03b903"
              width="200px"
            />
          </ButHold>
        </Info>
        {/* <LastCard>hello</LastCard> */}
      </Wrap>
    </Cont>
  );
};

export default Registermallam;

const Cont = styled.div`
  width: calc(100% - 250px);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  @media screen and (max-width: 800px) {
    width: 100%;
    /* height: 100vh; */
    margin-left: 20px;
    /* margin-bottom: 100px; */
    /* padding: 20px; */
  }
`;

const MainHead = styled.div`
  margin-top: 50px;
  font-size: 35px;
  font-weight: 600;

  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`;
const Main = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  margin-bottom: 20px;

  span {
    color: black;
    font-size: 20px;
    // border-bottom: 3px blue solid;
    padding-bottom: 15px;
  }
`;
const Details = styled.div`
  p {
    color: #03b903;
    font-size: 22px;
    font-weight: bold;
    border-bottom: 3px #03b903 solid;
    /* padding-bottom: 5px; */
    @media screen and (max-width: 800px) {
      font-size: 20px;
    }
    @media screen and (max-width: 500px) {
      font-size: 14px;
    }
  }
`;
const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
const Infos = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
`;
const Hold = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  margin-bottom: 30px;
  input {
    width: 500px;
    height: 45px;
    outline: none;
    padding-left: 8px;
    border-radius: 5px;
    margin-top: 2px;
    /* box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px; */
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    border: none;

    ::placeholder {
      color: lightgray;
      font-size: 16px;

      @media screen and (max-width: 7) {
      }
    }
  }

  @media screen and (max-width: 800px) {
    width: 400px;
  }
  @media screen and (max-width: 500px) {
    width: 300px;
  }
`;
const HoldText = styled.div`
  border-bottom: 3px solid #03b903;
  width: 150px;
  margin-bottom: 10px;
  font-size: 18px;
  color: #a5a5a5;

  @media screen and (max-width: 800px) {
    width: 120px;
    font-size: 14px;
  }
  @media screen and (max-width: 500px) {
    width: 100px;
    font-size: 14px;
  }
`;
const ButHold = styled.div`
  display: flex;
`;
