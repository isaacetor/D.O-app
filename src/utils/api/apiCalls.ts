<<<<<<< HEAD
import axios from "axios";
import { agentData, userData } from "../../types";
=======
import axios from "./axios";
import { userData } from "../../types";
>>>>>>> eccfcf627cb1180c31c330940c0affe97b97f797

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

<<<<<<< HEAD
const createAgent = async (data: agentData) => {
  return await axios
    .post("/register-agents", data)
    .then((res) => res.data)
    .catch((err) => {
      return err;
    });
};

export { createUser, AllUsers };
=======
export { createUser, AllUsers, getAll };
>>>>>>> eccfcf627cb1180c31c330940c0affe97b97f797
