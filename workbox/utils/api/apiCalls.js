"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginDirector = exports.makeRequest = exports.loginUser = exports.allStations = exports.carrierRegister = exports.loginStation = exports.createDirectorStations = exports.createUser = void 0;
const axios_1 = __importDefault(require("./axios"));
const URL = "https://dirty-online.onrender.com";
const createUser = ({ name, email, phoneNumber, address, password, stationName, }) => __awaiter(void 0, void 0, void 0, function* () {
    return yield axios_1.default
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
});
exports.createUser = createUser;
const createDirectorStations = ({ email, phoneNumber, address, password, station }, id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield axios_1.default
        .post(`${URL}/api/director/new-station/${id}`, {
        email,
        phoneNumber,
        address,
        password,
        station,
    })
        .then((res) => {
        return res.data;
    });
});
exports.createDirectorStations = createDirectorStations;
const loginStation = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    return yield axios_1.default
        .post(`${URL}/api/stations/login-station`, { email, password })
        .then((res) => {
        return res.data;
        // console.log(res.data);
    });
});
exports.loginStation = loginStation;
const carrierRegister = ({ name, phoneNumber, address, email, stationID, }) => __awaiter(void 0, void 0, void 0, function* () {
    return yield axios_1.default
        .post(`${URL}/api/stations/registermalam/${stationID}`, {
        name,
        phoneNumber,
        address,
        email,
    })
        .then((res) => {
        return res.data;
    });
});
exports.carrierRegister = carrierRegister;
const loginDirector = ({ email, name }) => __awaiter(void 0, void 0, void 0, function* () {
    return yield axios_1.default
        .post(`${URL}/api/director/login-director`, { email, name })
        .then((res) => {
        return res.data;
    });
});
exports.loginDirector = loginDirector;
const loginUser = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    return yield axios_1.default
        .post(`${URL}/api/users/loginuser`, { email, password })
        .then((res) => {
        return res.data;
    });
});
exports.loginUser = loginUser;
const allStations = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield axios_1.default
        .get(`${URL}/api/stations/all-stations`)
        .then((res) => res.data);
});
exports.allStations = allStations;
const makeRequest = ({ user, station }) => __awaiter(void 0, void 0, void 0, function* () {
    return yield axios_1.default
        .patch(`${URL}/api/users/make-request/${user}/${station}`)
        .then((res) => {
        console.log(res.data);
        // return res.data;
    })
        .catch((err) => {
        return err;
    });
});
exports.makeRequest = makeRequest;
