import axios from "./axios";
import { agentData } from "../../types";

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
export const createDirectorStations = async (
  { email, phoneNumber, address, password, station }: agentData,
  id: any
) => {
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

export const loginStation = async ({ email, password }: any) => {
  return await axios
    .post(`${URL}/api/stations/login-station`, { email, password })
    .then((res) => {
      return res.data;
      // console.log(res.data);
    });
};

export const carrierRegister = async ({
  name,
  phoneNumber,
  address,
  email,
  stationID,
}: any) => {
  return await axios
    .post(`${URL}/api/stations/registermalam/${stationID}`, {
      name,
      phoneNumber,
      address,
      email,
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

const allStations = async () => {
  return await axios
    .get(`${URL}/api/stations/all-stations`)
    .then((res) => res.data);
};

const getAllUserRequest = async () => {
  return await axios
    .get(`${URL}/api/station/all-requests`)
    .then((res) => res.data)
    .catch((err) => err.message);
};
const allRequest = async () => {
  return await axios.get(`${URL}/api/requests`).then((res) => res.data);
};

const getallcarrier = async () => {
  return await axios
    .get(`${URL}/api/stations/all-malams`)
    .then((res) => res.data)
    .catch((err) => err.message);
};

const makeRequest = async ({ user, station }: any) => {
  return await axios
    .patch(`${URL}/api/users/make-request/${user}/${station}`)
    .then((res: any) => {
      console.log(res.data);

      // return res.data;
    })
    .catch((err) => {
      return err;
    });
};
export {
  allStations,
  loginUser,
  makeRequest,
  loginDirector,
  getallcarrier,
  allRequest,
  getAllUserRequest,
};
