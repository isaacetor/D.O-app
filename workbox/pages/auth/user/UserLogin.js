"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const yup = __importStar(require("yup"));
const sweetalert2_1 = __importDefault(require("sweetalert2"));
const yup_1 = require("@hookform/resolvers/yup");
const react_hook_form_1 = require("react-hook-form");
const react_router_dom_1 = require("react-router-dom");
const react_query_1 = require("@tanstack/react-query");
const Store_1 = require("../../../services/statemanagement/Store");
const ReduxState_1 = require("../../../services/statemanagement/ReduxState");
const utils_1 = require("../../../utils");
const UserLogin = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const dispatch = (0, Store_1.UseAppDispatch)();
    const userSchema = yup
        .object({
        email: yup.string().required("please enter an email"),
        password: yup.string().required("please enter a password"),
    })
        .required();
    const { handleSubmit, formState: { errors }, register, } = (0, react_hook_form_1.useForm)({
        resolver: (0, yup_1.yupResolver)(userSchema),
    });
    const posting = (0, react_query_1.useMutation)({
        mutationKey: ["login"],
        mutationFn: utils_1.loginUser,
        onSuccess: (myData) => {
            dispatch((0, ReduxState_1.userLogin)(myData.data));
            dispatch((0, ReduxState_1.upDateRequest)(myData.data.numberOfRequests));
            sweetalert2_1.default.fire({
                icon: "success",
                title: "Login succesful",
                html: "Taking you to your dashboard",
                timer: 1200,
                didOpen: () => {
                    sweetalert2_1.default.showLoading();
                },
                willClose: () => {
                    navigate("/user/home");
                },
            });
        },
        onError: (error) => {
            console.log("this is error", error);
            // handle error here
            sweetalert2_1.default.fire({
                title: "login failed",
                text: "email or password incorrect",
                icon: "error",
            });
        },
    });
    const Submit = handleSubmit((data) => __awaiter(void 0, void 0, void 0, function* () {
        posting.mutate(data);
        // reset()
    }));
    return (<div>
      <Container>
        {posting.isLoading ? <utils_1.Loading /> : null}
        <Wrapper>
          <h4>ecoBIN</h4>
          <h2>Sign in</h2>
          <p>
            Don't have an account?
            <react_router_dom_1.NavLink to="/user/register" style={{
            textDecoration: "none",
            margin: "3px",
            color: "#03b903",
        }}>
              Create one
            </react_router_dom_1.NavLink>
          </p>

          <Form onSubmit={Submit}>
            <InputHold>
              <span>Email</span>
              <input {...register("email")} type="email" required/>
            </InputHold>
            <InputHold>
              <span>Password</span>
              <input {...register("password")} type="password" required/>
            </InputHold>

            <Button type="submit"> Sign in</Button>
          </Form>
        </Wrapper>
      </Container>
    </div>);
};
exports.default = UserLogin;
const Button = styled_components_1.default.button `
  padding: 20px 30px;
  background-color: #03b903;
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
    width: 60%;
    height: 35px;
    padding: 10px;
    font-size: 17px;
    color: #000000d5;
    border: 1px solid lightgrey;
    border-radius: 5px;
    outline: 0;

    :focus {
      border: 1px solid #03b903;
    }

    @media screen and (max-width: 980px) {
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
      display: block;
      margin: 0;
      margin-bottom: 50px;
      color: #03b903;
      letter-spacing: 2px;
      font-weight: 500;
    }
  }
`;
const Container = styled_components_1.default.div `
  width: calc(100vw - 500px);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fefefe;
  position: relative;

  @media screen and (max-width: 1024px) {
    width: calc(100vw - 400px);
  }
  @media screen and (max-width: 748px) {
    width: 100%;
  }
`;
