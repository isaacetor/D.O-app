import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { userData } from "../../types";
import { agentData } from "../../types";
import { agentInfo } from "../../types";
const initialState = {
  userDetails: {} as userData | null,
  directorDetails: {} as agentData | null,

  directorInfo: {} as agentData | null,

  requestNumber: "" as string | null,

  //   Admin: {} as BusinessData | null,
};

const ReduxState = createSlice({
  name: "ecoBin",
  initialState,
  reducers: {
    userLogin: (state, { payload }: PayloadAction<userData>) => {
      state.userDetails = payload;
    },
    directorLogin: (state, { payload }: PayloadAction<agentData>) => {
      state.directorDetails = payload;
    },
    createStations: (state, { payload }: PayloadAction<agentData>) => {
      state.directorInfo = payload;
    },

    logout: (state) => {
      state.userDetails = null;
    },
    upDateRequest(state, { payload }) {
      state.requestNumber = payload;
    },
  },
});


// export const dummy_user: any = { name: "Andrea", role: "admin" };

export const { logout, userLogin,directorLogin,createStations,upDateRequest } = ReduxState.actions;

// export const { logout, userLogin, upDateRequest, directorLogin } =
//   ReduxState.actions;


export default ReduxState.reducer;
