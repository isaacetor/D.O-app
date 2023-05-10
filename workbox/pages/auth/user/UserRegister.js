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
const utils_1 = require("../../../utils");
const react_query_2 = require("@tanstack/react-query");
const react_1 = require("react");
const UserRegister = () => {
    var _a;
    const navigate = (0, react_router_dom_1.useNavigate)();
    // get all stations
    const { data } = (0, react_query_2.useQuery)({
        queryKey: ["stationId"],
        queryFn: utils_1.allStations,
    });
    // console.log(`station`, data);
    //force all stations to run anytime the page is opened
    (0, react_1.useEffect)(() => { }, [data]);
    //create user
    const userSchema = yup
        .object({
        name: yup.string().required("please enter a name"),
        email: yup.string().email().required("please enter an email"),
        address: yup.string().required("please enter your address"),
        stationName: yup.string().required("please select a station"),
        password: yup.string().required("please enter a password"),
    })
        .required();
    const { handleSubmit, formState: { errors }, register, } = (0, react_hook_form_1.useForm)({
        resolver: (0, yup_1.yupResolver)(userSchema),
    });
    const posting = (0, react_query_1.useMutation)({
        mutationKey: ["newUser"],
        mutationFn: (data) => __awaiter(void 0, void 0, void 0, function* () {
            const result = yield (0, utils_1.createUser)({
                name: data.name,
                phoneNumber: data.phoneNumber,
                email: data.email,
                address: data.address,
                stationName: data.stationName,
                password: data.password,
            });
            return result;
        }),
        onSuccess: (myData) => {
            sweetalert2_1.default.fire({
                title: "Registration succesfull",
                html: "Redirecting you to login",
                timer: 2000,
                timerProgressBar: true,
                willClose: () => {
                    navigate("/user/login");
                },
            });
        },
        onError: (error) => {
            var _a, _b;
            console.log("this is error", error);
            // handle error here
            sweetalert2_1.default.fire({
                title: "error creating user",
                text: (_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message,
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
          <h4>ecoBin</h4>
          <h2>Register</h2>
          <p>
            Have an account?
            <react_router_dom_1.NavLink to="/user/login" style={{
            textDecoration: "none",
            margin: "3px",
            color: "#03b903",
        }}>
              Log in
            </react_router_dom_1.NavLink>
          </p>

          <Form onSubmit={Submit}>
            <InputHold1>
              <InputHold2>
                <span>Name</span>
                <input {...register("name")} type="text" required/>
              </InputHold2>
              <InputHold2>
                <span>email</span>
                <input {...register("email")} type="text" required/>
              </InputHold2>
            </InputHold1>

            <InputHold>
              <span>Address</span>
              <input {...register("address")} type="text" required/>
            </InputHold>
            <InputHold>
              <span>Select Station</span>

              <select {...register("stationName")} required>
                {(_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.map((props) => (<option value={props === null || props === void 0 ? void 0 : props.station} key={props === null || props === void 0 ? void 0 : props._id}>
                    {props === null || props === void 0 ? void 0 : props.station}
                  </option>))}
              </select>
              {errors.stationName && <div>{errors.stationName.message}</div>}
            </InputHold>
            <InputHold>
              <span>Password</span>
              <input {...register("password")} type="password" required/>
            </InputHold>

            <Button type="submit"> Create account</Button>
          </Form>
        </Wrapper>
      </Container>
    </div>);
};
exports.default = UserRegister;
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
const InputHold1 = styled_components_1.default.div `
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
    width: 298px;
    height: 37px;
    padding: 10px;
    font-size: 17px;
    color: #000000d5;
    border: 2px solid #03b903;
    border-radius: 5px;
    outline: 0;

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
      border: 1px solid #03b903;
    }

    @media screen and (max-width: 1024px) {
      width: 74%;
    }
    @media screen and (max-width: 748px) {
      width: 90%;
    }
  }

  select {
    width: 72%;
    height: 60px;
    padding: 10px;
    font-size: 17px;
    color: #000000d5;
    border: 1px solid lightgrey;
    border-radius: 5px;
    outline: 0;

    :focus {
      border: 1px solid #03b903;
    }

    @media screen and (max-width: 1024px) {
      width: 74%;
    }
    @media screen and (max-width: 748px) {
      width: 95%;
    }

    option {
      font-size: 18px;
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
      margin-bottom: 10px;
      margin-top: 20px;
      color: #03b903;
      letter-spacing: 2px;
      font-weight: 500;
    }
  }
`;
const Container = styled_components_1.default.div `
  width: calc(100vw - 500px);
  min-height: 100vh;
  max-height: 100%;
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
