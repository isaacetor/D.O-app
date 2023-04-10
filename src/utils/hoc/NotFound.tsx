// // import React from "react";
// // import styled from "styled-components";

// // const NotFound = () => {
// //   return (
// //     <Container>
// //       <h1>
// //         Ooops, Error.... <br />
// //         Page Not Found
// //       </h1>
// //     </Container>
// //   );
// // };

// // export default NotFound;

// // const Container = styled.div`
// //   width: 100%;
// //   height: 100vh;
// //   background-color: #03b903;
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// // `;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import notfound from "../../assets/4041.png";

// const Notfound = () => {
//   const navigate = useNavigate();
//   const back = () => {
//     navigate(-1);
//   };
//   return (
//     <Container>
//       <Wrap>
//         <Image>
//           <img src={notfound} />
//         </Image>
//         <Button>
//           <Oopsy>Oops. Looks like you're lost</Oopsy>
//           <button onClick={back}>Go Back</button>
//         </Button>
//       </Wrap>
//     </Container>
//   );
// };

// export default Notfound;

// const Container = styled.div`
//   overflow: hidden;
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
// const Wrap = styled.div`
//   width: 90%;
//   display: flex;
//   flex-direction: column;
//   background-color: red;
//   flex-wrap: wrap;
//   align-items: center;
//   /* justify-content: center; */
// `;
// const Image = styled.div`
//   width: 100%;
//   height: 300px;
//   display: flex;
//   justify-content: center;
//   @media screen and (min-width: 800px) {
//     width: 50%;
//     height: 600px;
//   }
//   img {
//     width: 90%;
//     height: 100%;
//     object-fit: contain;
//     object-position: center;
//   }
// `;
// const Button = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   gap: 15px;
//   width: 100%;
//   height: 300px;
//   @media screen and (min-width: 800px) {
//     width: 45%;
//     height: 600px;
//   }
//   button {
//     padding: 15px 50px;
//     border: none;
//     outline: none;
//     border-radius: 7px;
//     color: white;
//     background-color: blueviolet;
//     font-weight: bold;
//     font-size: 15px;
//   }
// `;
// const Oopsy = styled.div`
//   font-size: 30px;
//   text-align: center;
//   color: #511985;
// `;

import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import pic from "../../assets/4042.jpg";
import Globalbutton from "../../components/commons/Globalbutton";

const NotFound = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  return (
    <Container>
      <Wrapper>
        <Oopsy>
          <Texting>Oops!</Texting>
          <Texting2>404 - PAGE NOT FOUND</Texting2>
          <Texting3>
            The page you are looking for might have been removed or its
            temporaily unavailable.
          </Texting3>
        </Oopsy>
        {/* <Button onClick={back}>Go Back</Button> */}
        <Globalbutton
          padding="20px "
          bg="#03b903"
          col="#fff"
          text="Back to Homepage"
        />
      </Wrapper>
    </Container>
  );
};

export default NotFound;

const Texting3 = styled.div`
  color: #000;
  width: 300px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
`;
const Texting2 = styled.h3`
  color: #000;
  margin: 0;
  margin-bottom: 20px;
`;
const Texting = styled.div`
  margin: 0;
  font-weight: bolder;
  font-size: 200px;
  margin-top: 30px;
  font-style: italic;
  color: #03b903;

  @media screen and (max-width: 500px) {
    font-size: 100px;
  }
`;
const Button = styled.button``;
const Oopsy = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #fff;
`;
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #fff;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
`;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
