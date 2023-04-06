import React from "react";
import styled from "styled-components";

const AuthSideBar = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <h2>GREENWASTE</h2>

          <Title>
            <h1>
              Start your <br />
              journey with us.
            </h1>
            <p>
              Don't want to wait for the trash guy? <br />
              You don't have to. <br /> You can request one anytime
            </p>
          </Title>
          <Testimonies>
            <Top>
              <p>
                Simply unbelievable! i am really satisfied with the proficiency
                of this people. This is absolutely Wonderful
              </p>
            </Top>
            <Bottom>
              <h2> Mrs. Faith J.O</h2>
              <p>Occupant</p>
            </Bottom>
          </Testimonies>
        </Wrapper>
      </Container>
    </div>
  );
};

export default AuthSideBar;

const Top = styled.div`
  height: 60%;
  width: 90%;
  margin: 10px auto;
  color: #ffffff9b;
`;
const Bottom = styled.div`
  height: 30%;
  width: 90%;
  margin: 10px auto;

  h2 {
    margin: 0;
  }
  p {
    margin: 0;
    color: #ffffff9b;
  }
`;

const Testimonies = styled.div`
  width: 100%;
  height: 30vh;
  background-color: #01860188;
  display: flex;
  /* align-self: center; */
  /* justify-content: center; */
  flex-direction: column;
  border-radius: 20px;
  overflow: hidden;
`;

const Title = styled.div`
  h1 {
    font-size: 3.2rem;
    font-weight: 600;
    line-height: 4rem;
  }

  p {
    margin: 0;
    color: #ffffffb0;
  }
`;

const Wrapper = styled.div`
  width: 85%;
  height: 90%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 2px;
  }
`;

const Container = styled.div`
  width: 500px;
  height: 100vh;
  background-color: #03b903;

  display: flex;
  justify-content: center;
  align-items: center;
`;
