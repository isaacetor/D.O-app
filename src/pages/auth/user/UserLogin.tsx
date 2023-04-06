import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const UserLogin = () => {
  return (
    <div>
      {" "}
      <Container>
        <Wrapper>
          <h2>Sign in</h2>
          <p>
            Don't have an account?
            <NavLink
              to="/user/register"
              style={{
                textDecoration: "none",
                margin: "3px",
                color: "#03b903",
              }}
            >
              Create one
            </NavLink>
          </p>

          <Form>
            <InputHold>
              <span>Phone Number</span>
              <input type="number" required />
            </InputHold>
            <InputHold>
              <span>Password</span>
              <input type="password" required />
            </InputHold>

            <Button type="submit"> Sign in</Button>
          </Form>
        </Wrapper>
      </Container>
    </div>
  );
};

export default UserLogin;

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
    width: 60%;
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
`;
