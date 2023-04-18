import axios from "./axios";
import { agentData, userData } from "../../types";

const URL = "https://dirty-online.onrender.com";

export const createUser = async ({
  name,
  email,
  phoneNumber,
  address,
  password,
  stationName,
}: any) => {
  return await axios
    .post(`${URL}/api/users/registeruser`, {
      name,
      email,
      phoneNumber,
      address,
      password,
      stationName,
    })
    .then((res) => {
      return res.data;
    });
};

const loginUser = async ({ email, password }: any) => {
  return await axios
    .post(`${URL}/api/users/loginuser`, { email, password })
    .then((res) => {
      return res.data;
    });
};

const AllUsers = async () => {};

const allStations = async () => {
  return await axios
    .get(`${URL}/api/stations/all-stations`)
    .then((res) => res.data);
};

export { AllUsers, allStations, loginUser };
