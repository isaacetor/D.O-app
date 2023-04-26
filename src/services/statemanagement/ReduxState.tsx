import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { userData } from "../../types";
import { agentData } from "../../types";

const initialState = {
  userDetails: {} as userData | null,
  directorDetails: {} as agentData | null,
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

    logout: (state) => {
      state.userDetails = null;
    },
    updateUser(state, { payload }: PayloadAction<userData>) {
      state.userDetails = payload;
    },
  },
});

// export const dummy_user: any = { name: "Andrea", role: "admin" };

export const { logout, userLogin,updateUser,directorLogin } = ReduxState.actions;


export default ReduxState.reducer;
