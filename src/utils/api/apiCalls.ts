import axios from "./axios";
import { userData } from "../../types";

const createUser = async (data: userData) => {
  return await axios
    .post("/users/registeruser", data)
    .then((res) => {
      // console.log("this is res", res.data);
    })
    .catch((err) => {
      return err;
    });
};

const AllUsers = async () => {};
const getAll = async (path: any) => {
  return await axios.get(`stations/${path}/`).then((res) => {
    console.log("from api", res.data);
  });
};

export { createUser, AllUsers, getAll };
