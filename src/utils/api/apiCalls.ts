import { updateUser } from "../../services/statemanagement/ReduxState";

import axios from "./axios";

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

// const makeRequest = async ({ user, station }: any) => {
//   try {
//     const res = await axios.patch(
//       `${URL}/api/users/make-request/${user}/${station}`
//     );
//     // const newNumberOfRequests = res.data.RequestData.numberOfRequests;
//     // const usser = useAppSelector((state) => state.userDetails);
//     // const updatedUser: any = {
//     //   ...usser,
//     //   numberOfRequests: newNumberOfRequests,
//     // };
//     // dispatch an action to update the user state in Redux
//     // dispatch(updateUser(updatedUser));
//     return res.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

const makeRequest = async ({ user, station }: any) => {
  return await axios
    .patch(`${URL}/api/users/make-request/${user}/${station}`)
    .then((res: any) => {
      const newNumberOfRequests = res.data.RequestData.numberOfRequests;
      const updatedUser = {
        ...user,
        numberOfRequests: newNumberOfRequests,
      };
      // dispatch an action to update the user state in Redux
      // dispatch(updateUser(updatedUser));
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
export { AllUsers, allStations, loginUser, makeRequest };
