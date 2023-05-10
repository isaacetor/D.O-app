"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerCarrier = exports.stationLogin = exports.upDateRequest = exports.createStations = exports.directorLogin = exports.userLogin = exports.logout = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    // userDetails: {} as userData | null,
    userDetails: {},
    directorDetails: {},
    registerCarrier: {},
    stationdetail: {},
    directorInfo: {},
    requestNumber: "",
    //   Admin: {} as BusinessData | null,
};
const ReduxState = (0, toolkit_1.createSlice)({
    name: "ecoBin",
    initialState,
    reducers: {
        userLogin: (state, { payload }) => {
            state.userDetails = payload;
        },
        directorLogin: (state, { payload }) => {
            state.directorDetails = payload;
        },
        registerCarrier: (state, { payload }) => {
            state.registerCarrier = payload;
        },
        stationLogin: (state, { payload }) => {
            state.stationdetail = payload;
        },
        createStations: (state, { payload }) => {
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
_a = ReduxState.actions, exports.logout = _a.logout, exports.userLogin = _a.userLogin, exports.directorLogin = _a.directorLogin, exports.createStations = _a.createStations, exports.upDateRequest = _a.upDateRequest, exports.stationLogin = _a.stationLogin, exports.registerCarrier = _a.registerCarrier;
// export const { logout, userLogin, upDateRequest, directorLogin } =
//   ReduxState.actions;
exports.default = ReduxState.reducer;
