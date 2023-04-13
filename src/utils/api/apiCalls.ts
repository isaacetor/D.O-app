import axios from "axios";
import { userData } from "../../types";

const createUser = async (data: userData) => {
  return await axios
    .post("/registeruser", data)
    .then((res) => res.data)
    .catch((err) => {
      return err;
    });
};

const AllUsers = async () => {};

export { createUser, AllUsers };
