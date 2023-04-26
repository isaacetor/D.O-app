import React from "react";
// import { NavLink } from "react-router-dom";
import styled from "styled-components";
import * as yup from "yup";
import Swal from "sweetalert2";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { UseAppDispatch } from "../../../services/statemanagement/Store";
import { directorLogin } from "../../../services/statemanagement/ReduxState";
import { Loading, loginDirector } from "../../../utils";

// import { loginDirector } from "../../../utils";

const AgentLogin = () => {
  const navigate = useNavigate();
  const dispatch = UseAppDispatch();

  const userSchema = yup
  .object({
    email: yup.string().required("please enter an email"),
    name: yup.string().required("please enter a name"),
  })
  .required();
type formData = yup.InferType<typeof userSchema>;

const {
  handleSubmit,
  formState: { errors },
  reset,
  register,
} = useForm<formData>({
  resolver: yupResolver(userSchema),
});

const posting = useMutation({
  mutationKey: ["login"],
  mutationFn: loginDirector,

  onSuccess: (myData: any) => {
    dispatch(directorLogin(myData.data));

    Swal.fire({
      icon: "success",
      title: "Login succesful",
      html: "Taking you to your dashboard",
      timer: 2000,

      didOpen: () => {
        Swal.showLoading();
      },

      willClose: () => {
        navigate("/director/home");
      },
    });
  },
  onError: (error: any) => {
    // handle error here
    Swal.fire({
      title: "login failed",
      text: "email or name incorrect",
      icon: "error",
    });
  },
});

const Submit = handleSubmit(async (data) => {
  posting.mutate(data);
  // reset()
});
  return (
    <Container>
        {posting.isLoading ? <Loading /> : null}
      <Wrapper>
        <h4>ecoBin</h4>
        <h2>Sign in</h2>
        <p>
          Don't have an account?
          <NavLink
            to="/agent/register"
            style={{
              textDecoration: "none",
              margin: "3px",
              color: "#3C37FF",
            }}
          >
            Create one
          </NavLink>
        </p>

        <Form onSubmit={Submit}>
          <InputHold>
            <span>Email</span>
            <input
              type="email"
              required
              placeholder="please enter your email"
              {...register("email")}
            />
          </InputHold>
          <InputHold>
            <span>Name</span>
            <input
              type="password"
              required
              placeholder="please enter name"
              {...register("name")} 
            />
          </InputHold>

          <Button type="submit"> Sign in</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default AgentLogin;

const Button = styled.button`
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
      border: 1px solid #3c37ff;
    }

    ::placeholder {
      color: #00000044;
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
      color: #3c37ff;
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

  @media screen and (max-width: 1024px) {
    width: calc(100vw - 400px);
  }
  @media screen and (max-width: 748px) {
    width: 100%;
  }
`;
