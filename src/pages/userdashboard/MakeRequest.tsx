import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { MdModeEditOutline } from "react-icons/md";

const WasteBill = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <h4>Greenwaste</h4>
          <h2>Account Setting</h2>
          <Dp>JD</Dp>
          <Form>
            <InputHold1>
              <InputHold2>
                <span>Name</span>
                <Hold>
                  <input
                    type="text"
                    required
                    placeholder="Judith Ugbo"
                    style={{ cursor: "not-allowed" }}
                  />
                  <MdModeEditOutline />
                </Hold>
              </InputHold2>
              <InputHold2>
                <span>Phone Number</span>
                <Hold>
                  <input type="text" required placeholder="0904775747632" />
                  <MdModeEditOutline />
                </Hold>
              </InputHold2>
            </InputHold1>

            <InputHold>
              <span>Address</span>
              <Hold>
                <input
                  type="text"
                  required
                  placeholder="3, Asafa Olodi Apapa Lagos"
                />
                <MdModeEditOutline />
              </Hold>
            </InputHold>

            <InputHold>
              <span>Password</span>
              <Hold>
                <input type="text" required />
                <MdModeEditOutline />
              </Hold>
            </InputHold>

            <Button type="submit"> Create account</Button>
          </Form>
        </Wrapper>
      </Container>
    </div>
  );
};

export default WasteBill;
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
`;
const Hold = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 37px;
  padding: 10px;
  font-size: 17px;
  color: #000000d5;
  border: 2px solid #03b903;
  border-radius: 5px;
  outline: 0;
  :nth-child(1) {
    input {
      ::placeholder {
        color: red;
      }
    }
  }
`;
const Button = styled.button`
  padding: 20px 30px;
  background-color: #03b903;
  border: 0;
  margin: 0;
  margin-top: 30px;
  color: #fff;
  font-size: 18px;
  border-radius: 10px;

  :hover {
    cursor: pointer;
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
    display: block;
    width: 74%;
  }
  @media screen and (max-width: 748px) {
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
const InputHold = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  span {
    margin: 0;
    margin-bottom: 10px;
    font-weight: 500;
  }

  input {
    width: 70%;
    height: 35px;
    padding: 10px;
    font-size: 17px;
    color: #000000d5;
    border: 0;
    border-radius: 5px;
    outline: 0;

    :focus {
      border: 1px solid #03b903;
    }

    @media screen and (max-width: 1024px) {
      width: 74%;
    }
    @media screen and (max-width: 748px) {
      width: 90%;
    }
  }
`;

const Form = styled.form``;

const Wrapper = styled.div`
  width: 85%;
  height: 85%;
  /* background-color: pink; */

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

  h4 {
    display: none;

    @media screen and (max-width: 748px) {
      display: block;
      margin: 0;
      margin-bottom: 20px;
      color: #03b903;
      letter-spacing: 2px;
      font-weight: 500;
    }
  }
`;

const Container = styled.div`
  width: calc(100vw - 250px);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fefefe;

  @media screen and (max-width: 1024px) {
    width: calc(100vw - 400px);
  }
  @media screen and (max-width: 748px) {
    width: 100%;
  }
`;
