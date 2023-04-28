import axios from "./axios";
import { agentData, userData,agentInfo } from "../../types";

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
export const createDirectorStations = async ({
  email,
  phoneNumber,
  address,
  password,
  station,
}: agentData,id:any) => {
  return await axios
    .post(`${URL}/api/director/new-station/${id}`, {
      email,
      phoneNumber,
      address,
      password,
      station,
    })
    .then((res) => {
      return res.data;
    });
};

const loginDirector = async ({ email, name }: any) => {
  return await axios
    .post(`${URL}/api/director/login-director`, { email, name })
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

export { AllUsers, allStations,loginUser,loginDirector};
