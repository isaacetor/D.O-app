"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppSelector = exports.UseAppDispatch = exports.Store = void 0;
const ReduxState_1 = __importDefault(require("./ReduxState"));
const toolkit_1 = require("@reduxjs/toolkit");
const react_redux_1 = require("react-redux");
const storage_1 = __importDefault(require("redux-persist/lib/storage"));
const redux_persist_1 = require("redux-persist");
const persistConfig = {
    key: "ecoBin",
    version: 1,
    storage: storage_1.default,
};
const persistedReducer = (0, redux_persist_1.persistReducer)(persistConfig, ReduxState_1.default);
exports.Store = (0, toolkit_1.configureStore)({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [redux_persist_1.FLUSH, redux_persist_1.REHYDRATE, redux_persist_1.PAUSE, redux_persist_1.PERSIST, redux_persist_1.PURGE, redux_persist_1.REGISTER],
        },
    }),
});
exports.UseAppDispatch = react_redux_1.useDispatch;
exports.useAppSelector = react_redux_1.useSelector;
