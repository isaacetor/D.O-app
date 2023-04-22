import React from "react";
import { UserDashboardHeader } from "../../components";
import styled from "styled-components";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { BiPhoneCall } from "react-icons/bi";
import { TiLocationOutline } from "react-icons/ti";

const Feedback = () => {
  return (
    <Container>
      <UserDashboardHeader
        height="18vh"
        title="Customer support"
        display="none"
      />
      <Box>
        <SupportWrap>
          <TextPart>
            <TextPartWrap>
              <ChatUs>
                <Icon>
                  <HiOutlineChatBubbleLeftRight />
                </Icon>
                <Content>
                  <h4>Chat to us</h4>
                  <p>Our friendly team is here to help</p>
                  <h5>ecobin@gmail.com</h5>
                </Content>
              </ChatUs>
              <ChatUs>
                <Icon>
                  <TiLocationOutline />
                </Icon>
                <Content>
                  <h4>Visit us</h4>
                  <p>Come say hello at our Office HQ</p>
                  <h5>31 Haruna Estate,</h5>
                  <h5>Divine Estate, Ajegunle</h5>
                </Content>
              </ChatUs>
              <ChatUs>
                <Icon>
                  <BiPhoneCall />
                </Icon>
                <Content>
                  <h4>Call us</h4>
                  <p>Mon-Fri from 10am t0 7pm</p>
                  <h5>+234 906 1180 473</h5>
                </Content>
              </ChatUs>
            </TextPartWrap>
          </TextPart>
          <MessagePart>
            <MessagePartWrap>
              <h2>
                Our team is dedicated to ensuring your waste is properly managed
                and disposed of in an environmentally friendly manner.
              </h2>
              <p>
                Please don't hesitate to contact us if you have any questions or
                feedback.
              </p>
              <Form>
                <Input type="text" placeholder="Your name" />
                <Input type="email" placeholder="Your email" />
                <Div>
                  <Label>Type your message here dear sylvia</Label>
                  <TextArea></TextArea>
                </Div>
                <Button>Send us a message!</Button>
              </Form>
            </MessagePartWrap>
          </MessagePart>
        </SupportWrap>
      </Box>
    </Container>
  );
};

export default Feedback;

const Container = styled.div`
  /* width: calc(100% - 270px); */
  @media screen and (max-width: 1024px) {
    width: calc(100% - 70px);
  }
`;
const Box = styled.div`
  /* background-color: blue; */
  height: calc(100vh - 18vh);
  margin-top: 18vh;
`;
const SupportWrap = styled.div`
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  height: 80vh;
  width: 85%;
  margin-left: 25px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
`;
const TextPart = styled.div`
  width: 40%;
  height: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TextPartWrap = styled.div`
  width: 90%;
  height: 90%;
  /* background-color: brown; */
`;
const MessagePart = styled.div`
  width: 55%;
  height: 100%;
  background-color: #009700;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 10px;
`;
const MessagePartWrap = styled.div`
  width: 90%;
  height: 90%;
  h2 {
    margin: 0;
  }
`;
const ChatUs = styled.div`
  width: 320px;
  padding: 10px 0px 10px 0px;
  display: flex;
  justify-content: space-between;
`;
const Content = styled.div`
  width: 250px;
  /* background-color: red; */
  h4 {
    margin: 0;
  }
  p {
    margin: 0;
  }
  h5 {
    margin: 0;
  }
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  font-size: 20px;
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
const Form = styled.form``;
const Input = styled.input`
  width: 400px;
  height: 30px;
  background-color: transparent;
  border: none;
  outline: none;
  margin-top: 20px;
  color: white;

  border-bottom: 1px solid white;
  ::placeholder {
    color: white;
  }
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
const Label = styled.label``;
const TextArea = styled.textarea`
  width: 400px;
  border: none;
  outline: none;
  margin-top: 20px;
  color: white;
  background-color: transparent;
  border-bottom: 1px solid white;
  resize: none;
`;
const Button = styled.div`
  width: 410px;
  height: 50px;
  border-radius: 5px;
  background-color: white;
  color: #009700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  cursor: pointer;
`;
