"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yup_1 = require("@hookform/resolvers/yup");
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const styled_components_1 = __importDefault(require("styled-components"));
const AgentRegister = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const agentSchema = yup_1.yupResolver;
    return (<div>
      <Container>
        <Wrapper>
          <h4>Greenwaste</h4>
          <h2>Register</h2>
          <p>
            Have an account?
            <react_router_dom_1.NavLink to="/agent/login" style={{
            textDecoration: "none",
            margin: "3px",
            color: "#3C37FF",
        }}>
              Log in
            </react_router_dom_1.NavLink>
          </p>

          <Form>
            <InputHold1>
              <InputHold2>
                <span>Name</span>
                <input type="text" required placeholder="please enter your name"/>
              </InputHold2>
              <InputHold2>
                <span>Email</span>
                <input type="email" required placeholder="please enter your email"/>
              </InputHold2>
            </InputHold1>

            <InputHold>
              <span>Address</span>
              <input type="text" required placeholder="please enter your address"/>
            </InputHold>
            <InputHold>
              <span>Password</span>
              <input type="password" required placeholder="please enter a strong password"/>
            </InputHold>

            <Button type="submit"> Create account</Button>
          </Form>
        </Wrapper>
      </Container>
    </div>);
};
exports.default = AgentRegister;
const Button = styled_components_1.default.button `
  padding: 20px 30px;
  background-color: #3c37ff;
  border: 0;
  margin: 0;
  margin-top: 30px;
  color: #fff;
  font-size: 18px;
  border-radius: 10px;

  :hover {
    cursor: pointer;
  }
`;
const InputHold1 = styled_components_1.default.div `
  width: 700px;
  display: flex;
  gap: 30px;
  margin-bottom: 10px;
  span {
    margin: 0;
    margin-bottom: 10px;
    font-weight: 500;
  }

  input {
    width: 100%;
    height: 35px;
    padding: 10px;
    font-size: 17px;
    color: #000000d5;
    border: 2px solid lightgrey;
    border-radius: 5px;
    outline: 0;

    ::placeholder {
      color: #00000047;
    }
  }

  @media screen and (max-width: 1024px) {
    display: block;
    width: 74%;
  }
  @media screen and (max-width: 748px) {
    display: block;
    width: 100%;
  }
`;
const InputHold2 = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  span {
    margin: 0;
    margin-bottom: 10px;
    font-weight: 500;
  }

  input {
    width: 300px;
    height: 37px;
    padding: 10px;
    font-size: 17px;
    color: #000000d5;
    border: 2px solid #3c37ff;
    border-radius: 5px;
    outline: 0;

    ::placeholder {
      color: #00000047;
    }

    @media screen and (max-width: 1024px) {
      display: block;
      width: 100%;
    }

    @media screen and (max-width: 748px) {
      width: 90%;
    }
  }
`;
const InputHold = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  span {
    margin: 0;
    margin-bottom: 10px;
    font-weight: 500;
  }

  input {
    width: 70%;
    height: 35px;
    padding: 10px;
    font-size: 17px;
    color: #000000d5;
    border: 1px solid lightgrey;
    border-radius: 5px;
    outline: 0;

    :focus {
      border: 1px solid #3c37ff;
    }

    ::placeholder {
      color: #00000047;
    }

    @media screen and (max-width: 1024px) {
      width: 74%;
    }
    @media screen and (max-width: 748px) {
      width: 90%;
    }
  }
`;
const Form = styled_components_1.default.form ``;
const Wrapper = styled_components_1.default.div `
  width: 85%;
  height: 85%;

  h2 {
    margin: 0;
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 2rem;
  }

  p {
    margin: 0;
    font-size: 15px;
    margin-bottom: 35px;
  }

  h4 {
    display: none;

    @media screen and (max-width: 748px) {
      /* height: 90%; */
      display: block;
      margin: 0;
      margin-bottom: 20px;
      color: #3c37ff;
      letter-spacing: 2px;
      font-weight: 500;
    }
  }
  @media screen and (max-width: 748px) {
    height: 90%;
  }
`;
const Container = styled_components_1.default.div `
  width: calc(100vw - 500px);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fefefe;

  @media screen and (max-width: 1024px) {
    width: calc(100vw - 400px);
  }
  @media screen and (max-width: 748px) {
    width: 100%;
  }
`;
