import axios from "axios";
import { agentData, userData } from "../../types";

const createUser = async (data: userData) => {
  return await axios
    .post("/registeruser", data)
    .then((res) => res.data)
    .catch((err) => {
      return err;
    });
};

const AllUsers = async () => {};

const createAgent = async (data: agentData) => {
  return await axios
    .post("/register-agents", data)
    .then((res) => res.data)
    .catch((err) => {
      return err;
    });
};

export { createUser, AllUsers };
