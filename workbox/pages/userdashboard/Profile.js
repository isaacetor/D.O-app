"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const components_1 = require("../../components");
const Store_1 = require("../../services/statemanagement/Store");
const Profile = () => {
    var _a, _b;
    const user = (0, Store_1.useAppSelector)((state) => state.userDetails);
    console.log("user", (_a = user === null || user === void 0 ? void 0 : user.station) === null || _a === void 0 ? void 0 : _a.station);
    // const stat = user?.station;
    let initials = user === null || user === void 0 ? void 0 : user.name.split(" ").map((word) => word.charAt(0)).join("");
    return (<div>
      <Container>
        <Wrapper>
          <h2>Account Setting</h2>
          <Dp>{initials}</Dp>
          <Form>
            <InputHold1>
              <InputHold2>
                <span>Name</span>
                <Hold>
                  <span>{user === null || user === void 0 ? void 0 : user.name}</span>
                </Hold>
              </InputHold2>
              <InputHold2>
                <span>Email</span>
                <Hold>
                  <input type="text" placeholder={user === null || user === void 0 ? void 0 : user.email}/>
                </Hold>
              </InputHold2>
            </InputHold1>
            <InputHold1>
              <InputHold2>
                <span>Phone Number</span>
                <Hold>
                  <input type="number" placeholder={`${(user === null || user === void 0 ? void 0 : user.phoneNumber) === undefined
            ? "please enter your phone number"
            : `${user === null || user === void 0 ? void 0 : user.phoneNumber}`}`}/>
                </Hold>
              </InputHold2>
              <InputHold2>
                <span>Address</span>
                <Hold>
                  <input type="text" placeholder={user === null || user === void 0 ? void 0 : user.address}/>
                </Hold>
              </InputHold2>
            </InputHold1>
            <InputHold1>
              <InputHold2>
                <span>Station</span>
                <Hold>
                  <span>{(_b = user === null || user === void 0 ? void 0 : user.station) === null || _b === void 0 ? void 0 : _b.station}</span>
                </Hold>
              </InputHold2>
            </InputHold1>

            <components_1.GlobalButton bg="#03b903" col="#fff" padding="18px 30px" text="update profile" width="200px"/>
          </Form>
        </Wrapper>
      </Container>
    </div>);
};
exports.default = Profile;
const Dp = styled_components_1.default.div `
  width: 80px;
  height: 80px;
  border-radius: 50%;
  color: white;
  background-color: #123456;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  font-size: 2rem;
  font-weight: 500;
`;
const Hold = styled_components_1.default.div `
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 300px;
  height: 37px;
  padding: 10px;
  font-size: 17px;
  color: #000000d5;
  border: 2px solid #03b903;
  border-radius: 5px;
  outline: 0;

  input {
    font-size: 17px;

    ::placeholder {
      color: #000000da;
    }
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
    border: 0;
    border-radius: 5px;
    outline: 0;
  }

  @media screen and (max-width: 1024px) {
    width: 74%;
  }

  @media screen and (max-width: 722px) {
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
    border: 0;
    @media screen and (max-width: 1024px) {
      display: block;
      width: 100%;
    }

    @media screen and (max-width: 748px) {
      width: 90%;
    }
  }
`;
const Form = styled_components_1.default.form `
  margin-bottom: 20px;
`;
const Wrapper = styled_components_1.default.div `
  width: 90%;

  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-weight: 600;
    font-size: 2rem;

    @media screen and (max-width: 748px) {
      font-size: 1.5rem;
    }
  }

  p {
    margin: 0;
    font-size: 15px;
    margin-bottom: 35px;
  }
`;
const Container = styled_components_1.default.div `
  width: calc(100vw - 270px);
  margin-bottom: 70px;
  min-height: 100vh;
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fefefe;

  @media screen and (max-width: 748px) {
    width: 100%;
    margin-bottom: 70px;
    margin-top: 20px;
  }
`;
