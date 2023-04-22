import React from "react";
import { UserDashboardHeader } from "../../components";
import styled from "styled-components";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

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
                <Icon></Icon>
                <Content>
                  <h4></h4>
                  <p></p>
                  <h5></h5>
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
const ChatUs = styled.div``;
const Content = styled.div``;
const Icon = styled.div``;
