"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const components_1 = require("../../components");
const styled_components_1 = __importDefault(require("styled-components"));
const hi2_1 = require("react-icons/hi2");
const bi_1 = require("react-icons/bi");
const ti_1 = require("react-icons/ti");
const Feedback = () => {
    return (<Container>
      <components_1.UserDashboardHeader height="18vh" title="Customer support" display="none"/>
      <Box>
        <SupportWrap>
          <TextPart>
            <TextPartWrap>
              <ChatUs>
                <Icon>
                  <hi2_1.HiOutlineChatBubbleLeftRight />
                </Icon>
                <Content>
                  <h4>Chat to us</h4>
                  <p>Our friendly team is here to help</p>
                  <h5>ecobin@gmail.com</h5>
                </Content>
              </ChatUs>
              <ChatUs>
                <Icon>
                  <ti_1.TiLocationOutline />
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
                  <bi_1.BiPhoneCall />
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
              <h3>
                Our team is dedicated to ensuring your waste is properly managed
                and disposed of in an environmentally friendly manner.
              </h3>
              <p>
                Please don't hesitate to contact us if you have any questions or
                feedback.
              </p>
              <Form>
                <Input type="text" placeholder="Your name"/>
                <Input type="email" placeholder="Your email"/>
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
    </Container>);
};
exports.default = Feedback;
const Container = styled_components_1.default.div `
  width: calc(100vw - 270px);
  @media screen and (max-width: 1051px) {
    width: calc(100vw - 70px);
    margin-left: 70px;
  }
  @media screen and (max-width: 800px) {
    width: 100vw;
    margin-left: 0px;
  }
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const Box = styled_components_1.default.div `
  /* height: calc(100vh - 18vh); */
  width: 100%;
  margin-top: 23vh;
  display: flex;
  justify-content: center;
`;
const SupportWrap = styled_components_1.default.div `
  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  @media screen and (max-width: 800px) {
    box-shadow: none;
    justify-content: center;
  } */
  margin-left: 25px;
  border-radius: 5px;
  width: 95%;
  display: flex;
  gap: 12%;
  flex-wrap: wrap;
`;
const TextPart = styled_components_1.default.div `
  width: 22%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  /* margin-top: 20px; */
  @media screen and (max-width: 800px) {
    width: 100%;
  }
  /* @media screen and (max-width: 500px) {
    display: none;
  } */
`;
const TextPartWrap = styled_components_1.default.div `
  width: 90%;
  height: 90%;
  /* background-color: brown; */
`;
const MessagePart = styled_components_1.default.div `
  width: 50%;
  @media screen and (max-width: 800px) {
    /* width: 90%;
    margin-bottom: 80px; */
    display: none;
  }
  height: fit-content;
  /* margin: 20px; */
  padding: 15px;
  background-color: #009700;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 10px;
`;
const MessagePartWrap = styled_components_1.default.div `
  width: 90%;
  height: 90%;
  h2 {
    margin: 0;
  }
`;
const ChatUs = styled_components_1.default.div `
  width: 100%;
  padding: 10px 0px 10px 0px;
  display: flex;
  gap: 15px;

  /* @media screen and (max-width: 500px) {
    width: 300px;
  } */
`;
const Content = styled_components_1.default.div `
  width: 200px;
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
const Icon = styled_components_1.default.div `
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
const Form = styled_components_1.default.form ``;
const Input = styled_components_1.default.input `
  width: 100%;
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

  /* @media screen and (max-width: 500px) {
    width: 300px;
  } */
`;
const Div = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
const Label = styled_components_1.default.label ``;
const TextArea = styled_components_1.default.textarea `
  width: 100%;
  border: none;
  outline: none;
  margin-top: 20px;
  color: white;
  background-color: transparent;
  border-bottom: 1px solid white;
  resize: none;
`;
const Button = styled_components_1.default.div `
  width: 100%;
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
