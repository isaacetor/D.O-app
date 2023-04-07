import React from "react";
import styled from "styled-components";
import { GlobalButton } from "../../components/commons";

const Awareness = () => {
  return (
    <Container>
      <Wrapper>
        <Div2></Div2>
        <Div1>
          <Text1>Reduce Waste and Recycle. Disposal Proper Go green!!</Text1>
          <Text2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
            doloribus aut nam. Velit, officia quidem eligendi iusto explicabo et
            ipsa!
          </Text2>
          <BtnHolder>
            <Btn>
              <Div3>
                <Empty></Empty>
              </Div3>
              <Div4>
                <P>Lorem ipsum dolor sit amet consectetur adipisicing elit.</P>
                <P2>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </P2>
              </Div4>
            </Btn>
            <Btn>
              <Div3>
                <Empty></Empty>
              </Div3>
              <Div4>
                <P>Lorem ipsum dolor sit amet consectetur adipisicing elit.</P>
                <P2>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </P2>
              </Div4>
            </Btn>
            <Btn>
              <Div3>
                <Empty></Empty>
              </Div3>
              <Div4>
                <P>Lorem ipsum dolor sit amet consectetur adipisicing elit.</P>
                <P2>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </P2>
              </Div4>
            </Btn>
          </BtnHolder>
        </Div1>
      </Wrapper>
    </Container>
  );
};

export default Awareness;

const Empty = styled.div`
  width: 40%;
  height: 40%;
  background-color: #3c37fe;
  border-radius: 50px;
`;
const P2 = styled.div`
  margin: 0;
`;
const P = styled.div`
  margin: 0;
`;

const BtnHolder = styled.div``;
const Div3 = styled.div`
  width: 35px;
  height: 35px;
  background-color: #9895eb;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-left: 15px;
`;
const Div4 = styled.div``;
const Div2 = styled.div`
  width: 50%;
  /* height: 500px; */
  background-color: green;
`;
const Btn = styled.div`
  background-color: #fff;
  width: 100%;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  height: fit-content;
  display: flex;
  border-radius: 5px;
  align-items: center;
  margin-bottom: 20px;
`;
const Text2 = styled.div`
  font-size: 16px;
  color: #000;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    font-weight: 14px;
    background-color: red;
    width: 300px;
  }
`;
const Text1 = styled.div`
  margin: 0;
  width: 400px;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #000;

  @media screen and (max-width: 768px) {
    /* width: 300px; */
    font-size: 25px;
    /* text-align: center; */
  }
`;
const Div1 = styled.div`
  width: 50%;
  margin-left: 20px;
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;
