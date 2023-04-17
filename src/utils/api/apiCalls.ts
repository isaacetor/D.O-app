import axios from "./axios";
import { userData } from "../../types";

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

const AllUsers = async () => {};

const allStations = async () => {
  return await axios
    .get(`${URL}/api/stations/all-stations`)
    .then((res) => res.data);
};

export { AllUsers, allStations };
