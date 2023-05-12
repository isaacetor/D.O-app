import styled from "styled-components";
import logo from "../../assets/images/ecobinLogoWithText.png";
import loading from "../../assets/gifs/loading.gif";

const HomeLoading = () => {
  return (
    <Container>
      <Wrapper>
        <img src={logo} alt="" />
        <p>
          <Load src={loading} />
        </p>
      </Wrapper>

      {/* <img src={loader} alt="" /> */}
    </Container>
  );
};

export default HomeLoading;
const Load = styled.img`
  margin: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  p {
    color: #00000099;
    margin: 0;
    display: flex;
    align-items: center;
  }
  img {
    height: 50px;
    /* width: 90px; */
    object-fit: contain;
    /* margin-bottom: 10px; */
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
