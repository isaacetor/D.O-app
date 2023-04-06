import React from "react";
import styled from "styled-components";
import { GlobalButton } from "../../components/commons";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Div1>
          <Text1>
            Reduce Waste and Recycle. <br /> Disposal Proper <br />
            Go green!!
          </Text1>
          <Text2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
            doloribus aut nam. Velit, officia quidem eligendi iusto explicabo et
            ipsa!
          </Text2>
          <Btn>
            <GlobalButton />
          </Btn>
        </Div1>
      </Wrapper>
    </Container>
  );
};

export default Hero;
const Btn = styled.div``;
const Text2 = styled.div``;
const Text1 = styled.div``;
const Div1 = styled.div``;
const Wrapper = styled.div`
  background-color: yellow;
  width: 90%;
  height: 500px;
`;
const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  background-color: #7ae582;
  justify-content: center;
  align-items: center;
`;
