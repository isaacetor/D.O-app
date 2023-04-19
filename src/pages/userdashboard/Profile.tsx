import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import styled from "styled-components";
import { GlobalButton } from "../../components";
import { useAppSelector } from "../../services/statemanagement/Store";

const Profile = () => {
  const user = useAppSelector((state) => state.userDetails);

  const stat = user?.station;

  console.log(`this is user`, stat);

  const stats = user?.station._id;

  console.log(`this is station`, stats);

  let initials: string | undefined = user?.name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("");
  return (
    <div>
      <Container>
        <Wrapper>
          <h2>Account Setting</h2>
          <Dp>{initials}</Dp>
          <Form>
            <InputHold1>
              <InputHold2>
                <span>Name</span>
                <Hold>
                  <span>{user?.name}</span>
                </Hold>
              </InputHold2>
              <InputHold2>
                <span>Email</span>
                <Hold>
                  <input type="text" placeholder={user?.email} />
                </Hold>
              </InputHold2>
            </InputHold1>
            <InputHold1>
              <InputHold2>
                <span>Phone Number</span>
                <Hold>
                  <input
                    type="number"
                    placeholder={`${
                      user?.phoneNumber === undefined
                        ? "please enter your phone number"
                        : `${user?.phoneNumber}`
                    }`}
                  />
                </Hold>
              </InputHold2>
              <InputHold2>
                <span>Address</span>
                <Hold>
                  <input type="text" placeholder={user?.address} />
                </Hold>
              </InputHold2>
            </InputHold1>
            <InputHold1>
              <InputHold2>
                <span>Station</span>
                <Hold>
                  <span>{stat ? stat?.station : ""}</span>
                </Hold>
              </InputHold2>
            </InputHold1>

            <GlobalButton
              bg="#03b903"
              col="#fff"
              padding="18px 30px"
              text="update profile"
              width="200px"
            />
          </Form>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Profile;

const Dp = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  color: white;
  background-color: #123456;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  font-size: 2rem;
  font-weight: 500;
`;
const Hold = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 300px;
  height: 37px;
  padding: 10px;
  font-size: 17px;
  color: #000000d5;
  border: 2px solid #03b903;
  border-radius: 5px;
  outline: 0;

  input {
    font-size: 17px;

    ::placeholder {
      color: #000000da;
    }
  }
`;

const InputHold1 = styled.div`
  width: 700px;
  display: flex;

  gap: 30px;
  margin-bottom: 10px;
  span {
    margin: 0;
    margin-bottom: 10px;
    font-weight: 500;
  }

  input {
    width: 100%;
    height: 35px;
    padding: 10px;
    font-size: 17px;
    color: #000000d5;
    border: 0;
    border-radius: 5px;
    outline: 0;
  }

  @media screen and (max-width: 1024px) {
    width: 74%;
  }

  @media screen and (max-width: 722px) {
    display: block;
    width: 100%;
  }
`;
const InputHold2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  span {
    margin: 0;
    margin-bottom: 10px;
    font-weight: 500;
  }

  input {
    border: 0;
    @media screen and (max-width: 1024px) {
      display: block;
      width: 100%;
    }

    @media screen and (max-width: 748px) {
      width: 90%;
    }
  }
`;

const Form = styled.form`
  margin-bottom: 20px;
`;

const Wrapper = styled.div`
  width: 90%;

  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-weight: 600;
    font-size: 2rem;
  }

  p {
    margin: 0;
    font-size: 15px;
    margin-bottom: 35px;
  }
`;

const Container = styled.div`
  width: calc(100vw - 270px);

  min-height: 100vh;
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fefefe;

  @media screen and (max-width: 748px) {
    width: 100%;
  }
`;
