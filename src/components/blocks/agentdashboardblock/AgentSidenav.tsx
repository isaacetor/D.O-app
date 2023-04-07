import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";

const AuthSideBar = () => {
  const settings = {
    dots: true,
    fade: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
  };
  return (
    <div>
      <Container>
        <Wrapper>
          <NavLink
            to="/"
            style={{
              textDecoration: "none",

              color: "#fff",
            }}
          >
            <h2>GREENWASTE</h2>
          </NavLink>

          <Title>
            <h1>
              Welcome agent <br />
              to your account.
            </h1>
            <p>
              Manage all user trash pick up request? <br />
              from your home. <br />
            </p>
          </Title>
          <div>
            <Slider {...settings}>
              <Testimonies>
                <Top>
                  <p>
                    Simply unbelievable! i am really satisfied with the
                    proficiency of this people. This is absolutely Wonderful
                  </p>
                </Top>
                <Bottom>
                  <h2> Mrs. Faith J.O</h2>
                  <p>Occupant</p>
                </Bottom>
              </Testimonies>
              <Testimonies>
                <Top>
                  <p>
                    Truly Remarkable! i am really satisfied with the proficiency
                    of this people. This is absolutely Wonderful. of this
                    people. This is absolutely Wonderful.
                  </p>
                </Top>
                <Bottom>
                  <h2> Mrs. Esther Ogbu</h2>
                  <p>CEO, BugaPay</p>
                </Bottom>
              </Testimonies>
              <Testimonies>
                <Top>
                  <p>
                    Truly Remarkable! i am really satisfied with the proficiency
                    of this people. This is absolutely Wonderful
                  </p>
                </Top>
                <Bottom>
                  <h2> Mr. Abraham</h2>
                  <p>Manager, LifeCare</p>
                </Bottom>
              </Testimonies>
            </Slider>
          </div>
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
  background-color: #2520e3;
  display: flex;
  align-self: center;
  justify-content: center;
  border-radius: 20px;
`;

const Title = styled.div`
  h1 {
    font-size: 3.2rem;
    font-weight: 600;
    line-height: 4rem;

    @media screen and (max-width: 1024px) {
      font-size: 2.5rem;
      line-height: 2.6rem;
    }
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
  background-color: #3c37ff;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    width: 400px;
  }
  @media screen and (max-width: 748px) {
    display: none;
  }
`;
