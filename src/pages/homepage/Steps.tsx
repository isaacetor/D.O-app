import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ecobin from "../../assets/images/ecobin_dash.png";

const Steps = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Top>
            <Caption>Personalized Dashboard</Caption>
            <Focus>
              <Right>
                <h1>
                  A Personalized Dashboard for every user, whether a business or
                  residential.
                </h1>
              </Right>
              <Left>
                <p>
                  Doesn't really matter whether you are a new or returning user,
                  you get your own dashboard.
                </p>
                <NavLink to="/signin" style={{ textDecoration: "none" }}>
                  <button>
                    get started <FiArrowUpRight />
                  </button>
                </NavLink>
              </Left>
            </Focus>
          </Top>
          <Bottom>
            <img src={ecobin} alt="continental app mockup" />
          </Bottom>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Steps;

const Left = styled.div`
  width: 50%;
  p {
    width: 80%;
    font-size: 20px;
  }
  button {
    padding: 13px 29px;
    margin-top: 40px;
    font-size: 14.5px;
    border: 2px solid #03b903;
    background-color: transparent;
    text-transform: capitalize;
    transition: all ease-in-out 0.2s;
    color: #03b903;
    display: flex;
    align-items: center;
    gap: 5px;
    border-radius: 5px;

    :hover {
      cursor: pointer;
      gap: 10px;
    }

    @media screen and (max-width: 500px) {
      margin-top: 20px;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Right = styled.div`
  width: 50%;
  padding-bottom: 20px;
  padding-top: 20px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  h1 {
    margin: 0;
    font-weight: 600;
    width: 70%;
    font-size: 2.52rem;
    line-height: 3rem;
    text-transform: capitalize;

    @media screen and (max-width: 768px) {
      width: 75%;
      font-size: 2.1rem;
    }
    @media screen and (max-width: 500px) {
      width: 80%;
      line-height: 2.5rem;
    }
  }
`;
const Focus = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Caption = styled.p`
  padding-top: 50px;
  letter-spacing: 0.2rem;
  font-size: 14.7px;
`;

const Top = styled.div``;
const Bottom = styled.div`
  width: 100%;
  height: 90vh;
  margin-top: 30px;
  margin-bottom: 30px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media screen and (max-width: 768px) {
    height: 50vh;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  padding-bottom: 30px;
`;
const Container = styled.div`
  width: 100%;
  background: #f5f5f5a6;
  margin-top: 40px;
  /* color: rgb(247, 247, 247); */
  color: #02b102;
`;
