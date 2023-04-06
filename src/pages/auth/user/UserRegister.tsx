import React from "react";
import styled from "styled-components";

const UserRegister = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <h2>Register</h2>
          <p>Have an account? Log in</p>

          <Form>
            <InputHold></InputHold>
            <InputHold></InputHold>
            <InputHold></InputHold>
            <InputHold></InputHold>
          </Form>
        </Wrapper>
      </Container>
    </div>
  );
};

export default UserRegister;

const InputHold = styled.div`
  width: 800px;
  height: 15vh;
  background-color: blue;
  margin-bottom: 10px;
`;

const Form = styled.form`
  gap: 20px;
`;

const Wrapper = styled.div`
  width: 90%;
  height: 85%;
  background-color: pink;

  h2 {
    margin: 0;
    margin-bottom: 10px;
    font-weight: 600;
  }

  p {
    margin: 0;
    font-size: 15px;
    margin-bottom: 50px;
  }
`;

const Container = styled.div`
  width: calc(100vw - 500px);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
