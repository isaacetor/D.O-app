import React from "react";
import styled from "styled-components";
import { GlobalButton } from "../../components/commons";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <TextHold>
              <Title>
                Reduce Waste and Recycle. Disposal Properly.. Go green!!
              </Title>
              <p>
                An awesome place to purchase securely with no worries or delay.
                It is perfectly built for you.
              </p>
              <NavLink
                to="/login"
                style={{
                  textDecoration: "none",
                }}
              >
                <GlobalButton wd="200px" ht="50px" bg="" col="" />
              </NavLink>
            </TextHold>
          </Left>
          <Right>{/* <img src={hero} alt="" /> */}</Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Hero;

const TextHold = styled.div`
  margin-left: 40px;

  p {
    margin-top: 30px;
    width: 90%;
    font-size: 1.3rem;
    line-height: 139.6%;
    margin-bottom: 4rem;
    color: #fff;
    margin-left: 0px;

    @media screen and (max-width: 768px) {
      font-size: 1.05rem;
      /* text-align: center; */
      width: 70%;
    }
    @media screen and (max-width: 500px) {
      margin-bottom: 1rem;
    }
  }

  @media screen and (max-width: 768px) {
    margin-top: 20px;
    margin-left: 0px;
  }
  @media screen and (max-width: 500px) {
    margin-top: 50px;
    margin-left: 0px;
  }
`;

const Money = styled.div`
  position: absolute;
  right: 0px;
  top: 200px;

  img {
    width: 10vw;
  }
`;
const Hundred = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  position: absolute;
`;

const Title = styled.h1`
  width: 90%;
  font-weight: 700;
  color: #fff;
  margin: 0;
  /* margin-top: 30px; */
  font-size: 3rem;
  line-height: 4rem;

  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
    width: 89%;
    margin-top: 20px;
    line-height: 2rem;
    /* text-align: center; */
  }
  @media screen and (max-width: 500px) {
    font-size: 1.7rem;
    width: 89%;
    margin-top: 20px;
    line-height: 2rem;
    /* text-align: center; */
  }
`;

const Right = styled.div`
  width: 50%;
  height: 90vh;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: slide-in 1s ease-out;
  animation-fill-mode: forwards;
  opacity: 0;

  @keyframes slide-in {
    0% {
      transform: translateX(-50%);
      opacity: 0;
    }
    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }

  @media screen and (max-width: 768px) {
    height: 55vh;
    width: 100%;
    margin-top: 20px;
  }

  @media screen and (max-width: 1440px) {
    min-width: 50%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Left = styled.div`
  width: 50%;
  height: 90vh;
  display: flex;
  align-items: center;
  animation: slide-in-bottom 1s ease-out;
  animation-fill-mode: forwards;
  opacity: 0;

  @keyframes slide-in-bottom {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }

  @media screen and (max-width: 768px) {
    height: 65vh;
    width: 100%;
  }
  @media screen and (max-width: 1440px) {
    min-width: 50%;
  }
  @media screen and (max-width: 500px) {
    height: 100%;
  }
`;
const Wrapper = styled.div`
  width: 90%;

  color: #333333;
  margin: auto;
  display: flex;
  flex-wrap: wrap;

  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 85%;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 500px) {
    justify-content: center;
  }
`;
const Container = styled.div`
  width: 100%;
  color: #00002d;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #03b903;
  margin-bottom: 20px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
`;

// import React from "react";
// import styled from "styled-components";
// import pic from "../";
// import { GlobalButton } from "../../components/commons";

// const Hero = () => {
//   return (
//     <Container>
//       <Wrapper>
//         <Div1>
//           <Text1>Reduce Waste and Recycle. Disposal Proper Go green!!</Text1>
//           <Text2>
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
//             doloribus aut nam. Velit, officia quidem eligendi iusto explicabo et
//             ipsa!
//           </Text2>
//           <Btn>
//             <GlobalButton wd="150px" bg="" col="#3c37fe" hgt="40px" />
//           </Btn>
//         </Div1>

//         <Div2>
//           <Img src={} />
//         </Div2>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Hero;

// const Img = styled.img``;
// const Div2 = styled.div`
//   width: 50%;
//   height: 500px;
//   background-color: green;
// `;
// const Btn = styled.div``;
// const Text2 = styled.div`
//   font-size: 18px;
//   color: #fff;
//   margin-bottom: 30px;
// `;
// const Text1 = styled.div`
//   margin: 0;
//   width: 400px;
//   font-size: 40px;
//   font-weight: bold;
//   margin-bottom: 30px;
//   color: #fff;
// `;
// const Div1 = styled.div`
//   width: 50%;
// `;
// const Wrapper = styled.div`
//   width: 90%;
//   display: flex;
//   flex-wrap: wrap;
//   margin-top: 40px;
// `;
// const Container = styled.div`
//   width: 100%;

//   display: flex;
//   background-color: #3c37fe;
//   justify-content: center;
//   align-items: center;
// `;
