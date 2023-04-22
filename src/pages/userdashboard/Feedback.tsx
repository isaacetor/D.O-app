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
            <MessagePartWrap></MessagePartWrap>
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
  background-color: blue;
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
  background-color: brown;
`;
const MessagePart = styled.div`
  width: 55%;
  height: 100%;
  background-color: #3c37ff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MessagePartWrap = styled.div`
  width: 90%;
  height: 90%;
  background-color: brown;
`;
const ChatUs = styled.div`
  background-color: yellow;
  width: 320px;
  padding: 10px 0px 10px 0px;
  display: flex;
  justify-content: space-between;
`;
const Content = styled.div`
  width: 250px;
  padding: 10px 0px 10px 0px;
  background-color: red;
`;
const Icon = styled.div`
  width: 50px;
  height: 50px;
  background-color: red;
`;
