import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const UserRegister = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <h2>Register</h2>
          <p>
            Have an account?
            <NavLink
              to="/user/login"
              style={{
                textDecoration: "none",
                margin: "3px",
                color: "#03b903",
              }}
            >
              Log in
            </NavLink>
          </p>

          <Form>
            <InputHold1>
              <InputHold2>
                <span>Name</span>
                <input type="text" required />
              </InputHold2>
              <InputHold2>
                <span>Phone Number</span>
                <input type="number" required />
              </InputHold2>
            </InputHold1>

            <InputHold>
              <span>Address</span>
              <input type="text" required />
            </InputHold>
            <InputHold>
              <span>Password</span>
              <input type="password" required />
            </InputHold>

            <Button type="submit"> Create account</Button>
          </Form>
        </Wrapper>
      </Container>
    </div>
  );
};

export default UserRegister;

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
    border: 2px solid lightgrey;
    border-radius: 5px;
    outline: 0;
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
    width: 300px;
    height: 37px;
    padding: 10px;
    font-size: 17px;
    color: #000000d5;
    border: 2px solid #03b903;
    border-radius: 5px;
    outline: 0;

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
    border: 1px solid lightgrey;
    border-radius: 5px;
    outline: 0;

    :focus {
      border: 1px solid #03b903;
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
    margin-bottom: 8px;
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
  width: calc(100vw - 500px);
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
