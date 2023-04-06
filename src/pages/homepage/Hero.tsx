import React from "react";
import styled from "styled-components";
import { GlobalButton } from "../../components/commons";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Div1>
          <Text1>Reduce Waste and Recycle. Disposal Proper Go green!!</Text1>
          <Text2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
            doloribus aut nam. Velit, officia quidem eligendi iusto explicabo et
            ipsa!
          </Text2>
          <Btn>
            <GlobalButton wd="150px" bg="" col="#7ae582" hgt="40px" />
          </Btn>
        </Div1>

        <Div2>
          <Left>
            <Upper>
              <Growing>
                No.1 <span>Growingup</span>
              </Growing>
            </Upper>
            <Upper>
              <Growing>
                No.1 <span>Growingup</span>
              </Growing>
            </Upper>
          </Left>
          <Right></Right>
        </Div2>
      </Wrapper>
    </Container>
  );
};

export default Hero;
const Growing = styled.div``;
const Upper = styled.div``;
const Right = styled.div``;
const Left = styled.div`
  width: 50%;
  background: yellow;
`;
const Div2 = styled.div`
  width: 50%;
  height: 500px;
  background-color: green;
`;
const Btn = styled.div``;
const Text2 = styled.div`
  font-size: 18px;
  color: #fff;
  margin-bottom: 30px;
`;
const Text1 = styled.div`
  margin: 0;
  width: 400px;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #fff;
`;
const Div1 = styled.div`
  width: 50%;
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;

  margin-top: 40px;
`;
const Container = styled.div`
  width: 100%;

  display: flex;
  background-color: #7ae582;
  justify-content: center;
  align-items: center;
`;
