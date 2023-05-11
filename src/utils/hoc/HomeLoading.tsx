import styled from "styled-components";
import logo from "../../assets/ecobinlogo.png";

const HomeLoading = () => {
  return (

      <Container>
        <img src={logo} alt="" />
        <p>ecoBIN is loading...</p>
        {/* <img src={loader} alt="" /> */}
      </Container>

  );
};

export default HomeLoading;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  right: 0;

  p {
    color: #00000099;
  }
  img {
    height: 100px;
    width: 100px;
    object-fit: contain;
  }
`;
