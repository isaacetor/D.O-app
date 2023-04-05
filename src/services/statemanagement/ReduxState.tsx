import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { userData } from "../../types";

const initialState = {
  userDetails: {} as userData | null,
  //   Admin: {} as BusinessData | null,
};

const ReduxState = createSlice({
  name: "DirtyOnline",
  initialState,
  reducers: {
    Userlogin: (state, { payload }: PayloadAction<userData>) => {
      state.userDetails = payload;
    },

    logout: (state) => {
      state.userDetails = null;
    },
  },
});

export const dummy_user: any = { name: "Andrea", role: "admin" };

export const { logout, Userlogin } = ReduxState.actions;

export default ReduxState.reducer;
