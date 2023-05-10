import styled from "styled-components";
import * as yup from "yup";
import Swal from "sweetalert2";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { UseAppDispatch } from "../../../services/statemanagement/Store";
import {
  userLogin,
  upDateRequest,
} from "../../../services/statemanagement/ReduxState";
import { Loading, loginUser } from "../../../utils";

const UserLogin = () => {
  const navigate = useNavigate();
  const dispatch = UseAppDispatch();

  const userSchema = yup
    .object({
      email: yup.string().required("please enter an email"),
      password: yup.string().required("please enter a password"),
    })
    .required();
  type formData = yup.InferType<typeof userSchema>;

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<formData>({
    resolver: yupResolver(userSchema),
  });

  const posting = useMutation({
    mutationKey: ["login"],
    mutationFn: loginUser,

    onSuccess: (myData: any) => {
      dispatch(userLogin(myData.data));
      dispatch(upDateRequest(myData.data.numberOfRequests));

      Swal.fire({
        icon: "success",
        title: "Login succesful",
        html: "Taking you to your dashboard",
        timer: 1200,

        didOpen: () => {
          Swal.showLoading();
         
        },
          willClose: () => {
          navigate("/user/home");
        },
      });
    },
    onError: (error: any) => {
      console.log("this is error", error);

      // handle error here
      Swal.fire({
        title: "login failed",
        text: "email or password incorrect",
        icon: "error",
      });
    },
  });

  const Submit = handleSubmit(async (data) => {
    posting.mutate(data);
    // reset()
  });

  return (
    <div>
      <Container>
        {posting.isLoading ? <Loading /> : null}
        <Wrapper>
          <h4>ecoBIN</h4>
          <h2>Sign in</h2>
          <p>
            Don't have an account?
            <NavLink
              to="/user/register"
              style={{
                textDecoration: "none",
                margin: "3px",
                color: "#03b903",
              }}
            >
              Create one
            </NavLink>
          </p>

          <Form onSubmit={Submit}>
            <InputHold>
              <span>Email</span>
              <input {...register("email")} type="email" required />
            </InputHold>
            <InputHold>
              <span>Password</span>
              <input {...register("password")} type="password" required />
            </InputHold>

            <Button type="submit"> Sign in</Button>
          </Form>
        </Wrapper>
      </Container>
    </div>
  );
};

export default UserLogin;

const Button = styled.button`
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

const InputHold = styled.div`
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

const Form = styled.form``;

const Wrapper = styled.div`
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

const Container = styled.div`
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
