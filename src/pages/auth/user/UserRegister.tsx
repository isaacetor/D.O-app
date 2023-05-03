import styled from "styled-components";
import * as yup from "yup";
import Swal from "sweetalert2";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { Loading, allStations, createUser } from "../../../utils";
import { useQuery } from "@tanstack/react-query";

const UserRegister = () => {
  const navigate = useNavigate();

  // get all stations
  const { data } = useQuery({
    queryKey: ["stationId"],
    queryFn: allStations,
  });

  // console.log(`this is the stations`, data);

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
    mutationKey: ["newUser"],
    mutationFn: createUser,

    onSuccess: (myData: any) => {
      Swal.fire({
        // title: "Registration succesfull",
        title: `${console.log(myData)}`,
        html: "Redirecting you to login",
        timer: 2000,
        timerProgressBar: true,

        willClose: () => {
          navigate("/user/login");
        },
      });
    },
  });

  const Submit = handleSubmit(async (data: any) => {
    posting.mutate(data);
    // reset()
  });

  return (
    <div>
      <Container>
        {posting.isLoading ? <Loading /> : null}
        <Wrapper>
          <h4>ecoBin</h4>
          <h2>Register</h2>
          <p>
            Have an account?
            <NavLink
              to="/user/login"
              style={{
                textDecoration: "none",
                margin: "3px",
                color: "#03b903",
              }}
            >
              Log in
            </NavLink>
          </p>

          <Form onSubmit={Submit}>
            <InputHold1>
              <InputHold2>
                <span>Name</span>
                <input {...register("name")} type="text" required />
              </InputHold2>
              <InputHold2>
                <span>email</span>
                <input {...register("email")} type="text" required />
              </InputHold2>
            </InputHold1>

            <InputHold>
              <span>Address</span>
              <input {...register("address")} type="text" required />
            </InputHold>
            <InputHold>
              <span>Select Station</span>

              <select {...register("stationName")}>
                {data?.data?.map((props: any) => (
                  <option value={props?.station} key={props?._id}>
                    {props?.station}
                  </option>
                ))}
              </select>
              {errors.stationName && <div>{errors.stationName.message}</div>}
            </InputHold>
            <InputHold>
              <span>Password</span>
              <input {...register("password")} type="password" required />
            </InputHold>

            <Button type="submit"> Create account</Button>
          </Form>
        </Wrapper>
      </Container>
    </div>
  );
};

export default UserRegister;

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

const InputHold1 = styled.div`
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
const InputHold2 = styled.div`
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
      margin-bottom: 10px;
      margin-top: 20px;
      color: #03b903;
      letter-spacing: 2px;
      font-weight: 500;
    }
  }
`;

const Container = styled.div`
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
